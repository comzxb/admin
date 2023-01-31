const proxy = require('http-proxy-middleware')

module.exports =function(app){
    app.use(
        proxy.createProxyMiddleware('/api1',{    //遇见/api1前缀请求，就触发该代理
            target:'http://localhost:5000',    //请求转发地址
            changeOrigin:true,          //控制服务器收到的请求头中的Host字段的值
            pathRewrite:{'^/api1':''}   //重写请求地址，必须要写，不做的话404
        })
    )
}