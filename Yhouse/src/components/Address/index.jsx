import React,{Component} from 'react'
import axios from 'axios';
import './index.less'

export default class Address extends Component {
  constructor(props) {
    super(props)
    this.state={
      flgn:this.props.flgn,
      city:this.props.city,
      arr:this.props.arr
    }
    this.reset=this.reset.bind(this)
    this.active=this.active.bind(this)
  }
  render () {
    return (
      <div className="address-page" style={this.state.flgn}>
         <p className="address-title"><i className="reset" onClick={this.reset}></i>选择城市</p>
         <p className="address-city">当前城市：<span>{this.state.city}</span></p>
         {
           this.state.arr.map((items,index) => {
             return <div key={index} className="address-con">
                        <p>{items.city}</p>
                        <div>
                        {
                          items.arr.map((items2,index2) =>{
                            if(items2 === this.state.city){
                              return <span key={index2} className="address-active" data-text={items2} onClick={this.active}>{items2}</span>
                            } else {
                              return <span key={index2} data-text={items2} onClick={this.active}>{items2}</span>
                            }
                          })
                        }
                        </div>
                    </div>
           })
         }
         
      </div>
    )
  }
 
  active (e) {
    this.setState({city:e.currentTarget.getAttribute('data-text')})
  }

  componentWillReceiveProps (prop) {
    this.setState({flgn:prop.flgn,arr:prop.arr})
  }

  reset () {
    this.props.reset(this.state.city)
  }
}