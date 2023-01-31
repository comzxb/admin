import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd'; 

import menuList from '../../config/menuConfig'

import logo from '../../assets/images/logo.png'
import './index.less'

const SubMenu = Menu.SubMenu;
/*
  左侧导航栏
 */
export default class LeftNav extends Component {

  /*
    根据menu的数据生成对应的标签数组
   */
  getMenuNodes =(menuList)=>{
    //得到当前请求的路由路径
    const path = window.location.pathname

    return menuList.map(item =>{
      if(!item.children){
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      }else{

        //查找一个与当前请求路径匹配的子Item
        const cItem = item.children.find(cItem => cItem.key===path)
        //存在，说明当前item所对应的子列表是需要打开的
        if(cItem){
          this.openKey = item.key
        }
        return(
          <SubMenu
            key={item.key}
            title={
              <span>
                <item.icon />
                <span>{item.title}</span>
              </span>
            }
          >
            {
              this.getMenuNodes(item.children)
            }
          </SubMenu>  
        )
      }
      
    })
  }
  //在第一次reder之前执行一次
  componentWillMount(){
    this.menuNodes = this.getMenuNodes(menuList)
  }

  render() {
    //得到当前请求的路由路径
    const path = window.location.pathname
    //得到需要打开的菜单项key
    const openKey = this.openKey

    return (
        <div className='left-nav'>
          <Link to='/' className='left-nav-header'>
            <img src={logo} alt="logo"/>
            <h1>后台管理</h1>
          </Link>
          <Menu
            // 默认选中谁
            selectedKeys={[path]}
            //指定展开谁
            defaultOpenKeys={[openKey]}
            mode="inline"
            theme="dark"
          >
          {
            this.menuNodes
          }
        </Menu>
        </div>
    )
  }
}

/**
 * 高阶组件，包装非路由组件，返回一个新的组件，向非路由组件，传递history/location/match属性
 */
