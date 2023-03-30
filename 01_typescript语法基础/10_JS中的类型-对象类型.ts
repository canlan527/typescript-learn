// 对象类型 和函数一起使用 
// type 表示别名
type pointType = {
  x: number,
  y: number,
  z?: number // 可选类型
}
function pointCoordinate(point: pointType) {
  console.log(point.x, point.y, point.z)
}

pointCoordinate({x: 111, y: 444})
pointCoordinate({x: 222, y: 333, z: 999})

export  {}