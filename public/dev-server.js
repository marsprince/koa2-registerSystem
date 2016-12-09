/**
 * Created by jialiu on 16/12/9.
 */

var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
var config = require('./webpack.dev.config');
var port = process.argv[2] || 4001;

[
    "webpack-dev-server/client?http://localhost:"+port,
    "webpack/hot/dev-server"
].forEach(function(one){
    config.entry.main.unshift(one);
});
config.plugins.unshift(new webpack.HotModuleReplacementPlugin());
config.output.path = "/";
config.debug = true;
var server = new WebpackDevServer(webpack(config), {
    contentBase: "./dist/",

    hot: true,

    historyApiFallback: true,
    host: '127.0.0.1',
    filename: config.entry.main[0],
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
});
server.listen(port, "0.0.0.0", function() {
    console.log('====================================')
    console.log('Server listen: http://localhost:'+port);
    console.log('====================================')
});
