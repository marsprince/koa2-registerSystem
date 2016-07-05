/**
 * Created by liujia on 2016/6/29.
 */

import Koa from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router=Router()

router.get('/', function (ctx, next) {
    ctx.body="hello"
});

app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000, () => console.log('server started 3000'))

export default app

