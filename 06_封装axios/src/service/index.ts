import { BASE_URL, TIMEOUT } from "./config";
import XNRequest from "./request";

// 统一出口
const xnRequest = new XNRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})


export default xnRequest