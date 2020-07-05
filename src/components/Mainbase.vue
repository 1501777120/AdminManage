<template>
    <div class="main-base">
        <div class="title">
            <span><b>首页</b></span>
            <i class=" el-icon-arrow-right" style="color:#C0C4CC"></i>
            <span><slot name="main-menu"></slot></span>
            <i class=" el-icon-arrow-right" style="color:#C0C4CC"></i>
            <span ><slot name="sub-menu"></slot></span>
        </div>
        <div class="content">
           <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Mainbase"
    }
</script>

<style scoped lang="less">
    .main-base{
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 20px;
        .title{
            font-size: 12px;
        }
        .content{
            width: 100%;
            background: #fff;
            padding: 10px 0;
            margin: 10px 0;
        }
    }
</style>