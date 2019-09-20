import { isPlainOnject } from "./util";

function normalizeHeaderName(headers:any, normalizedName:string):void{
  if(!headers){
    return
  }
  Object.keys(headers).forEach(name => {
    if(name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()){
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

export function proccessHeaders(headers:any, data:any):any{
  normalizeHeaderName(headers, 'Content-Type')
  if(isPlainOnject(data)){
    if(headers && !headers['Content-Type']){
      headers['Content-Type'] = 'application/json;charset=utf-8'
    }
  }

  return headers
}