/**
 * Created by liujia on 2016/7/15.
 */

const authController =require('../controller/authController')

import api from './api'

const router=require('koa-router')()

router.get('/', authController.redirect,async(ctx, next)=> {
    ctx.body ='hello world';
});

router.get('home', authController.secured,async(ctx, next)=> {
    ctx.body = await ctx.render('home');
});

router.get('/dist', async(ctx, next)=> {
    await serve(__dirname + '/public')
});

router.use('/api',api.routes(),api.allowedMethods())

module.exports = router;