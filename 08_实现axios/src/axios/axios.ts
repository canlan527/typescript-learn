import Axios from "./core/Axios";
import { extend } from './helpers/utils';
import { AxiosInstance, AxiosRequestConfig } from './types/index';
import defaults from './defaults';

function createInstance(config: AxiosRequestConfig): AxiosInstance {
  const ctx = new Axios(config);
  const instance = Axios.prototype.request.bind(ctx);
  extend(instance, ctx);
  return instance as AxiosInstance;
}
const axios = createInstance(defaults);

export default axios;
