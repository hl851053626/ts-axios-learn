import { isPlainOnject } from "./util";

export function transformRequest(data:any):any{
  if(isPlainOnject(data)){
    return JSON.stringify(data)
  }
  return data
}