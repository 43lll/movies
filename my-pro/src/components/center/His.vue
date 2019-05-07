<template>
    <div>
        <el-row>
            <el-col :span="8" v-for="(item, index) in dataList" :key="index">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="'http://127.0.0.1:3000/'+item.pic" class="image" @click="toMovies(item.url)">
                    <div style="padding: 14px;">
                        <div class="bottom clearfix">
                            <span>{{item.title}}</span>
                            <el-button type="primary" class="button" @click=unHistory(item.id,index)>删除记录</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dataList: []
            }
        },
        created() {
            this.getAllHistory();
        },
        methods: {
            // 获取所有的历史记录
            getAllHistory() {
                var url = "http://localhost:3000/getAllHistory";
                this.axios.get(url, {
                    params: {
                        uname: sessionStorage.getItem("uname"),
                    }
                }).then(res => {
                    if (res.data.code == 200) {
                        this.dataList = res.data.data;
                        console.log(this.dataList)
                    }
                });
            },
            // 删除历史记录
            unHistory(id, index) {
                var url = "http://localhost:3000/singleUnHistory";
                this.axios.get(url, {
                    params: {
                        id: id,
                    }
                }).then(res => {
                    if (res.data.code == 200) {
                        alert('删除成功')
                        this.getAllHistory();
                    }
                });
            },
            toMovies(url){
                window.open(url)
            }
        },
    }
</script>
<style>

</style>