<template>
    <div class="film-list">
        <el-table :data="filmList" border default-sort-prop="year" default-sort-order="descending" style="width: 100%;">
            <el-table-column prop="namecn" label="名称 " sortable width="200">
            </el-table-column>
            <el-table-column prop="date" label="日期" sortable width="120">
            </el-table-column>
            <el-table-column prop="languagecn" sortable label="语言" width="120">
            </el-table-column>
            <el-table-column class="paragraph" prop="introduction" sortable label="简介">
            </el-table-column>
            <el-table-column prop="avaurlSmall" sortable label="图">
                <template scope="scope">
                    <img :src="scope.row.avaurlSmall" class="image">
                </template>
            </el-table-column>
            <!--    <el-table-column prop="genres" label="标签" :filters="[{ text: '犯罪', value: '犯罪' }, { text: '剧情', value: '剧情' }]" :filter-method="filterTag">
                <template scope="scope">
                    <el-tag v-bind:class="'tags-item'" v-for="item in scope.row.genres" :type="'primary'" close-transition>{{item}}</el-tag>
                </template>
            </el-table-column> -->
            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <el-button type="text" size="small">
                        <router-link :to="'film/'+scope.row.id">编辑</router-link>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="currentChange" :current-page="currentPage" :page-size="pageSize" layout=" prev,pager, next" :total="pageTotal">
        </el-pagination>
    </div>
</template>
<script>
export default {
    name: 'filmlist',
    data() {
        return {
            pageSize: 5,
            pageTotal: 50,
            currentPage: 1,
        };
    },
    computed: {
        filmList: function() {
            // const startindex = (this.currentPage - 1) * this.pageSize;
            // const endindex = this.currentPage * this.pageSize;
            return this.$store.getters.filmList;
        },
    },
    methods: {
        currentChange: function(val) {
            debugger;
            this.currentPage = val;
            const data = {
                pageSize: this.pageSize,
                currentPage: this.currentPage,
            };
            this.$store.dispatch('getFilmList', data);
        },
        formatter(row) {
            return row.year * 1;
        },
        filterTag(value, row) {
            return row.genres.indexOf(value) > -1;
        },
    },
    mounted() {
        if (this.$store.getters.filmList.length === 0) {
            this.$store.dispatch('getFilmList', {});
        }
        // this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        //     headers: {},
        //     emulateJSON: true,
        // }).then((response) => {
        //     this.articles = response.data.subjects;
        // });
        // , (response) => {
        // console.log(response);
        // }
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.film-list {
    margin-top: 20px;
    .el-table div {
        overflow: hidden;
    }
    .el-table th {
        text-align: center;
    }
    .tags-item {
        margin-left: 10px;
    }
    img {
        height: 100px;
    }
    .paragraph {
        text-align: left;
    }
    .el-pagination {
        margin: 30px auto;
    }
}
</style>
