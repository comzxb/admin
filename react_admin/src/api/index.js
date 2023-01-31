/**
 *包含应用中所有接口请求函数的模块
 */
import ajax from './ajax'

//当前项目的端口地址
const BASE = ''

//登录
 export const reqLogin = (username,password)=> ajax(BASE + '/api1/login',{username,password},'POST')

 //添加用户
//  export const reqAddUser =() => ajax('/api1/manage/user/add',user,'POST')