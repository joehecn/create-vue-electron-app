
const rollup = require('rollup')
const chalk = require('chalk')
const opt = require('./getOption')(false)

const TAG = '[script/build.js]'
const spinner = require('ora')(`${TAG} Electron build...`)

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
  })

