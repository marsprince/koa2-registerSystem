/**
 * Created by liujia on 2016/7/15.
 */

import Router from 'koa-router'

const router=Router()

router.get('/', async(ctx, next)=> {
    ctx.body = await ctx.render('login');
});

router.get('home', async(ctx, next)=> {
    console.log(ctx.isAuthenticated())
    ctx.body = await ctx.render('home');
});

router.get('/dist', async(ctx, next)=> {
    await serve(__dirname + '/public')
});
module.exports = router;