/**
 * Created by liujia on 2016/6/29.
 */

import Koa from 'koa'
import Router from 'koa-router'
import render from 'koa-swig'
import co from 'co'
import path from 'path';
import serve from 'koa-static'

const app = new Koa()
const router=Router()

app.use(serve(__dirname + '/public'));

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

