import React, {Component} from 'react'
import './index.less'
import {NavLink} from 'react-router-dom'
import Address from '../Address'
import Screen from '../screen'
import axios from 'axios';

export default class HeaderBar extends Component {
  constructor(props) {
    super(props)
    this.state={
      list: this.props.list,
      place: this.props.place,
      flgn:{'display':'none'},
      arr:[],
      style:{'display':'none'}
    }
    this.address=this.address.bind(this)
    this.screen=this.screen.bind(this)
  }

  render () {
    return (
      <header className="header">
          <div className="h-top">
             <p onClick={this.address}>{this.state.place}<i className="iconfont icon-xia"></i></p>
             <p className="h-center"><i className="iconfont icon-sousuo "></i><input type="text" placeholder="请输入商家、商圈、菜系、活动…"/></p>
             <p onClick={this.screen}>筛选<i className="iconfont icon-you"></i></p>
          </div>
          <div className="h-bottom">
             {
               this.state.list.map((items,index) => {
                 return <NavLink to={items.path} key={index}>{items.text}</NavLink>
               })
             }
          </div>
          <Address flgn={this.state.flgn} reset={this.reset.bind(this)} city={this.state.place} arr={this.state.arr}></Address>
          <Screen style={this.state.style} back={this.back.bind(this)}></Screen>
      </header>
    )
  }

  componentWillMount () {   
    axios.get('/api/address').then(res => {
      this.setState({arr:res.data})    
    }) 
  }

  address () {
    if (this.state.flgn.display === 'none') {
      this.setState({flgn:{'display':'block'}})
    }
  }

  reset (city) {
    this.setState({flgn:{'display':'none'},place:city})
  }

  screen () {
    if (this.state.style.display === 'none') {
      this.setState({style:{'display':'block'}})
    }
  }

  back () {
    this.setState({style:{'display':'none'}})
  }

}