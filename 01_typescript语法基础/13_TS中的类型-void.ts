// void通常用来指定一个函数是没有返回值的，那么它的返回值就是void类型

// 如果返回值是void，那么也可以返回 undefined

function sum(num: number, num2:number):void {
  console.log(num+num2)
}

// 不写返回：void，默认也返回：void
function sum2(num: number, num2:number) {
  console.log(num+num2)
}

type lyricFnType = (lyric: string) => void;
type lyricsType = {time: number, text: string};

const parseLyrics: lyricFnType = (lyric:string) => {
  const lyrics: lyricsType[] = []
  lyrics.push({time: 1111, text: lyric})
  return lyrics;
} 
console.log(parseLyrics('你是我的歌'))

// type delayfnType = () => void
// function delayFn() {
//   setTimeout(() => {

//   }, 1000)
// }

// 我们可以将undefined赋值给void类型，也就是函数可以返回undefined

type delayfnType = (...args: any[]) => void
function delayFn(fn: delayfnType) {
  setTimeout(() => {
    fn('why', 20)
  }, 1000)
}

delayFn((...args) => {
  console.log(...args)
})

function foo() :void {
  // return 123 // 会报错
}

const list = [123,444,5555]
list.forEach((item, index, arr) => {
  return 123 // 不会报错
})
// 原因：当基于上下文的类型推导(Contextual Typing)推导出返回类型为 void 的时候，并不会强制函数一定不能返回内容

export {}
