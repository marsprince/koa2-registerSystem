/**
 * Created by liujia on 2016/7/15.
 */

const authController =require('../controller/authController')

const router= require('koa-router')()

router.post('/auth/login',authController.login,(ctx,next)=>{
    const successResult={success:true},
        failedResult={success:false};
    ctx.body=ctx.isAuthenticated()?successResult:failedResult
});

router.get('/logout', authController.secured,(ctx,next)=> {
    ctx.logout()
    ctx.redirect('/')
})

module.exports = router;