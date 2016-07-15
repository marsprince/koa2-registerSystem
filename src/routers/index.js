/**
 * Created by liujia on 2016/7/7.
 */
import mount from 'mount-koa-routes'

module.exports=function initRouters(app) {
    mount(app, __dirname + '/api', true);
    mount(app, __dirname + '/router', true);
}