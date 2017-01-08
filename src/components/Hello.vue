<template>
    <div class="hello">
        <el-table :data="articles" stripe style="width: 100%">
            <el-table-column prop="title" label="名称 " width="180">
            </el-table-column>
            <el-table-column prop="year" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="rating.average" label="豆瓣评分">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
            articles: {},
            msg: 'Welcome to Your Vue.js App',
        };
    },
    mounted() {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
            headers: {},
            emulateJSON: true,
        }).then((response) => {
            this.articles = response.data.subjects;
        }, (response) => {
            console.log(response);
        });
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-table th {
    text-align: center;
}
</style>
