
import { resolve } from 'path'
import { UserConfig } from 'vite'

const config: UserConfig = {
  root: resolve(__dirname, 'src/render'),
  base: './',
  outDir: resolve(__dirname, 'dist/render')
}

export default config
