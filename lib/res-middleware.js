/**
 * Created by liujia on 2016/7/13.
 */

// personal taste, totally optional

export default (options = {}) => {
    // this is how we get the original webpack dev middleware, also totally
    // optional if you willing to let user pass in everything.

    // CAUTION: explicitly return middleware here because we don't want to
    // initialize webpackDevMiddleware instance through every request.
    return async (ctx, next) => {
        ctx.res.send=(content)=>{
            ctx.body=content
        }
        await next();
    };
}