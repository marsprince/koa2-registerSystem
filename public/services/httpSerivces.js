/**
 * Created by jialiu on 16/12/20.
 */
import 'whatwg-fetch';

let http={}
http.post=(body,options)=>{
    return fetch(EnvBaseUrl+"/api/auth/login",{
        method:"POST",
        body:body,
        options
    })
}

module.exports=http