import { ResolvedFn, RejectedFn } from '../types/index';

interface Interceptors<T> {
  resolved: ResolvedFn<T>
  rejected?: RejectedFn
}

export default class InterceptorsManager<T> {
  // 私有属性 interceptors 存储拦截器
  private interceptors: Array<Interceptors<T> | null>
  constructor() {
    this.interceptors = []
  }
  use(resolved: ResolvedFn<T>, rejected?: RejectedFn): number {
    this.interceptors.push({
      resolved,
      rejected
    })
    return this.interceptors.length - 1
  }

  // forEach 遍历传进来的拦截器
  // type lyricFnType = (lyric: string) => void;
  // type forEachParamFn<T> = (interceptor: Interceptors<T>) => void
  forEach(fn: (interceptor: Interceptors<T>) => void): void {
    this.interceptors.forEach(interceptor => {
      if(interceptor !== null) {
        fn(interceptor)
      }
    })
  }

  eject(id: number): void {
    if(this.interceptors[id]) {
      this.interceptors[id] = null
    }
  }

}