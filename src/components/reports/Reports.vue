<template>
    <main-base>
        <template slot="main-menu">数据统计</template>
        <template slot="sub-menu">数据报表</template>
        <template slot="content"></template>
    </main-base>
</template>

<script>
    import MainBase from '../Mainbase'
    export default {
        name: "Reports",
        components:{MainBase}
    }
</script>

<style scoped>

</style>