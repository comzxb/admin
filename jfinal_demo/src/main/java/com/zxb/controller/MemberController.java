package com.zxb.controller;

import com.jfinal.aop.Inject;
import com.jfinal.core.Controller;
import com.jfinal.kit.Ret;
import com.zxb.model.Member;
import com.zxb.service.MemberService;

import java.util.ArrayList;
import java.util.List;

public class MemberController extends Controller {

    //注入
    @Inject
    MemberService service;
    //查询显示数据
   public void index(){
        List<Member> members = service.getAdminList();
       for (int i=0;i<members.size();i++){
           Object time = members.get(i).get("updae_time");
       }
        set("members",members);
        renderJson();
    }

    //删除
    public void del(){
        //将路径中的参数传入delete方法里面
        Ret success = service.deleteMemberById(getInt(0));
        renderJson(success);
    }


    //添加进入add页面
    public void add(){

       render("add.html");
    }

    //保存提交按钮
    public void save(){
        renderJson(service.saveMember(getModel(Member.class,"member"))
        );
    }

    //修改进入edit页面
    public void edit(){
        //跳转界面
       Member member = service.findById(getInt(0));
        if (member==null){
            render("error.html");
            return;
        }
        set("member",member);
        //render("edit.html");
        renderJson();
    }

    //保存提交按钮
    public void update(){
       renderJson(service.updateMember(getModel(Member.class,"member")));
    }


}
