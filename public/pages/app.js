/**
 * Created by jialiu on 16/12/19.
 */

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../css/login.scss'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Home extends React.Component{
    constructor(props,context) {
        super(props)
        this.context=context
        this.state={

        }
    }
    componentWillMount(){
        let router=this.context.router
        router.push('/login')
    }

    render(){
        return (
            <MuiThemeProvider>
                {this.props.children}
            </MuiThemeProvider>
        )
    }
}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports=CSSModules(Home,styles)