import React,{Component} from 'react';
import './index.less'

export default class loading extends Component {
  constructor (props) {
    super(props)
    this.state={
      display:this.props.style
    }
  }

  render () {
    return (
      <div className="loading-box" style={this.state.display}>
        <img src="http://img.zcool.cn/community/01eac65996ac4500000021296723d9.gif" alt=""/>
      </div>
     )
  } 

  componentWillReceiveProps (next) {
    this.setState({display:next.style})
  }
}