import React,{Component} from 'react'
import axios from 'axios';
import './index.less'
import One from './components/one'
import Two from './components/two'

export default class Address extends Component {
  constructor(props) {
    super(props)
    this.state={
      style:this.props.style,
      arr:['商户','商品'],
      ind: 0
    },
    this.back=this.back.bind(this)
    this.tab=this.tab.bind(this)
  }
  render () {
    return (
      <div className="screen-page" style={this.state.style}>
         <div className="screen-top">
           {
              this.state.arr.map((items,index) => {
                if (this.state.ind === index) {
                  return <p key={index}><span onClick={this.tab} data-index={index} className="screen-active">{items}</span></p>
                }
                return <p key={index}><span onClick={this.tab} data-index={index}>{items}</span></p>
              }) 
           }        
            <span className="screen-left" onClick={this.back}></span>
            <span className="screen-right"></span>
         </div>
         {
           this.state.ind === 0 ? <One></One> : <Two></Two>
         }
         
      </div>
    )
  }

  
  componentWillReceiveProps (prop) {
    this.setState({style:prop.style})
  }

  tab (e) {
    let ind = e.currentTarget.getAttribute('data-index')*1;
    this.setState({ind:ind})
  }

  back () {
    this.props.back()
  }

}