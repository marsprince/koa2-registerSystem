/**
 * Created by liujia on 2016/7/29.
 */

import passport from 'koa-passport'
import db from '../models/index'
const LocalStrategy = require('passport-local').Strategy

let authController={};
var user = { id: 1, username: 'test' }

const localStrategy=new LocalStrategy(async (username, password, done)=>{
    var user=await db.User.findOne({
        where:{
            username:username
        }
    })
    if (user.password === password) {
        done(null, user)
    } else {
        done(null, false)
    }
})

authController.login=passport.authenticate('local')

authController.secured=async (ctx,next)=> {
    if (ctx.isAuthenticated()) {
        return next();
    } else {
        ctx.status = 401;
        ctx.redirect('/')
    }
};

authController.redirect=async (ctx,next)=> {
    if (ctx.isAuthenticated()) {
        ctx.redirect('/home')
    } else {
       return next()
    }
};

authController.init=(app)=>{

    const User=db.User
    
    passport.serializeUser(function(user, done) {
        done(null, user.id)
    })

    passport.deserializeUser(function(id, done) {
        User.findById(id,done)
    })

    passport.use(localStrategy)

    app.use(passport.initialize())
    app.use(passport.session())
    console.log('\n***** Passport has been established successfully *****\n');

    return app
}

export default authController

