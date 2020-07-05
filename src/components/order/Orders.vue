<template>
    <main-base>
        <template slot="main-menu">订单管理</template>
        <template slot="sub-menu">订单列表</template>
        <template slot="content"></template>
    </main-base>
</template>

<script>
    import MainBase from '../Mainbase'
    export default {
        name: "Orders",
        components:{MainBase}
    }
</script>

<style scoped>

</style>