import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import axios from '../axios'
import { Method } from '../axios/types/index';

const instance = axios.create()

function calculatePercentage(loaded: number, total: number) {
  return Math.floor(loaded * 1.0) / total
}

function loadProgressBar() {
  const setupStartProgress = () => {
    instance.interceptors.request.use((config) => {
      NProgress.start()
      return config
    })
  }
  const setupUpdateProgress = () => {
    const update = (e: ProgressEvent) => {
      console.log(e)
      NProgress.set(calculatePercentage(e.loaded, e.total))
    }

    instance.defaults.onDownloadProgress = update
    instance.defaults.onUploadProgress = update
  }
  const setupStopProgress = () => {
    instance.interceptors.response.use((res) => {
      NProgress.done()
      return res;
    }, (err) => {
      NProgress.done()
      return Promise.reject(err)
    })
  }

  setupStartProgress()
  setupUpdateProgress()
  setupStopProgress()
}

loadProgressBar()

const downloadEl = document.getElementById('download')

downloadEl?.addEventListener('click', (e) => {
  instance.get('https://img4.sycdn.imooc.com/szimg/5cbf00c608f52a3b06000338-360-202.jpg')
})

const uploadEl = document.getElementById("upload")

uploadEl?.addEventListener('click', (e) => {
  const data = new FormData()
  const fileEl = document.getElementById('file') as HTMLInputElement
  if(fileEl.files) {

    console.log(fileEl.files)
    data.append('file', fileEl.files[0])
    instance.post('/api/upload', data)
  }
})