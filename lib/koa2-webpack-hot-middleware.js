/**
 * Created by liujia on 2016/7/12.
 */

import webpackHotMiddleware from 'webpack-hot-middleware';

// personal taste, totally optional
const stats = {chunkModules: false, colors: 'debug' != process.env.NODE_ENV};

export default (compiler, options = {}) => {
    // this is how we get the original webpack dev middleware, also totally
    // optional if you willing to let user pass in everything.
    const {publicPath} = compiler.options.output;
    const defaults = options.publicPath ? options : {publicPath, stats};
    const middleware = webpackHotMiddleware(compiler, Object.assign({}, defaults, options));

    // CAUTION: explicitly return middleware here because we don't want to
    // initialize webpackDevMiddleware instance through every request.
    return async (context, next) => {
        middleware(context.req, context.res, () => Promise.resolve())
        await next();
    };
}