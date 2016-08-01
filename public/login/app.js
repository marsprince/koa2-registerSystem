import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CSSModules from 'react-css-modules';
import styles from '../css/login.css'
import 'whatwg-fetch';

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            username:"",
            password:""
        }
    }

    login(){
        console.log(this.state)
        fetch("/api/auth/login",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }) .then(function(response) {
            return response.json()
        }).then(function(json) {
           if(json.success) {
               location.href="/home"
           }
           else{
               alert("登录失败")
           }
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
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
        )
    }
}

module.exports=CSSModules(Login,styles)