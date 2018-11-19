var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var serverPort = process.env.PORT || 3001;
var serverHost = '0.0.0.0';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(serverPort, serverHost, function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log("Listening at " + serverHost + ":" + serverPort);
});
