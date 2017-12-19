import React,{Component} from 'react'
import HeaderBar from '@/components/HeaderBar'
import Swiper from '@/components/Swiper'
import ProList from '@/components/proList'
import axios from 'axios';
import Loading from '@/components/loding'

export default class Cosmetology extends Component {
  constructor(props) {
    super(props)
    this.state={
      defaultPlace:'北京',
      list: [
        {
          text:'美食',
          path: '/defood'
        },
        {
          text:'玩乐',
          path: '/fun'
        },
        {
          text:'夜生活',
          path: '/nightlife'
        },
        {
          text:'美容/SPA',
          path: '/cosmetology'
        }
      ],
      imglist: [],
      pic:[],
      display:{'display':'none'}
    }
  }

  render () {
    return (
      <div className="defood-page">
        <HeaderBar place={this.state.defaultPlace} list={this.state.list}></HeaderBar>
        <Swiper imglist={this.state.imglist}></Swiper>
        <ProList pic={this.state.pic}></ProList>
        <Loading style={this.state.display}></Loading>
      </div>
    )
  }

  componentDidMount () {
    this.setState({display:{'display':'block'}})
    axios.get('/api/coslist').then(res => {
      this.setState({imglist:res.data.imglist})
      this.setState({display:{'display':'none'}})
    })
    this.setState({display:{'display':'block'}})
    axios.get('/api/prolist').then(res => {
      this.setState({pic:res.data})
      this.setState({display:{'display':'none'}})
    })
  }
}