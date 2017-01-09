<template>
    <div class="hello">
        <el-table :data="articles" border default-sort-prop="year" default-sort-order="descending" style="width: 100%">
            <el-table-column prop="title" label="名称 " sortable width="200">
            </el-table-column>
            <el-table-column prop="year" label="日期" sortable width="120">
            </el-table-column>
            <el-table-column prop="rating.average" sortable label="豆瓣评分" width="120">
            </el-table-column>
            <el-table-column prop="genres" label="标签" :filters="[{ text: '犯罪', value: '犯罪' }, { text: '剧情', value: '剧情' }]" :filter-method="filterTag">
                <template scope="scope">
                    <el-tag v-bind:class="'tags-item'" v-for="item in scope.row.genres" :type="'primary'" close-transition>{{item}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <el-button @click="" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
            articles: [],
            msg: 'Welcome to Your Vue.js App',
        };
    },
    methods: {
        formatter(row) {
            return row.year * 1;
        },
        filterTag(value, row) {
            return row.genres.indexOf(value) > -1;
        },
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
.hello {
    margin-top: 20px;
}

.el-table th {
    text-align: center;
}

.tags-item {
    margin-left: 10px;
}
</style>
