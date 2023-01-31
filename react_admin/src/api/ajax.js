//发送异步ajax请求
/*
    封装了axios库
    函数的返回值是一个promise对象
    统一处理请求异常
*/

import axios from 'axios'
import {message} from 'antd'

export default function ajax(url,data={},type='GET'){

    return new Promise((resolve,reject)=>{
        let promise 
        // 执行异步ajax请求
        if(type==='GET'){      //发送GET请求
            promise = axios.get(url,{     //配置对象
                params:data        //指定请求参数
            })
        }else{    //发送POST请求
            promise = axios.post(url,data)
        }
        promise.then(response =>{
            //成功，调用resolve
            resolve(response.data)
        }).catch(error=>{
            //失败，不调用reject，提示异常信息
            message.error('请求出错了：'+ error.message)
        })
            

        
        
        

    })

    
}

