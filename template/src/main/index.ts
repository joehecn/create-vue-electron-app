

import { join } from 'path'
import { app, BrowserWindow } from 'electron'
import dotenv from 'dotenv'
import isDev from 'electron-is-dev'
import { format as formatUrl } from 'url'

dotenv.config({ path: join(__dirname, '../../.env') })

// 开发模式
const makeDevelopmentMode = win => {
  // vite 启动的服务器地址
  win.loadURL(`http://localhost:${process.env.PORT}/`)
  // 打开开发者工具
  win.webContents.openDevTools()
}

// 生产模式
const makeProductMode = win => {
  win.loadURL(formatUrl({
    pathname: join(__dirname, '../../dist/render/index.html'),
    protocol: 'file',
    slashes: true
  }))
  // 打开开发者工具
  // win.webContents.openDevTools()
}

function createWindow () {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true // 在WebWorkers中使用多线程Node.js
    }
  })

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    // 销毁相关对象
    win = null
  })

  // 开发模式
  if (isDev) {
    makeDevelopmentMode(win)
    return win
  }

  // 生产模式
  makeProductMode(win)
  return win
}

app.whenReady().then(createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
