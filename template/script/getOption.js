
const { resolve } = require('path')
const esbuild = require('rollup-plugin-esbuild')

module.exports = isDev => {
  return {
    input: resolve(__dirname, '../src/main/index.ts'),
    plugins: [
      esbuild({
        minify: !isDev
      })
    ],
    output: {
      file: resolve(__dirname, '../dist/main/build.js'),
      format: 'cjs',
      name: 'ElectronMainBundle',
      sourcemap: true
    },
    external: [
      'path',
      'electron'
    ]
  }
}