const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
  output: {
    publicPath: '/js',
    filename: 'origo.js',
    library: {
      type: 'var',
      export: 'default',
      name: 'Origo',
    },
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../'),
      watch: {
        ignored: ['**/data/**'],
      },
      staticOptions: {
        headers: {
          'Cache-Control': 'public, max-age=2592000',
        },
      },
    },
    compress: true,
    port: 9966,
  },
});
