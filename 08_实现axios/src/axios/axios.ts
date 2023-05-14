import Axios from "./core/Axios";
import { extend } from './helpers/utils';
import { AxiosInstance, AxiosRequestConfig, AxiosStatic } from './types/index';
import defaults from './defaults';
import mergeConfig from './core/mergeConfig';
import CancelToken from "./cancel/CancelToken";
import Cancel, { isCancel } from './cancel/Cancel';

function createInstance(config: AxiosRequestConfig): AxiosStatic {
  const ctx = new Axios(config);
  const instance = Axios.prototype.request.bind(ctx);
  extend(instance, ctx);
  return instance as AxiosStatic;
}
const axios = createInstance(defaults);
axios.create = function create(config) {
  return createInstance(mergeConfig(defaults, config as AxiosRequestConfig))
}

// 扩展cancel属性和方法
axios.CancelToken = CancelToken
axios.Cancel = Cancel
axios.isCancel = isCancel

// 扩展静态方法
axios.all = function all(promises) {
  return Promise.all(promises)
}

axios.spread = function spread(callback) {
  return (arr) => {
    return callback.apply(null, arr)
  }
}

axios.Axios = Axios



export default axios;
