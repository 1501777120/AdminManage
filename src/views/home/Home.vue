<template>
    <div class="warp">
        <header>
            <div class="logo">
                <img src="~assets/img/heima.png" class="logo_img"/>
                <span>电商后台管理系统</span>
            </div>
            <el-button type="info" class="sign-out" @click="signOut">退出</el-button>
        </header>
        <div class="content">
           <aside>
               <div class="taggle-button" @click="changeCollapse">| | |</div>
               <el-menu
                       class="el-menu-vertical-demo"
                       background-color="#333744"
                       text-color="#fff"
                       active-text-color="#409EFF"
                       :unique-opened="true"
                       :collapse="isCollapse"
                       :collapse-transition="false"
                       :default-active="activePath"
                       :router="true"
               >
                   <el-submenu :index=String(index)  v-for="(item,index) in menuList" :key="item.id" >
                       <template  slot="title">
                           <i :class="iconList[index].iconName" class="el-icon-menu iconfont"></i>
                           <span>{{item.authName}}</span>
                       </template>
                       <el-menu-item-group>
                           <el-menu-item :index="'/'+item1.path" v-for="(item1,index1) in item.children" @click="toChild('/'+item1.path)">
                               <i class="el-icon-menu" ></i>
                               <span>{{item1.authName}}</span>
                              </el-menu-item>
                       </el-menu-item-group>
                   </el-submenu>
               </el-menu>
           </aside>
            <main>

                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script>
    import {menuList} from '@/request/api'
    export default {
        name: "Home",
        data(){
            return{
                isCollapse:false,
                activePath:'',
                menuList:[],
                iconList:[
                    {iconName:'icon-user'},
                    {iconName:'icon-tijikongjian'},
                    {iconName:'icon-shangpin'},
                    {iconName:'icon-danju'},
                    {iconName:'icon-baobiao'},
                ]
            }
        },
        created(){
            this.getmenuList()
        },
        methods:{
            //修改isCollapse状态
            changeCollapse(){
                this.isCollapse=!this.isCollapse
            },
            //切换页面
            toChild(val){
                this.activePath=val
                console.log(this.activePath);
            },
            //获取左侧菜单
            async getmenuList(){
                const {data,meta}= await menuList()
                if(meta.status!==200) {
                     return this.$messag({message: meta.msg, type: 'error',duration: 3000})
                 }
                 console.log(data)
                this.menuList = data
            },
           //退出管理系统
            signOut(){
                sessionStorage.clear();
                this.$router.replace('/login')
            },
        }
    }
</script>

<style scoped lang="less">
    .el-menu-item-group {
        padding: 0!important;
        line-height: normal;
        font-size: 12px;
        color: #909399;
    }
    .warp{
        height: 100%;
    }
    header{
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 60px;
    background:#373d41;
    min-width: 1200px;
    .logo{
        display: flex;
        box-sizing: border-box;
        height: 60px;
        .logo_img{
           vertical-align: middle;
        }
        span{
            color: #fff;
            font-size: 20px;
            line-height: 60px;
            padding-left: 10px;
        }
    }
    .sign-out{
        margin: 10px 20px 0 0;
       height: 40px;
    }
}
    .content{
        width: 100%;
        min-width: 1200px;
        min-height: calc(100% - 60px);
        display: flex;
        .ifaside{
            width: 60px;
        }
        aside{
            box-sizing: border-box;
            background-color: #333744;
            .taggle-button{
                background: #4a5064;
                height: 30px;
                line-height: 30px;
                color: #fff;
                text-align: center;
                font-size: 12px
            }
            .el-menu {
                border-right: none;
            }
             .el-menu-vertical-demo:not(.el-menu--collapse) {
                width: 200px;
            }
        }
        main{
            flex: 1;
            background-color: #eaedf1;
        }
    }
    .el-submenu__title {
        font-size: 14px;
        background: red;
        padding: 0 20px;
        cursor: pointer;
        transition: border-color .3s,background-color .3s,color .3s;
        box-sizing: border-box;
        background:rgba(51,55,68, )
    }

</style>