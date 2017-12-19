import Mock from 'axios-mock-adapter'
import axios from 'axios'
import list from './api/imgList.js'
import prolist from './api/proList.js'
import funimg from './api/funimg.js'
import nightimg from './api/nightimg.js'
import coslist from './api/coslist.js'
import address from './api/address.js'

let mock = new Mock(axios, { delayResponse: 1000 })

mock.onGet('/api/imgList').reply(config => {
  return [200,list]
})

mock.onGet('/api/prolist').reply(config => {
  return [200,prolist]
})

mock.onGet('/api/funimg').reply(config => {
  return [200,funimg]
})

mock.onGet('/api/nightimg').reply(config => {
  return [200,nightimg]
})

mock.onGet('/api/coslist').reply(config => {
  return [200,coslist]
})

mock.onGet('/api/address').reply(config => {
  return [200,address]
})