import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import { sum } from "./utils/math"
import React from 'react' // 无法找到模块“react”的声明文件。 pnpm add @types/react -D
import _ from 'lodash' // 假如lodash没有自己的类型声明库，我们可以在types文件夹里定义.d.ts声明文件
import nightImg from './img/night.jpg'
/**
 * 第三方库：带有声明文件
 * axios 自带声明文件，可以从引入的变量里追溯到.d.ts文件
 * 第三方库：不带声明文件，
 * 需要自己安装 @types/库 -D  例如 @types/react -D
 * 第三方库：不带声明文件，@types里没有，
 * @types里没有的话，需要手写声明文件
 */

const s: string = 'hello ts'
console.log(s)

// 使用 utils 函数
const s1 = sum(10, 20)
console.log(s1)

// 创建h2标签 -> lib.dom.d.ts
const h2El = document.createElement('h2')
h2El.textContent = 'Hello Typescript'
document.body.append(h2El)

// 创建promise函数 -> lib.es2015.d.ts
const promise = new Promise((resolve, reject) => {}) 

console.log(s.startsWith('hello'))

// 使用lodash
console.log(_.join(['abc', 'cba']))


// 输出index.html的变量, 需要编写声明文件 -> proj.d.ts
console.log(jxzName)
console.log(jxzAge)
console.log(jxzHeight)

console.log(foo('this is typescript v5'))

const p1 = new Person('jxz', 20)
console.log(p1.name, p1.age)

const k = new Ikun('🐔你太美', 'jump & rap')
console.log(k.slogan, k.hobby)

// 创建并插入图片
const imgEl = document.createElement('img')
imgEl.src = nightImg
document.body.append(imgEl)

// 使用cdn jq
$.ajax({
  url: 'http://codercba.com:8000/home/multidata',
  success: function (res: any) {
    console.log(res)
  }
})