<template>
    <main-base>
        <template slot="main-menu">权限管理</template>
        <template slot="sub-menu">权限列表</template>
        <template slot="content">

        </template>
    </main-base>
</template>

<script>
    import MainBase from '../Mainbase'
    export default {
        name: "Rights",
        components:{
            MainBase
        }
    }
</script>

<style scoped lang="less">

</style>