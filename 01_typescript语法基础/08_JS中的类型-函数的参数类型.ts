// 函数是JavaScript非常重要的组成部分，TypeScript允许我们指定函数的参数和返回值的类型。

// 参数的类型注解
function sum(num1: number, num2: number):number {
  return num1 + num2;
}

sum(1,3)

// 歌词解析工具
type lyricType = {
  time: number,
  text: string,
}

function parseLyric(lyric: string) :lyricType[] {
  const lyrics:lyricType[] = []
  lyrics.push({time: 11111, text: lyric})
  return lyrics
}

const lyricInfos = parseLyric('你是我的歌')

for(const item of lyricInfos) {
  console.log(item.time, item.text)
}

export {}


export {}