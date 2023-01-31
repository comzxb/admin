import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav/LeftNav';
import Header from '../../components/header/Header';

import Home from '../home/home'
import Product from '../product/product'
import Category from '../category/category'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const {Footer, Sider, Content } = Layout;

/*
后台管理的路由
*/
export default class Admin extends Component {
  render() {
    const user = memoryUtils.user
    console.log("登录用户：",user.username)
    //内存中没有user值，说明没有登录
    if(!user._id){
      //自动跳转到登录页面
      return <Redirect to='/login'/>
    }
    return (
      <Layout style={{height:'100%'}}>
      <Sider>
        <LeftNav/>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content style={{margin:20,backgroundColor:'#cccccc'}}>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/category' component={Category}/>
            <Route path='/product' component={Product}/>
            <Route path='/role' component={Role}/>
            <Route path='/user' component={User}/>
            <Route path='/charts/bar' component={Bar}/>
            <Route path='/charts/line' component={Line}/>
            <Route path='/charts/pie' component={Pie}/>
            <Redirect to='/home'/>
          </Switch>
        </Content>
        <Footer style={{textAlign:'center'}}>后台管理系统</Footer>
      </Layout>
    </Layout>
    )
  }
}
