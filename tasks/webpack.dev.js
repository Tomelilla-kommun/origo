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
      name: 'Origo'
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../') // Correct directory path
    },
    port: 9966,
    setupMiddlewares: (middlewares, devServer) => {
      devServer.app.get('*.terrain', function(req, res, next) {
        console.log('Requesting:', req.url);  // Log request URL for debugging
        res.setHeader('Content-Type', 'application/octet-stream'); // safe default
        // res.setHeader('Content-Encoding', 'gzip'); //  keep this if your terrain tiles are stored gzipped (they usually are)
        res.setHeader('Cache-Control', 'public, max-age=2592000'); // 30 days
        next();
      });
      devServer.app.get('*.glb', function(req, res, next) {
        console.log('Requesting:', req.url);  // Log request URL for debugging
        res.setHeader('Content-Type', 'model/gltf-binary');
        res.setHeader('Cache-Control', 'public, max-age=2592000');
        next();
      });
      return middlewares;
    }
  },
  devtool: 'eval-cheap-source-map',
});

