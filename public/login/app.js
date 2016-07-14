import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CSSModules from 'react-css-modules';
import styles from '../css/login.css'

class Login extends React.Component{
    constructor(props) {
        super(props)
    }
    
    render(){
        return (
                <Paper styleName='loginForm' zDepth={1} >
                    <div styleName='loginContent'>
                        <div styleName='loginTitle'>
                            后台管理系统
                        </div>
                        <div styleName='loginInput'>
                            <TextField
                                hintText="用户名"
                                floatingLabelText="请输入用户名"
                                fullWidth={true}
                            />
                            <TextField
                                hintText="密码"
                                floatingLabelText="请输入密码"
                                fullWidth={true}
                            />
                        </div>
                        <div  styleName='loginButton'>
                            <RaisedButton primary={true} fullWidth={true} label="登录"  />
                        </div>
                    </div>
                    </Paper>
        )
    }
}

module.exports=CSSModules(Login,styles)