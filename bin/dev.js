/**
 * Created by liujia on 2016/7/11.
 */

import webpack from 'webpack';
import webpackDevMiddleware from '../lib/koa2-webpack-dev-middleware';
import webpackHotMiddleware from '../lib/koa2-webpack-hot-middleware';
import webpackconfig from '../public/webpack.dev.config';
import test from '../lib/res-middleware'
const webpackcompiler=webpack(webpackconfig);

//enable webpack middleware for hot-reloads in development
function useWebpackMiddleware(app) {
    app.use(test())
    app.use(webpackDevMiddleware(webpackcompiler, {
                publicPath: webpackconfig.output.publicPath,
                stats: {
                    colors: true,
                    chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
                    'errors-only': true
                }}
    ))
    
    return app;
}

module.exports = {
    useWebpackMiddleware: useWebpackMiddleware
};