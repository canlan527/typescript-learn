import { isPlainObject } from './utils';
// 转换body里的参数
export function transformRequest(data: any) :any{
  // 将对象转成字符串
  if(isPlainObject(data)){
    return JSON.stringify(data)
  }
  return data;
}

export function transformResponse() {

}