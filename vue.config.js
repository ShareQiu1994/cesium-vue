const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const cesiumSource = 'node_modules/cesium/Source'
const cesiumWorkers = '../Build/Cesium/Workers'

module.exports = {
  publicPath: './',
  assetsDir: './static',
  productionSourceMap: false,
  lintOnSave: true, // 是否开启eslint
  devServer: {
    open: true
  },
  configureWebpack: config => {
    let plugins = []
    if (process.env.NODE_ENV === 'production') {
      plugins = [
        new webpack.DefinePlugin({
          CESIUM_BASE_URL: JSON.stringify('static')
        }),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, cesiumWorkers), to: 'static/Workers' }]),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'static/Assets' }]),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'static/Widgets' }]),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        })
      ]
    } else {
      plugins = [
        new webpack.DefinePlugin({
          CESIUM_BASE_URL: JSON.stringify('')
        }),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' }]),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'Assets' }]),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' }]),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        })
      ]
    }
    return {
      output: {
        sourcePrefix: ' '
      },
      amd: {
        toUrlUndefined: true
      },
      resolve: {
        alias: {
          vue$: 'vue/dist/vue.esm.js',
          '@': path.resolve('src'),
          cesium: path.resolve(__dirname, cesiumSource)
        }
      },
      module: {
        unknownContextCritical: false
      },
      plugins: plugins
    }
  }
}
