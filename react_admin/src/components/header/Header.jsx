import React, { Component } from 'react'

import {formateDate} from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
import './index.less'
/**
 * 头部显示区域
 */
export default class Header extends Component {

  state = {
    currentTime: formateDate(Date.now()),    //当前时间的字符串格式
  }

  getCurrentTime=()=>{
    //每隔一秒获取当前时间
    this.intervalId=setInterval(()=>{
        this.setState({currentTime:formateDate(Date.now())})
    },1000)
}

  componentDidMount() { 
    //获取当前时间
    this.getCurrentTime()
  }

  render() {

    const {currentTime} =this.state
    const username = memoryUtils.user.username

    return (
      <div className='header'>
        <div className='header-top'>
          <span>当前用户：{username}</span>
          <span>退出</span>
        </div>
        <div className='header-bottom'>
          <div className='hrader-bottom-left'>首页</div>
          <div className='hrader-bottom-right'>
            <span>{currentTime}</span>
            <img src='http://api.map.baidu.com/images/weather/day/qing.png' alt='wwww'/>
            <span>晴天</span>
          </div>
        </div>
      </div>
    )
  }
}
