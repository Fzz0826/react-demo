import React,{Component} from 'react';
import './index.less'

export default class Content extends Component {
  constructor (props) {
    super(props)
    this.state={
      piclist:this.props.piclist
    }
  }

  render () {
    return (
      <div className="content">
         {
           this.state.piclist.map((items,index)=>{
             return <p key={index}><img src={items.img}/></p>
           })
         }
      </div>
    )
  }

  componentWillReceiveProps (next) {
    this.setState({piclist:next.piclist})
  }
}