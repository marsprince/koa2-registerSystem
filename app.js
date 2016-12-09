/**
 * Created by jialiu on 16/12/9.
 */
import Koa from 'koa'
import render from 'koa-swig'
import co from 'co'
import path from 'path';
import serve from 'koa-static';
import logger from 'koa-logger'
import convert from 'koa-convert'

//database config

import databaseDev from './config/mysql.config'
const databaseConfig = process.env.NODE_ENV == 'production' ? null : databaseDev

//init
const app = module.exports = new Koa()

// trust proxy
app.proxy = true

//session

const session = require('koa-generic-session')
    , MysqlStore = require('koa-mysql-session')
    , THIRTY_MINTUES = 30 * 60 * 1000;
//keys

app.keys = ['your-session-secret']

app.use(convert(session({
    store: new MysqlStore(databaseConfig),
    rolling: true,
    cookie: {
        maxage: THIRTY_MINTUES
    }
})))

//body parser
import bodyParser from 'koa-bodyparser'
app.use(bodyParser())


//获得环境，开发or生产

const environment = process.env.NODE_ENV || 'development';

//配置生产和开发

if (environment !== 'production') {
    console.log('DEVOLOPMENT ENVIRONMENT INIT   ===================');
    app.use(logger());
    const webpackDevHelper = require('./bin/dev');
    webpackDevHelper.useWebpackMiddleware(app);
} else {
    console.log('PRODUCTION ENVIRONMENT INIT    ====================');
    //Production needs physical files! (built via separate process)
    app.use(serve(path.resolve(__dirname, '../public')));
}

// authentication

import authController from './src/controller/authController'
authController.init(app)

/*
 为ctx添加render方法，渲染html
 */
app.context.render = co.wrap(render({
    root: path.join(__dirname, '../public/views'),
    writeBody: false
}));

app.use((ctx,next)=>{

    return next()
})
//init router
import initRouters from './src/routers/index'
initRouters(app)

export default app

