/**
 * Created by liujia on 2016/7/29.
 */

import app from './server'
import models from '../src/models'

models.sequelize.sync().then(function () {
    app.listen(3000, () => console.log('server started 3000'))
});