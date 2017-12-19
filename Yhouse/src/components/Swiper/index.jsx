import React,{Component} from 'react'
import './index.less'
import ReactSwipe from 'react-swipe'

export default class swiper extends Component {
  constructor(props) {
    super(props)
    this.state={
      imglist: this.props.imglist
    }
  }

  render () {
    return (
      <ReactSwipe key={this.state.imglist.length} className="carousel" swipeOptions={{continuous:true,auto:2000}}>
        {
          this.state.imglist.map((items,index)=>{
            return <div key={index}><img src={items.img}/></div>
          })
        }
      </ReactSwipe>
    )
  }

  componentWillReceiveProps(next){
    this.setState({imglist:next.imglist})
  }

}