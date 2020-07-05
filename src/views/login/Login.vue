<template>
    <div class="login">
        <div class="loginSection">
            <div class="login-img">
                <img src="~assets/logo.png" />
            </div>

            <el-form :model="userInfo" ref="ruleForm" :rules="rules" class="demo-ruleForm"  >
                <el-form-item  prop="username">
                    <el-input v-model="userInfo.username">
                        <i slot="prefix" class="el-input__icon iconfont icon-user"></i>
                    </el-input>
                </el-form-item>
                <el-form-item  prop="password">
                    <el-input v-model="userInfo.password" type="password"  >
                        <i slot="prefix" class="el-input__icon iconfont icon-3702mima"></i>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form  >

        </div>
    </div>
</template>

<script>
    import {login} from '@/request/api'
    export default {
        name: "Login",
        data() {
            return {
                userInfo:{
                    username:'admin',
                    password:'123456'
                },
                rules: {
                    username: [
                        {required:true, message: '请输入用户名', trigger: 'blur'},
                        {min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur'}
                    ],
                    password: [
                        {required:true, message: '请输入密码', trigger: 'blur'},
                        {min: 5, max: 11, message: '长度在 5 到 11 个字符', trigger: 'blur'}
                    ],
                }
            }
        },
        methods:{
            submitForm() {
                this.$refs.ruleForm.validate(async valid => {
                    if (!valid) {return this.$message({showClose: true, message: "登陆失败", type: 'error', duration: 2000});}
                    const data = await login(this.userInfo)
                    const {msg, status} = data.meta
                    const token =data.data.token
                    sessionStorage.setItem("token",token)
                    if (status == 200) {
                        this.$message({showClose: true, message: msg, type: 'success', duration: 3000});
                        this.$router.replace('/home')
                        } else if(status != 200){
                         this.$message({showClose: true, message: msg, type: 'error', duration:2000})
                    }
                })
            },
            resetForm(){
                this.$refs.ruleForm.resetFields();
            }
        }
    }
</script>

<style scoped lang="less">
.login{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #2b4b6b;
    .loginSection{
        position: relative;
        width: 450px;
        height: 300px;
        background: #fff;
        border-radius: 3px;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        .login-img{
            position: absolute;
            left: 50%;
            transform:translate(-50%,-50%);
            width: 130px;
            height: 130px;
            border-radius: 50%;

            padding: 10px;
            box-shadow: 0 0 10px #fff;
            background: #fff;
        }
        .login-img img{
            max-width: 130px;
            max-height: 130px;
            background: #eee;
            border-radius: 50%;
        }
        .demo-ruleForm{
            width: 100%;
            position: absolute;
            bottom: 0;
            padding: 0 20px;
            box-sizing: border-box;
        }
    }
}
</style>