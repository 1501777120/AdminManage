import axios from 'axios'
 export const request =(config)=>{
    const instance = axios.create({
        baseURL:"http://127.0.0.1:8888/api/private/v1/",
        timeout:10000
    })
     instance.interceptors.request.use(config=>{
         config.headers.Authorization = window.sessionStorage.getItem('token')
         return config
     })
     // 在 response 拦截器中，隐藏进度条 NProgress.done()
     instance.interceptors.response.use(data=>{

         return data.data
     })
     return instance(config)
 }