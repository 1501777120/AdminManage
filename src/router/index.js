import Vue from 'vue'
import VueRouter from 'vue-router'
const Login =()=>import( 'views/login/Login')
const Home =()=>import( 'views/home/Home')
const Users =()=>import( 'components/users/users')
const Welcome =()=>import( 'components/welcome/Welcome')
const Roles =()=>import( 'components/rbac/Roles')
const Rights =()=>import( 'components/rbac/Rights')
const Goods =()=>import( 'components/goods/Goods')
const Params =()=>import( 'components/goods/Params')
const Categories =()=>import( 'components/goods/Categories')
const Orders =()=>import( 'components/order/Orders')
const Reports =()=>import( 'components/reports/Reports')

Vue.use(VueRouter)

  const routes = [
      {
          path:'/home',
          component:Home,
          name:"Home",
          redirect:'/welcome',
          children:[
              {  path:'/users', component:Users, name:"Users"},
              {  path:'/welcome', component:Welcome, name:"Welcome"},
              {  path:'/rights', component:Rights, name:"Rights"},
              {  path:'/roles', component:Roles, name:"Roles"},
              {  path:'/goods', component:Goods, name:"Goods"},
              {  path:'/params', component:Params, name:"Params"},
              {  path:'/categories', component:Categories, name:"Categories"},
              {  path:'/orders', component:Orders, name:"Orders"},
              {  path:'/reports', component:Reports, name:"Reports"},
          ]
      },
      {
        path:'/login',
        component:Login,
        name:"Login"
      },
      {
        path:'/',
        redirect:'/login'
      },
]

const router = new VueRouter({
    mode:'history',
    routes
})
//全局路由守卫
router.beforeEach((to, from, next) => {
    const token =sessionStorage.getItem('token')
    if(token){
        if(to.path=='/login'){
            next('/home')
        }else{
            next()
        }
    }else {
        if(to.path=='/login'){
            next()
        }
        next()
    }
})
export default router
