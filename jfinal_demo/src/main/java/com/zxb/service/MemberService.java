package com.zxb.service;

import com.jfinal.kit.Ret;
import com.zxb.model.Member;

import java.util.Date;
import java.util.List;

public class MemberService {

    private static Member dao = new Member().dao();
    public List<Member> getAdminList(){
        //通过dao查询数据，然后返回回去
        return dao.findAll();
    }

    //删除service实现
    public Ret  deleteMemberById(Integer id) {
        Member mb = dao.findById(id);
        if (mb == null){
            return Ret.fail("id为空，删除失败");
        }
        //直接删除
        boolean success = mb.delete();
        return success?Ret.ok("删除成功"):Ret.fail("删除失败");
    }

    //保存提交
    public Ret saveMember(Member member) {

        if(member ==null){
            return Ret.fail("未填数据");
        }
        //保存
        member.set("enter_ten",new Date());
        member.set("updae_time",new Date());
        boolean success = member.save();
        return success?Ret.ok("添加成功"):Ret.fail("添加失败");
    }
    //修改
    public Ret updateMember(Member member) {

        if(member ==null || member.get("id")==null){
            return Ret.fail("未填数据");
        }

        Member memberdb = findById(member.getInt("id"));
        if (memberdb==null){
            return Ret.fail("数据不存在");
        }
            //保存
            member.set("updae_time", new Date());
            boolean success = member.update();
            return success ? Ret.ok("更新成功") : Ret.fail("更新失败");
    }



    //更加id查询
    public Member findById(Integer id) {

        return dao.findById(id);
    }
}
