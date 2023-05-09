import Axios from "./core/Axios";
import { extend } from './helpers/utils';
import { AxiosInstance, AxiosRequestConfig, AxiosStatic } from './types/index';
import defaults from './defaults';
import mergeConfig from './core/mergeConfig';

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
export default axios;
