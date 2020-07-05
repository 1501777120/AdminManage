<template>
    <main-base>
        <template slot="main-menu">用户管理</template>
        <template slot="sub-menu">角色列表</template>
        <template slot="content"></template>
    </main-base>
</template>

<script>
    import  MainBase from '../Mainbase'
    export default {
        name: "Roles",
        components:{
            MainBase
        }
    }
</script>

<style scoped>

</style>