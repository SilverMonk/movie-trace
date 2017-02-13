<template>
    <div class="film-detail">
        <el-form ref="form" :model="filmInfo" label-width="80px" class="editview">
            <el-form-item label="电影名称">
                <el-input v-model="filmInfo.namecn"></el-input>
            </el-form-item>
            <el-form-item label="上映时间">
                <el-col :span="11">
                    <el-date-picker v-model="filmInfo.date" type="date" placeholder="选择日期">
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                </el-col>
                </el-date-picker>
            </el-form-item>
            <el-form-item label="电影简介">
                <el-input type="textarea" v-model="filmInfo.introduction" :autosize="{ minRows: 2, maxRows: 12}" size="large"></el-input>
            </el-form-item>
            <el-form-item label="电影封面">
                <el-upload action="//jsonplaceholder.typicode.com/posts/" type="drag" :thumbnail-mode="true" :on-preview="handlePreview" :on-remove="handleRemove" :default-file-list="filmInfo.avaurlSmall">
                    <i class="el-icon-upload"></i>
                    <div class="el-dragger__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="题材类型">
                <el-select v-model="filmInfo.typecn" multiple placeholder="请选择">
                    <el-option v-for="item in typeOptions" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    name: 'filmdetail',
    data() {
        return {};
    },
    computed: {
        filmInfo: function() {
            debugger;
            const id = this.$route.params.id;
            let res = {};
            for (let i = 0; i < this.$store.getters.filmList.length; i += 1) {
                if (this.$store.getters.filmList[i].id.toString() === id) {
                    res = this.$store.getters.filmList[i];
                    res.avaurlSmall = [{
                        url: res.avaurlSmall,
                    }];
                }
            }
            return res;
        },
        typeOptions: function() {
            const options = [{
                value: '选项1',
                label: '黄金糕',
            }, {
                value: '选项2',
                label: '双皮奶',
            }, {
                value: '选项3',
                label: '蚵仔煎',
            }, {
                value: '选项4',
                label: '龙须面',
            }, {
                value: '选项5',
                label: '北京烤鸭',
            }];
            return options;
        },
    },
    methods: {
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
    },
    mounted() {
        if (this.$store.getters.filmList.length === 0) {
            this.$store.dispatch('getFilmList', {});
        }
    },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.film-detail {
    .editview {
        margin: 50px auto;
        width: 80%;
    }
    .el-form-item {
        text-align: left;
    }
}
</style>
