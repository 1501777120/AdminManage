<template>
    <main-base>
        <template slot="main-menu">商品管理</template>
        <template slot="sub-menu">商品列表</template>
        <template slot="content">

        </template>
    </main-base>
</template>

<script>
    import  MainBase from '../Mainbase'
    export default {
        name: "Goods",
        components:{
            MainBase
        }
    }
</script>

<style scoped>

</style>