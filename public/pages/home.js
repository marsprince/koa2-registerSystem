/**
 * Created by jialiu on 16/12/19.
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

class Home extends React.Component{
    constructor(props) {
        super(props)
        this.state={

        }
    }

    render(){
        return (
            <MuiThemeProvider>
                <Paper styleName='loginForm' zDepth={1} >
                   OK
                </Paper>
            </MuiThemeProvider>
        )
    }
}

module.exports=CSSModules(Home,styles)