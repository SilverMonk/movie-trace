<template>
    <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3">
            <sys-menu></sys-menu>
        </el-col>
        <el-col :xs="16" :sm="18" :md="20" :lg="21">
            <router-view class="view"></router-view>
        </el-col>
    </el-row>
</template>
<script>
import sysMenu from './Menu';

export default {
    name: 'layout',
    components: {
        sysMenu,
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-row,
.el-col {
    height: 100%;
}
</style>
