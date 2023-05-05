import Axios from "./core/Axios";
import { extend } from './helpers/utils';
import { AxiosInstance } from "./types/index";

function createInstance(): AxiosInstance {
  const ctx = new Axios();
  const instance = Axios.prototype.request.bind(ctx);
  extend(instance, ctx);
  return instance as AxiosInstance;
}
const axios = createInstance();

export default axios;
