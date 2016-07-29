/**
 * Created by liujia on 2016/7/15.
 */

import Router from 'koa-router'
import authController from '../../controller/authController'

const router=Router()

router.post('/auth/login',authController.login);

module.exports = router;