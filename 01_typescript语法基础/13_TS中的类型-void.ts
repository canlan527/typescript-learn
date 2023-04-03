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

type delayfnType = (...args: any[]) => void
function delayFn(fn: delayfnType) {
  setTimeout(() => {
    fn('why', 20)
  }, 1000)
}

delayFn((...args) => {
  console.log(...args)
})

export {}