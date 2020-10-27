
const waitOn = require('wait-on')

waitOn({
  resources: ['http://localhost:3000'],
  log: false
}, err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  const rollup = require('rollup')
  const chalk = require('chalk')
  const electron = require('electron-connect').server.create({ stopOnClose: true })
  
  const TAG = '[script/dev]'
  
  const opt = require('./getOption')(true)
  
  const watcher = rollup.watch(opt)
  
  watcher.on('change', filename => {
    const log = chalk.green(`change -- ${filename}`)
    console.log(TAG, log)
  })
  
  watcher.on('event', event => {
    // event.code can be one of:
    //   START        — the watcher is (re)starting
    //   BUNDLE_START — building an individual bundle
    //   BUNDLE_END   — finished building a bundle
    //   END          — finished building all bundles
    //   ERROR        — encountered an error while bundling
    if (event.code === 'END') {
      // init-未启动、started-第一次启动、restarted-重新启动
      electron.electronState === 'init' ? electron.start() : electron.restart()
    } else if (event.code === 'ERROR') {
      console.error(event.error)
    }
  })
})
