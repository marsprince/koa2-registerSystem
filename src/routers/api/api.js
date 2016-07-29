/**
 * Created by liujia on 2016/7/15.
 */

import Router from 'koa-router'

const router=Router()

router.post('/auth/login', function (ctx, next) {
    passport.authenticate('local', {
        successRedirect: '/app',
        failureRedirect: '/'
    })
});

module.exports = router;