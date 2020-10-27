
import { resolve } from 'path'
import { app, BrowserWindow } from 'electron'

const isDev = process.env.NODE_ENV == 'dev'

// 开发模式
const makeDevelopmentMode = (win: BrowserWindow) => {
  // vite 启动的服务器地址
  win.loadURL('http://localhost:3000/')
  // 打开开发者工具
  win.webContents.openDevTools()
}

// 生产模式
const makeProductMode = (win: BrowserWindow) => {
  const file = resolve(__dirname, '../../dist/render/index.html')
  win.loadFile(file)

  // // 打开开发者工具
  win.webContents.openDevTools()
}

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true // 在WebWorkers中使用多线程Node.js
    }
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
