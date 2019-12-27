import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { proccessHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig):void{
  processConfig(config) // 处理
  xhr(config)
}
/**
 * 对请求进行处理
 * @param {AxiosRequestConfig} config
 */
function processConfig(config: AxiosRequestConfig):void{
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

/**
 * 转化url
 * @param {AxiosRequestConfig} config
 * @returns url
 */
function transformURL(config: AxiosRequestConfig):string{
  const { url, params } = config
  return buildURL(url, params)
}

/**
 * 对data进行转化
 * @param {AxiosRequestConfig} config
 * @returns data
 */
function transformRequestData(config: AxiosRequestConfig){
  return transformRequest(config.data)
}
function transformHeaders(config:AxiosRequestConfig){
  const { headers = {}, data} = config
  console.log(headers)
  return proccessHeaders(headers, data)
}

export default axios
