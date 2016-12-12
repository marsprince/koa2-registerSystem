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
import bodyParser from 'koa-bodyparser'
import databaseDev from './config/mysql.config'
import session from 'koa-generic-session'
import MysqlStore from 'koa-mysql-session'
import passport from 'koa-passport'
import authController from './src/controller/authController'
import cors from 'kcors'
import index from './src/routers/index'
import Router from 'koa-router'

const app = module.exports = new Koa()
const router=Router()

//configs

const environment = process.env.NODE_ENV || 'development';
const databaseConfig = databaseDev[environment]

const THIRTY_MINTUES = 30 * 60 * 1000;

/*
根据环境不同加载不同的东西
 */

if (environment !== 'production') {
    console.log('DEVOLOPMENT ENVIRONMENT INIT   ===================');
    app.use(logger());
} else {
    console.log('PRODUCTION ENVIRONMENT INIT    ====================');
    //Production needs physical files! (built via separate process)
    app.use(serve(path.resolve(__dirname, '../public')));
}

/*
初始化
 */

authController.init(passport)

/*
加载app
 */


app.proxy = true

app.keys = ['your-session-secret']

/*
加载中间件
 */

app.use(convert(session({
    store: new MysqlStore(databaseConfig),
    rolling: true,
    cookie: {
        maxage: THIRTY_MINTUES
    }
})))

app.use(bodyParser())

app.use(passport.initialize())
app.use(passport.session())
console.log('\n***** Passport has been established successfully *****\n');

/*
 为ctx添加render方法，渲染html
 */
app.context.render = co.wrap(render({
    root: path.join(__dirname, './public/views'),
    writeBody: false
}));

//init router
app.use(cors());
app.use(index.routes(),index.allowedMethods());

