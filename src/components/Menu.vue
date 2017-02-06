<template>
    <div class='sys-menu'>
        <el-menu theme="dark" mode="vertical" default-active="1">
            <h4>AG bless you</h4>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>数据管理</template>
                <el-menu-item-group>
                    <el-menu-item index="1">
                        <router-link to="/film">
                            <i class="el-icon-document"></i> 电影
                        </router-link>
                    </el-menu-item>
                     <el-menu-item index="2">
                        <router-link to="/director">
                            <i class="el-icon-document"></i> 导演
                        </router-link>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item-group title="系统设置">
            </el-menu-item-group>
        </el-menu>
    </div>
</template>
<script>
export default {
    name: 'sysMenu',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
        };
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.sys-menu {
    height: 100%;
    ul {
        height: 100%;
    }
}

.el-menu {
    h4 {
        color: white;
    }
    .el-menu-item-group__title {
        font-size: 1em;
    }
    .el-menu-item {
        font-size: 1em;
    }
}
</style>
