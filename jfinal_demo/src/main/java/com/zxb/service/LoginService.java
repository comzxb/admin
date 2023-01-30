package com.zxb.service;

import com.jfinal.kit.Ret;
import com.zxb.model.Member;
import com.zxb.model.Muser;

import java.util.List;

public class LoginService {

    public Ret saveLogin(Muser muser) {
        if(muser ==null){
            return Ret.fail("未填数据");
        }

        System.out.println("0000000000000000"+muser);
        return null;
    }

    private static Muser dao = new Muser().dao();
    public List<Muser> getAdminList() {
        return dao.findAll();
    }
}
