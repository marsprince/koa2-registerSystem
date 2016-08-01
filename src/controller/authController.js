/**
 * Created by liujia on 2016/7/29.
 */

import passport from 'koa-passport'

let authController={};

authController.login=(ctx, next) =>{
    return passport.authenticate('local', function(user, info, status) {
        if (user === false) {
            ctx.status = 401
            ctx.body = { success: false }
        } else {
            ctx.body = { success: true }
        }
    })(ctx, next)
}

authController.init=(app)=>{
    app.use(passport.initialize())
    app.use(passport.session())
    console.log('\n***** Passport has been established successfully *****\n');
    
    var user = { id: 1, username: 'test' }

    passport.serializeUser(function(user, done) {
        done(null, user.id)
    })

    passport.deserializeUser(function(id, done) {
        done(null, user)
    })

    const LocalStrategy = require('passport-local').Strategy
    passport.use(new LocalStrategy(function(username, password, done) {
        console.log(username)
        if (username === 'test' && password === 'test') {
            done(null, user)
        } else {
            done(null, false)
        }
    }))
    return app
}

export default authController

