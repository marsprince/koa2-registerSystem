/**
 * Created by liujia on 2016/7/29.
 */

import passport from 'koa-passport'

let authController={};
var user = { id: 1, username: 'test' }

authController.login=passport.authenticate('local')
authController.init=(app)=>{
    
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

    app.use(passport.initialize())
    app.use(passport.session())
    console.log('\n***** Passport has been established successfully *****\n');

    return app
}

export default authController

