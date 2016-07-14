/**
 * Created by liujia on 2016/6/29.
 */

import Koa from 'koa'
import Router from 'koa-router'
import render from 'koa-swig'
import co from 'co'
import path from 'path';
import serve from 'koa-static';
import logger from 'koa-logger'

const app = new Koa()
const router=Router()


/*
获得环境，开发or生产
 */
const environment = process.env.NODE_ENV || 'development';
/*
配置生产和开发
 */
if (environment !== 'production') {
    console.log('DEVOLOPMENT ENVIRONMENT INIT   ===================');
    app.use(logger());
    const webpackDevHelper = require('./dev');
    webpackDevHelper.useWebpackMiddleware(app);
} else {
    console.log('PRODUCTION ENVIRONMENT INIT    ====================');
    //Production needs physical files! (built via separate process)
    app.use(serve(path.resolve(__dirname , '../public')));
}

/*
为ctx添加render方法，渲染html
 */
app.context.render = co.wrap(render({
    root: path.join(__dirname, '../public/views'),
    writeBody: false
}));

router.get('/', async (ctx, next)=> {
    ctx.body=await ctx.render('login');
});

router.get('/dist', async (ctx, next)=> {
    await serve(__dirname + '/public')
});

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000, () => console.log('server started 3000'))

export default app

