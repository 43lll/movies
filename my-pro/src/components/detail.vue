<template>
  <div class="container">
    <div class="hea">
      <div id="head-top">
        <div id="head-top-cnt">
          <div id="top-logo">
            <a href="iQIY_index.html">
              <img src="http://127.0.0.1:3000/img/movie/sprite-headLogo-nonIndex.png">
            </a>
          </div>
          <div id="top-title">· 电影</div>
          <div id="top-link">
            <a href="iQIY_index.html">首页</a>
          </div>
          <div id="top-search">
            <div id="search-text">
              <input v-model="sea" type="text">
            </div>
            <div id="search-btn" @click="search()">搜索</div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner">
      <div class="left">
        <img class="d_img" :src="'http://127.0.0.1:3000/'+detail.pic" alt>
      </div>
      <div class="right">
        <h1 >{{detail.title}}</h1>
        <div class="ul-li">
          <ul class="list">
            <li class="item">标签：{{detail.label}}</li>
            <li class="item">导演：{{detail.director}}</li>
            <li class="item">主演：{{detail.performer}}</li>
            <li class="item">时常：{{detail.duration}}</li>
            <li class="item">上映：{{detail.screen}}</li>
          </ul>
        </div>
      </div>
      <div class="score">
        <div style="color:white;line-height:20px;">用户评分</div>
        <div class="movie-score">{{detail.score}}</div>
      </div>
    </div>
    <div class="jq">
      <h3>剧情介绍</h3>
      <div class="det">{{detail.details}}</div>
    </div>
    <div class="pl">
      <h3>影片评论</h3>
      <el-button type="text" @click="dialogVisible = true">添加评论</el-button>
      <el-dialog title="影片评论" :visible.sync="dialogVisible">
        <el-rate v-model="star"></el-rate>
        <el-input type="textarea" :rows="2" placeholder="请输入内容(200字内)" v-model="textarea"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="save">确 定</el-button>
        </span>
      </el-dialog>
      <ul>
        <li v-for="(item, index) of commentList" :key="index">
          <p class="p-name">{{item.uname}}</p>
          <p class="p-time">
            {{item.time | formatTime}}
            <i
              class="el-icon-star-on"
              v-for="(obj, i) of item.star"
              :key="i"
            ></i>
          </p>
          <p>{{item.comment}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      detail: {},
      dialogVisible: false,
      star: "",
      textarea: "",
      sea: "",
      pid: this.$route.query.pid,
      commentList: []
    };
  },
  created() {
    this.getManager();
    this.getComments();
  },
  methods: {
    getManager() {
      var url = "http://localhost:3000/getDetail";
      this.axios
        .get(url, {
          params: {
            pid: this.pid
          }
        })
        .then(res => {
          this.detail = res.data[0];
          console.log(this.detail);
        });
    },
    save() {
      var data = qs.stringify({
        uname: sessionStorage.getItem("uname"),
        pid: this.detail.pid,
        star: this.star,
        comment: this.textarea
      });
      var url = "http://localhost:3000/saveComment";
      this.axios.post(url, data).then(res => {
        if (res.data.code == 200) {
          alert("插入成功");
          this.getComments();
          this.dialogVisible = false;
        }
      });
    },
    getComments() {
      var url = "http://localhost:3000/getComments";
      this.axios
        .get(url, {
          params: {
            pid: this.$route.query.pid
          }
        })
        .then(res => {
          this.commentList = res.data.data;
        });
    }
  },
  filters: {
    formatTime(val) {
      var date = new Date(parseInt(val));
      return `${date.getFullYear()}-${
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1
      }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}`;
    }
  }
};
</script>
<style>
h3{
  line-height: 50px;
}
#head-top {
  width: 100%;
  height: 70px;
  background-color: #232325;
  position: fixed;
  z-index: 3;
  top: 0px;
}
#head-top-cnt {
  width: 1350px;
  height: 70px;
  margin: 0px auto;
}
#top-logo {
  width: 120px;
  height: 40px;
  margin-top: 10px;
  margin-left: 30px;
  float: left;
}
#top-title {
  width: 70px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-top: 10px;
  color: #00be06;
  font-size: 20px;
  float: left;
}
#top-link {
  height: 40px;
  width: 120px;
  line-height: 40px;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
  color: #bcbcbc;
  float: left;
}

#top-search {
  width: 460px;
  height: 42px;
  margin-left: 93px;
  margin-top: 14px;
  float: left;
}
#search-text {
  width: 364px;
  height: 42px;
  margin-bottom: 5px;
  border-radius: 21px 0px 0px 21px;
  background-color: rgba(255, 255, 255, 0.1);
  float: left;
}
#search-text input {
  width: 315px;
  height: 42px;
  line-height: 42px;
  border: none;
  margin-left: 15px;
  color: #666666;
  background-color: rgba(255, 255, 255, 0);
}
#search-btn {
  width: 96px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  border-radius: 0px 21px 21px 0px;
  background-color: #00be06;
  color: white;
  float: left;
}

.banner {
  /* width: 100%; */
  height: 375px;
  background: url(http://127.1:3000/img/banner.png);
  display: flex;
  padding: 0% 0% 0% 8%;
}
.d_img {
  margin: 0 30px;
  width: 240px;
  height: 330px;
  padding-bottom: 40px;
  border: 4px solid white;
  margin: 2% 2% 2% 2%;
}
h1 {
  color: white;
  font-weight: bold;
  line-height: 60px;
}
li {
  list-style: none;
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
}
ul {
  padding-bottom: 60px;
}
.left {
  margin-top: 4%;
}
.right {
  margin-top: 6%;
  padding-left: 50px;
}
.right li{
  color: white;
}
.score {
  margin-top: 14%;
  padding-left: 350px;
}
.movie-score{
  font-size: 35px;
  color: #FF8000;
}
/* span {
  color: white;
} */
.jq {
  width: 700px;
  height: 300px;
  text-align: left;
  margin-top: 50px;
  margin-left: 100px;
}
.det {
  height: 300px;
  font-size: 14px;
  line-height: 20px;
}
.pl{
  margin-left: 100px;
}
.el-icon-star-on
{
  color:#FF8000;
}
.p-name{
  padding: 0%;
}
.p-time{
  color:#bcbcbc;
}
a:link{
  color: white;
  text-decoration: none;
}
a:visited{
  color: white;
  text-decoration: none;
}
</style>

