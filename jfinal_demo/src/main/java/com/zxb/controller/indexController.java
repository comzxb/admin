package com.zxb.controller;

import com.jfinal.core.Controller;
import com.jfinal.core.Path;


public class indexController extends Controller {
    //默认访问index
    public void index(){
        set("userName","zxb");
        renderJson();
    }
}
