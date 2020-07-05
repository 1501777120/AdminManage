import {request} from "./request";
import {url} from './url'
//登陆
 export const login=(userInfo)=>{
     const {username,password}=userInfo
     return request({
         url:url.loginUrl,
         method:'post',
         data:{
             username,password
         }
     })
 }
//请求导航列表
export const menuList=(menus)=>{
     return request({
         url:url.menusUrl,
         method:'get'
     })
}
//请求用户列表
export const usersList=(val)=>{
     const {pagenum,pagesize}=val

    console.log(val);
    return request({
         url:url.usersUrl,
         method:"get",
        params:{pagenum, pagesize}
     })
}
//添加用户
export const usersAdd=(val)=>{
    const {username,password,email,mobile}=val
    return request({
        url:url.usersUrl,
        method:"post",
        data:{
            username,password,email,mobile
    }
    })
}
//