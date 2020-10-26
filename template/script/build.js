
const rollup = require('rollup');

const path = require('path')
require('dotenv').config({ path: path.resolve(process.cwd(), '.env') })

const waitOn = require('wait-on')

const argv = require('minimist')(process.argv.slice(2))

console.log(argv)

const opt = require('./rollup.config')(argv.env)

const electron = require('electron-connect').server.create({ stopOnClose: true })

const TAG = '[script/build.js]'
const spinner = require('ora')(`${TAG} Electron build...`)
const chalk = require('chalk')

if (argv.watch) {
  waitOn({
    resources: [`http://localhost:${process.env.PORT}`],
    log: false
  }, err => {
    if (err) {
      console.error(err)
      process.exit(1)
    }
    
    // once here, all resources are available
    const watcher = rollup.watch(opt)

    watcher.on('change', filename => {
      const log = chalk.green(`change -- ${filename}`)
      console.log(TAG, log)
    })

    watcher.on('event', ev => {
      if (ev.code === 'END') {
        // init-未启动、started-第一次启动、restarted-重新启动
        electron.electronState === 'init' ? electron.start() : electron.restart()
      } else if (ev.code === 'ERROR') {
        console.error(ev.error)
      }
    })
  })
} else {
  spinner.start()
  rollup.rollup(opt)
    .then(build => {
      spinner.stop();
      console.log(TAG, chalk.green('Electron build successed.'))
      build.write(opt.output)
    })
    .catch(error => {
      spinner.stop()
      console.log(`\n${TAG} ${chalk.red('构建报错')}\n`, error, '\n')
    });
}
