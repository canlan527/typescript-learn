import axios from "../axios";

const instance = axios.create({
  baseURL: 'https://img.mukewang.com/szimg/'
})
instance.get('644632bd09ed0ffe05400304.png')

instance.get('https://img.mukewang.com/szimg/644793420940abe305400304.png')
