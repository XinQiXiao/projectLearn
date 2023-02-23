<template>
    <div class="container">
        <p class="home-title">Home</p>
        <el-button @click="btnClick">button</el-button>

        <div>
            <p>vuex 测试</p>
            <p>{{curCount}}</p>
            <el-button @click="countAdd">count add</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        curCount(){
            return this.$store.state.count;
        },
    },
    methods: {
        btnClick(){
            this.$message.success('点击了button');
        },
        countAdd(){
            this.$store.commit('increment')
        },
    },
}
</script>

<style lang="less" scoped>
.container {
    background-color: yellow;
    .home-title {
        color: blue;
    }
}
</style>