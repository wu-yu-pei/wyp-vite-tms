import axios from 'axios' // npm包导入axios
class WyRequest {
  constructor(config) {
    this.instance = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout,
    })

    // 全局响应拦截
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        if (err) console.log(err)
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        if (err) console.log(err)
      }
    )

    // 局部响应拦截 可传可不传
    this.instance.interceptors.request.use(
      config.requestInterceptors,
      config.requestInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      config.responseInterceptors,
      config.responseInterceptorsCatch
    )
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance({ ...config }).then(
        (res) => {
          res && resolve(res.data)
        },
        (err) => {
          ElMessage.error('网络错误')
          reject(err)
        }
      )
    })
  }

  get(config) {
    return this.request({ ...config, method: 'GET' })
  }

  post(config) {
    return this.request({ ...config, method: 'POST' })
  }

  put(config) {
    return this.request({ ...config, method: 'PUT' })
  }

  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }

  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

const baseURL = import.meta.env.VITE_APP_BASE_URL

const http = new WyRequest({
  baseURL: baseURL,
  timeout: 5000,
  requestInterceptors: (config) => {
    // const token = LocalCache.get('token')
    // if (token) {
    //   console.log('已经携带token')
    //   // 设置tocken
    //   config.headers.Authorization = `Bearer ${token}`
    // }
    return config
  },
  requestInterceptorsCatch: (err) => {
    if (err) console.log(err)
  },
  responseInterceptors: (res) => {
    return res
  },
  responseInterceptorsCatch: (err) => {
    if (err) console.log(err)
  },
})

export default WyRequest

export { http }
