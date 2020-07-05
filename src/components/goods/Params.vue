<template>
    <main-base>
        <template slot="main-menu">商品管理</template>
        <template slot="sub-menu">商品参数</template>
        <template slot="content">

        </template>
    </main-base>
</template>

<script>
    import  MainBase from '../Mainbase'
    export default {
        name: "Params",
        components:{
            MainBase
        }
    }
</script>

<style scoped>

</style>