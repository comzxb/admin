package com.zxb.controller;

import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;
import com.jfinal.core.paragetter.ParaProcessor;
import com.jfinal.json.Json;
import com.zxb.model.Member;
import com.zxb.model.Muser;
import com.zxb.service.LoginService;
import com.zxb.service.MemberService;

import java.util.List;


public class LoginController extends Controller {

    //注入
    @Inject
    LoginService service;

    //默认访问index
    public void index(){
        set("userName","zxb");
        renderJson();
        //登录处理
        //render("login.html");
    }

    //登录
    public void dl(){

        List<Muser> musers = service.getAdminList();
        System.out.println(musers);
        for (int i=0;i<musers.size();i++){
            Object a = musers.get(i).get("user_name");
            Object b = musers.get(i).get("password");
            if (a.equals(getPara("muser.name")) && b.equals(getPara("muser.password"))){
                set("m","true");
                set("aaa", getPara("muser.name"));
                set("bbb", getPara("muser.password"));
                renderJson();
                System.out.println("登录成功");
                return;
            }else {
                set("m","false");
                set("aaa", getPara("muser.name"));
                set("bbb", getPara("muser.password"));
                renderJson();
                return;
            }


        }


    }

    }
