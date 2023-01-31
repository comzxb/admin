/**
 * 进行local数据存储管理的工具模块
 */

import store from "store"
const USER_KEY = 'user_key'
const user = {
    //保存
    saveUser(user) {
        // localStorage.setItem("user_key", JSON.stringify(user))
        // 原生封装有时候不是很兼容，在这里我们可以使用store这样一个库
        return store.set(USER_KEY,user)
    },
    //读取
    getUser() {
        // 没有值的话就是返回的null，最后给我返回一个空对象，然后我点什么属性的时候不会报错
        // return JSON.parse(localStorage.getItem("user_key") || "{}")
        return store.get(USER_KEY)||{}
    },
    //删除
    removeUser() {
        // localStorage.removeItem("user_key")
        return store.remove(USER_KEY)
    }
}
export default user