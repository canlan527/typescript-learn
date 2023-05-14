import { isDate, isObject, isPlainObject, isURLSearchParams } from './utils';
// 存放url相关的辅助函数

interface URLOrigin {
  protocol: string;
  host: string;
}

function encode(val: string): string {
  return encodeURIComponent(val)
    .replace(/%40/g, "@")
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+") //空格，约定用+表示
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]");
}
type parmasSerializerType = (params: any) => string;

export function buildURL(
  url: string,
  params?: any,
  parmasSerializer?: parmasSerializerType
): string {
  // 如果不传oarams就原样返回url
  if (!params) return url;

  let serializedParams;
  // 优先判断是否有传入 parmasSerializer
  if (parmasSerializer) {
    serializedParams = parmasSerializer(params);
    // 判断参数类型是不是URLSearchParams
  } else if(isURLSearchParams(params)) {
    serializedParams = params.toString()
  } else {
    const parts: string[] = [];
    // 将参数合成数组
    Object.keys(params).forEach((key) => {
      const val = params[key];
      if (val === null || typeof val === "undefined") {
        return;
      }
      let values = [];
      if (Array.isArray(val)) {
        values = val;
        key += "[]";
      } else {
        values = [val];
      }
      values.forEach((val) => {
        if (isDate(val)) {
          val = val.toISOString();
        } else if (isPlainObject(val)) {
          val = JSON.stringify(val);
        }
        parts.push(`${encode(key)}=${encode(val)}`);
      });
    });
    // 序列化参数,用&连接
    serializedParams = parts.join("&");
  }

  if (serializedParams) {
    const markIndex = url.indexOf("#");
    if (markIndex !== -1) {
      url = url.slice(0, markIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}

// 判断url是否是完整协议的路径 http:// | https:// | //
export function isAbsoluteURL(url: string): boolean {
  const reg = /(^[a-z][a-z\d\+\-\.]*:)?\/\//i
  return reg.test(url)
}
// 把baseURL末尾的一个或者多个斜线replace成空,  把 relativeURL开头的一个或者多个斜线replace成空
export function conbineURL(baseURL: string, relativeURL?: string): string {
  return relativeURL ? baseURL.replace(/\/+$/, '') + "/" + relativeURL.replace(/^\/+/, ''): baseURL
}


// 判断是否是同源url
export function isURLSameOrigin(requestURL: string): boolean {
  const parseOrigin = resolveURL(requestURL);
  return (
    parseOrigin.protocol === currentOrigin.protocol &&
    parseOrigin.host === currentOrigin.host
  );
}

const urlParsingNode = document.createElement("a");
const currentOrigin = resolveURL(window.location.href);
function resolveURL(url: string): URLOrigin {
  urlParsingNode.setAttribute("href", url);
  const { protocol, host } = urlParsingNode;

  return { protocol, host };
}
