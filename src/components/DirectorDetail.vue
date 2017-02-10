<template>
    <div class="film-detail">
        <el-form ref="form" :model="directorInfo" label-width="80px">
            <el-form-item label="电影名称">
                <el-input v-model="directorInfo.id"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'filmdetail',
    data() {
        return {
            form: {
                name: '估计要用vuex，真是给跪了',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
        };
    },
    computed: {
        directorInfo: function() {
            return this.$store.getters.directorList[this.$route.params.id];
        },
    },
    mounted() {},
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.film-detail {}
</style>
