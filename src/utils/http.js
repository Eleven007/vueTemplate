/**
 * @author：龚意
 * @version：v0.0.1
 * 创建日期：2018/6/11
 * 历史修订：
 */
import axios from 'axios'
import qs from 'qs'
import {Message} from 'element-ui';
axios.interceptors.request.use(config => {
  // loading
  // 如果是post请求就把默认参数拼到data里面
  // 如果是get请求就拼到params里面
  if (config.method === 'post') {
    let data = qs.parse(config.data)

    config.data = qs.stringify({
      platform: 'pc',
      ...data
    })
  } else if (config.method === 'get') {
    config.params = {
      platform: 'pc',
      ...config.params
    }
  }
  return config
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
});

function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    Message({
      showClose: true,
      message: res.msg,
      type: 'error'
    })
  }
  if (res.data && (res.status!==200)) {
    Message({
      showClose: true,
      message: res.msg,
      type: 'error'
    })
  }
  return res
}

export default {
  post (url, data) {
    return axios({
      method: 'post',
      baseURL: process.env.baseURL,
      url,
      // timeout: 10000,
      data: qs.stringify(data),
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get (url, params) {
    return axios({
      method: 'get',
      baseURL: process.env.baseURL,
      url,
      params, // get 请求时带的参数
      // timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
