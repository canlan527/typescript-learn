import { AxiosRequestConfig } from '../types/index';
import { isPlainObject, deepMerge } from '../helpers/utils';

// 默认的合并策略：优先取val2的值
function defaultStrat(val1: any, val2: any): any {
  return typeof val2 !== 'undefined' ? val2 : val1
}

// 忽略val1，只取val2
function fromVal2Strat(val1: any, val2: any): any {
  if(typeof val2 !== 'undefined') {
    return val2
  }
}

// 根据key找到对应的value 创建Map结构正合适
const strats = Object.create(null)

const stratKeysFromVal2 = ['url', 'data', 'params']
stratKeysFromVal2.forEach(key => {
  strats[key] = fromVal2Strat
})

// 复杂合并策略
function deepMergeStrat(val1: any, val2: any): any {
  if(isPlainObject(val2)) {
    return deepMerge(val1, val2)
  } else if(typeof val2 !== 'undefined') {
    return  val2;
  } else if(isPlainObject(val1)) {
    return deepMerge(val1)
  } else if(typeof val1 !== 'undefined') {
    return val1;
  }
}





const stratKeysDeepMerge = ['headers', 'auth']
stratKeysDeepMerge.forEach(key => {
  strats[key] = deepMergeStrat
})


export default function mergeConfig(config1: AxiosRequestConfig, config2: AxiosRequestConfig):AxiosRequestConfig {
  if(!config2) {
    config2 = {}
  }

  const config = Object.create(null)
  for(let key in config2) {
    mergeField(key)
  }

  for(let key in config1) {
    if(!config2[key]) {
      mergeField(key)
    }
  }

  function mergeField(key: string): void {
    const strat = strats[key] || defaultStrat //  拿到策略函数
    config[key] = strat(config1[key], config2[key]) // 调用合并策略拿到返回结果
  }
  return config
}


