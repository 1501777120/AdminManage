<template>
    <main-base>
        <template slot="main-menu">用户管理</template>
        <template slot="sub-menu">用户列表</template>
        <template slot="content">
            <div class="search">
                <el-input v-model="state" placeholder="请输入搜索内容" clearable></el-input>
                <el-button type="primary" plain @click="searchInfo">主要按钮</el-button>
            </div>
        </template>
    </main-base>
</template>

<script>
    import MainBase from "../Mainbase"
    import {usersList} from '@/request/api'
    export default {
        name: "users",
        components:{
            MainBase
        },
        data() {
            return {
                state: '',
                usersList:[],
                pagenum:1,
            }
        },
        created(){
            this.getUsersList()
        },
        methods:{
            //点击搜索
            searchInfo(){
                console.log(123);
            },
            //请求用户列表
            async getUsersList(){
              const {data,meta}=await usersList({pagenum:this.pagenum,pagesize:10})
                if(meta.status!==200){
                    return this.$messag({message: meta.msg, type: 'error',duration: 3000})
                }
                this.usersList=data.users
            }
        }
    }
</script>

<style scoped lang="less">
           .search{
               display: flex;
               .el-input{
                   width: 200px;
               }
               .el-button {
                   margin-left:10px;
               }
           }
</style>