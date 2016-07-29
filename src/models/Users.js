/**
 * Created by liujia on 2016/7/29.
 */

module.exports =(sequelize, DataTypes)=> {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    });

    return User;
};
