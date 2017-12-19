import React,{Component} from 'react';
import './index.less'

export default class proList extends Component {
  constructor (props) {
    super(props)
    this.state={
      pic:this.props.pic
    }
  }

  render () {
    return (
      <div className="prolist">
        {
          this.state.pic.map((items,index) => {
            return <div className="type_list ng-scope" key={index}>
              <div className="host_logo">
                  <img src={items.face}/>
                  <h3>{items.title}</h3>
              </div>
              <img src={items.img}/>
              <p className="con">{items.con}</p>
              <p className="address">
                {
                  items.address.map((items2,index2) => {
                    return <span key={index2}>{items2}</span>
                  })
                }
              </p>
              
              <div className="label">
                <p>
                  {
                      items.label.map((items3,index3) => {
                        return <span key={index3}>{items3}</span>
                      })
                  }
                </p>
                <p>
                  {items.in}
                </p>

              </div>
              
            </div>
          })
        }
      </div>
    )
  }
  
  componentWillReceiveProps (next) {
    this.setState({pic:next.pic})
  }
}