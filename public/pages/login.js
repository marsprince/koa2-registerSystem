/**
 * Created by jialiu on 16/12/13.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CSSModules from 'react-css-modules';
import styles from '../css/login.scss'
import 'whatwg-fetch';
import baseApi from '../api/base.api'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            username:"",
            password:""
        }
    }

    login(){
        baseApi.login(this.state).then(function(response) {
            return response.json()
        }).then(function(json) {
            if(json.success) {
                //location.href="/home"
            }
            else{
                alert("")
            }
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    }

    render(){
        return (
            <MuiThemeProvider>
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
                                onChange={(event)=>this.setState({
                                    username:event.target.value
                                })}
                            />
                            <TextField
                                hintText="密码"
                                floatingLabelText="请输入密码"
                                fullWidth={true}
                                onChange={(event)=>this.setState({
                                    password:event.target.value
                                })}
                            />
                        </div>
                        <div  styleName='loginButton'>
                            <RaisedButton primary={true} fullWidth={true} label="登录" onClick={()=>this.login()} />
                        </div>
                    </div>
                </Paper>
            </MuiThemeProvider>

        )
    }
}

module.exports=CSSModules(Login,styles)