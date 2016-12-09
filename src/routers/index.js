/**
 * Created by liujia on 2016/7/15.
 */

import Router from 'koa-router'
import authController from '../controller/authController'

const router=Router()

router.get('/', authController.redirect,async(ctx, next)=> {
    ctx.body = await ctx.render('login');
});

router.get('home', authController.secured,async(ctx, next)=> {
    ctx.body = await ctx.render('home');
});

router.get('/dist', async(ctx, next)=> {
    await serve(__dirname + '/public')
});
module.exports = router;