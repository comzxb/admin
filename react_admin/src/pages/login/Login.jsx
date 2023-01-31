import React, { Component } from 'react'
import { Button, Form, Input,message} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './login.less'
import {reqLogin} from '../../api'
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils'
import { Redirect } from 'react-router-dom';


/*
登录的路由组件
*/

export default class Login extends Component {

  render() {

    //判断用户是否登录，如果已经登录，自动跳转到管理界面
    const user = memoryUtils.user
    if(user && user._id){
      return <Redirect to='/'/>
    }

    //获取表单数据
    const onFinish = (async(values) => {
      //请求登录
      //可以用.then的方法，解决回调函数用await和async
      const {username,password} = values
        const result = await reqLogin(username,password)  //{status:0  data-表示用户和密码正确  1 msg-相反}
        if(result.status ===0){   //用户和密码正确
          //提示登录成功
          message.success('登录成功')

          //保存user
          const user = result.data
          memoryUtils.user = user    //保存到内存中
          storageUtils.saveUser(user)   //保存到本地文件[local]中
          
          //跳转到后台管理界面
          this.props.history.replace('/')

        }else{    //用户和密码不正确
          message.error(result.msg)
        }
    });

    return (
      <div className='login'>
        <header className="login-header">
          <h1>后台管理系统</h1>
        </header>
        <section className='login-content'>
          <h2>用户登录</h2>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {required: true,whitespace:true,message: '用户名不能为空'},
                { max: 12, message: '用户名最多12位' },
                { min: 4, message: '用户名至少4位' }
                // { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是数字字母或下划线' }
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {required: true,message: '密码不能为空'},
                { max: 12, message: '密码最多12位' },
                { min: 4, message: '密码至少4位' }
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="用户密码"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>

      </div>
    )
  }
}

