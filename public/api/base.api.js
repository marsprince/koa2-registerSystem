/**
 * Created by jialiu on 16/12/12.
 */

import config from '../config/index'
import 'whatwg-fetch'
import {post} from '../services/httpSerivces'

const EnvBaseUrl=config.env.api

module.exports={
    login:(options)=>{
        return  fetch(EnvBaseUrl+"/api/auth/login",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(options)
        })
    },
    login_:(body)=>{
        return post(body,{headers: {
            'Content-Type': 'application/json'
        }})
    }

}