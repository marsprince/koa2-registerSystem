/**
 * Created by liujia on 2016/7/29.
 */
const defineOptions= require("../../config/model.json")["defineOptions"]

module.exports =(sequelize, DataTypes)=> {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        password: DataTypes.STRING
    },defineOptions);

    return User;
};
