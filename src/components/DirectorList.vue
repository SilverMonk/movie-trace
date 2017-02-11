<template>
    <div class="director-list">
        <el-table :data="directorList" border default-sort-prop="year" default-sort-order="descending" style="width: 100%">
            <el-table-column prop="namecn" label="导演名" sortable width="200">
            </el-table-column>
            <el-table-column prop="birthDate" label="生日" sortable width="120">
            </el-table-column>
            <el-table-column prop="introduction" sortable label="简介">
            </el-table-column>
            <el-table-column prop="workTag" label="标签">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
                <template scope="scope">
                    <el-button type="text" size="small" @click='newDirector'>cess
                    </el-button>
                    <el-button type="text" size="small">
                        <router-link :to="'director/'+scope.row.id">编辑</router-link>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'directorlist',
    data() {
        return {};
    },
    computed: {
        directorList: function() {
            return this.$store.getters.directorList;
        },
    },
    methods: {
        newDirector: function() {
            this.$store.dispatch('newDirector', {
                'id': 0,
                'namecn': 'Filiberto Jacobi',
                'nameen': 'Urban Reichert',
                'typecn': 'provident',
                'adrrcn': 'fugit',
                'imbdbno': null,
                'introduction': 'Exercitationem quam consequatur quo sit tempora repellendus quasi cupiditate. Recusandae nihil at et voluptatum optio error amet voluptatem. Necessitatibus ab reprehenderit atque iure est qui.',
                'avaurlSmall': 'http://lorempixel.com/640/480/transport',
                'languagecn': 'sit',
            });
        },
    },
    mounted() {
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
.director-list {
    margin-top: 20px;
    .el-table th {
        text-align: center;
    }
    .tags-item {
        margin-left: 10px;
    }
}
</style>
