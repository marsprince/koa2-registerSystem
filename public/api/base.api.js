/**
 * Created by jialiu on 16/12/12.
 */

import config from '../config/index'
import 'whatwg-fetch'

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
    }
}