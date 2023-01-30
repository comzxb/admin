package com.zxb.config;

import com.jfinal.config.*;
import com.jfinal.plugin.activerecord.ActiveRecordPlugin;
import com.jfinal.plugin.druid.DruidPlugin;
import com.jfinal.template.Engine;
import com.zxb.controller.MemberController;
import com.zxb.controller.LoginController;
import com.zxb.controller.indexController;
import com.zxb.model.Member;
import com.zxb.model.Muser;

public class AppConfig extends JFinalConfig {
    //配置常量
    @Override
    public void configConstant(Constants constants) {
        //设置开发模式，不要缓存
        constants.setDevMode(true);
        //是否启用Inject,依赖注入
        constants.setInjectDependency(true);
        constants.setInjectSuperClass(true);
    }
    //配置路由
    @Override
    public void configRoute(Routes routes) {
//        routes.add(new Routes() {
//            @Override
//            public void config() {
//                this.setBaseViewPath("_view");  //所有文件去找_view这个文件下
//                this.addInterceptor(new SessionInViewInterceptor());//拦截器处理
//                this.scan("com.zxb.controller");
//            }
//        });
        routes.add("/",indexController.class,"/");
        routes.add("/login",LoginController.class,"/login");
        //第一个是html在webapp的在那个文件下，最后一个是html名字
        routes.add("/member", MemberController.class,"/member");


    }

    //配置模板引擎
    @Override
    public void configEngine(Engine engine) {
        engine.setDevMode(true);
    }

    //配置插件
    @Override
    public void configPlugin(Plugins me) {
        String jdbcUrl="jdbc:mysql://localhost:3306/user_db?characterEncoding=UTF-8";
        //数据库连接池
        DruidPlugin druidPlugin = new DruidPlugin(jdbcUrl,"root","root");
        //数据库orm操作
        ActiveRecordPlugin arp = new ActiveRecordPlugin(druidPlugin);
        //设置开发模式
        arp.setDevMode(true);
        //输出sql语句
        arp.setShowSql(true);
        //数据表与类的绑定
        arp.addMapping("member",Member.class);
        arp.addMapping("muser",Muser.class);
        //加到管理
        me.add(druidPlugin);
        me.add(arp);
    }

    //配置拦截器
    @Override
    public void configInterceptor(Interceptors interceptors) {

    }

    //配置处理器
    @Override
    public void configHandler(Handlers handlers) {

    }

    //启动后处理
    @Override
    public void onStart() {
        //添加数据
        /*
        Member member = new Member();
        member.set("name","钟小波");
        member.set("type","第一组");
        member.set("age",22);
        member.set("enter_ten",new Date());
        member.set("updae_time",new Date());
        //保存到数据库
        boolean success = member.save();
        System.out.println("是否保存成功"+success);
         */
        //更新数据
        /*
        Member member = new Member();
        member.set("id",1);
        member.set("type","第最后一组");
        boolean success = member.update();
        System.out.println("是否更新成功"+success);
         */
        //查询
        /*
        Member member = new Member();
        Member getById = member.dao().findById(4);
        System.out.println("查询的id数据"+getById.toJson());
        */
        //删除

//        Member member = new Member();
//        //dao()将model对象转换为线程安全的dao对象，只用于查询
//        Member getById = member.dao().findById(5);
//        System.out.println("查询的id数据"+getById.toJson());
//        System.out.println("分段取值："+getById.get("name"));
//        //把查询出来的直接删除就行
//        boolean success = getById.delete();
//        System.out.println("删除结果为："+success);



    }

    //服务停止后处理
    @Override
    public void onStop() {

    }
}
