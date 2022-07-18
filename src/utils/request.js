import axios from 'axios'

const request = axios.create({
  baseURL: 'http://47.96.27.188:3000'
})

export default request
