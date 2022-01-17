const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const cesiumSource = 'node_modules/cesium/Build/Cesium'

module.exports = {
  publicPath: './',
  assetsDir: './static',
  productionSourceMap: false,
  lintOnSave: false, // 是否开启eslint
  devServer: {
    open: true
  },
  configureWebpack: (config) => {
    let plugins = []
    if (process.env.NODE_ENV === 'production') {
      plugins = [
        new webpack.DefinePlugin({
          CESIUM_BASE_URL: JSON.stringify('static')
        }),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Workers'), to: 'static/Workers' }]),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'static/Assets' }]),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'ThirdParty'), to: 'static/ThirdParty' }]),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'static/Widgets' }])
      ]
    } else {
      plugins = [
        new webpack.DefinePlugin({
          CESIUM_BASE_URL: JSON.stringify('')
        }),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Workers'), to: 'Workers' }]),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'Assets' }]),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'ThirdParty'), to: 'ThirdParty' }]),
        new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' }])
      ]
    }
    return {
      module: {
        unknownContextCritical: false,
        rules: [
          {
            test: /\.js$/,
            enforce: 'pre',
            include: path.resolve(__dirname, 'node_modules/cesium/Source'),
            sideEffects: false,
            use: [
              {
                loader: 'strip-pragma-loader',
                options: {
                  pragmas: {
                    debug: false
                  }
                }
              }
            ]
          },
          {
            test: /.js$/,
            include: path.resolve(__dirname, 'node_modules/cesium/Source'),
            use: { loader: require.resolve('@open-wc/webpack-import-meta-loader') }
          }
        ]
      },
      optimization: {
        usedExports: true,
        splitChunks: {
          maxInitialRequests: Infinity,
          minSize: 0,
          maxSize: 250000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              chunks: 'all',
              name (module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
                return `npm.${packageName.replace('@', '')}`
              }
            },
            commons: {
              name: 'Cesium',
              test: /[\\/]node_modules[\\/]cesium/,
              priority: 10,
              chunks: 'all'
            }
          }
        }
      },
      output: {
        sourcePrefix: ' '
      },
      amd: {
        toUrlUndefined: true
      },
      resolve: {
        alias: {
          '@': path.resolve('src')
        }
      },
      node: {
        fs: 'empty',
        Buffer: false,
        http: 'empty',
        https: 'empty',
        zlib: 'empty'
      },
      plugins: plugins
    }
  }
}
