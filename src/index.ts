import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { proccessHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig){
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig){
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig){
  const { url, params } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig){
  return transformRequest(config.data)
}
function transformHeaders(config:AxiosRequestConfig){
  const { headers = {}, data} = config
  console.log(headers)
  return proccessHeaders(headers, data)
}

export default axios
