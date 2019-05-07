<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="(item, index) in dataList" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="'http://127.0.0.1:3000/'+item.img" class="image" @click="toMovies(item.url)">
          <div style="padding: 14px;">
            <div class="bottom clearfix">
              <span>{{item.title}}</span>
              <el-button type="primary" class="button" @click="unCollect(item.id,index)">取消收藏</el-button>
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
    };
  },
  created() {
    this.getAllCollect();
  },
  methods: {
    // 获取所有的收藏影片
    getAllCollect() {
      var url = "http://localhost:3000/getAllCollects";
      this.axios
        .get(url, {
          params: {
            uname: sessionStorage.getItem("uname")
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            this.dataList = res.data.data;
          }
        });
    },
    // 删除收藏的影片
    unCollect(id, index) {
      var url = "http://localhost:3000/singleUncollect";
      this.axios
        .get(url, {
          params: {
            id: id
          }
        })
        .then(res => {
          if (res.data.code == 200) {
            alert("取消收藏成功");
            this.getAllCollect();
          }
        });
    },
    // 查看某个单独的影片
    toMovies(url) {
      window.open(url);
    }
  }
};
</script>
<style>
</style>