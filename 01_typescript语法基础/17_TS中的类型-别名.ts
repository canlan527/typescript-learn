// type  别名

type idType = string | number;

function printID(id: idType) {
  console.log(id)
}

printID(121891298)
printID('aslkdn-2341')

type pointType = {
  x: number,
  y: number,
  z?: number
}
function getCordinate(point: pointType){
  console.log(point.x, point.y, point.z ? point.z : '')
}

getCordinate({x:100, y: 100, z: 100})
getCordinate({x:200, y: 200})

export {}