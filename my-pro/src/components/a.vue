<template>
  <div :indexList="indexList">
    <div style="width:210px;hegith:340px;float:left;margin-right:10px;position:relative" v-for="(item,i) of indexList"
      :key="i">
      <dl v-if="!isTaggle[i]" @mouseenter="enter(i)" @mouseleave="leave(i)">
        <a :href="item.url">
          <dt class="movie-img" :style="'background-image: url(http://127.0.0.1:3000/'+item.pic+');'">
          </dt>
        </a>
        <dd style="overfloat:hidden">
          <span class="title1">{{item.title}}</span>
          <span class="socre1">{{item.score}}</span>
          <div style="clear:both"></div>
        </dd>
        <dd class="title2">{{item.subheading}}</dd>
      </dl>
      <dl v-if="isTaggle[i]" @mouseenter="enter(i)" @mouseleave="leave(i)" id="aaa"
        style="background:white;width:252px;position:relative;z-index:100">
        <div class="movie-cnt2-img" v-if="isTaggle[i]">
          <a @click.prevent="toMovies(item.url, item.mid, item.pic, item.title)">
            <img :src="'http://127.0.0.1:3000/'+item.pic1" alt="">
          </a>
        </div>
        <div class="movie-cnt2-title">
          <div class="movie-cnt2-tit">{{item.title}}</div>
          <div class="movie-cnt2-score">{{item.score}}</div>
        </div>
        <div class="movie-cnt2-tagtime">
          <div class="movie-cnt2-tag">标签：{{item.label}}</div>
          <div class="movie-cnt2-time">{{item.duration}}</div>
        </div>
        <div class="movie-cnt2-actors">主演：{{item.performer}}</div>
        <div class="movie-cnt2-text">简介：{{item.details}}</div>
        <div class="movie-cnt2-collect">
          <div class="movie-cnt2-collect-score-stars"></div>
          <div class="movie-cnt2-collect-score-tit">未定义</div>
          <!-- 为收藏按钮添加一个收藏事件 -->
          <div class="movie-cnt2-collect-btn" @click="colle(item.mid,item.pic,item.title,i,item.url)" v-if="item.isSave == 0">收藏
          </div>
          <div class="movie-cnt2-collect-btn" @click="uncolle(item.mid,i)" v-else>取消收藏</div>
        </div>
        <div class="movie-cnt2-zancai">
          <div class="movie-cnt2-zan" @click="addZan(item.mid, i)" v-if="item.status==0 || item.status==2">
            <div class="movie-cnt2-zan-img">
              <img src="http://127.0.0.1:3000/img/zan1.png">
            </div>
            <div class="movie-cnt2-zan-num" >{{item.zan}}</div>
          </div>
          <div class="movie-cnt2-zan" @click="unZan(item.mid, i)"  v-if="item.status==1">
            <div class="movie-cnt2-zan-img">
              <img src="http://127.0.0.1:3000/img/zan2.png">
            </div>
            <div class="movie-cnt2-zan-num" >{{item.zan}}</div>
          </div>
          <div class="movie-cnt2-cai"  @click="addCai(item.mid, i)" v-if="item.status==0 || item.status==1">
            <div class="movie-cnt2-cai-img">
              <img src="http://127.0.0.1:3000/img/cai1.png">
            </div>
            <div class="movie-cnt2-cai-num">{{item.cai}}</div>
          </div>
          <div class="movie-cnt2-cai"  @click="unCai(item.mid, i)" v-if="item.status==2">
            <div class="movie-cnt2-cai-img">
              <img src="http://127.0.0.1:3000/img/cai2.png">
            </div>
            <div class="movie-cnt2-cai-num">{{item.cai}}</div>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>
<script>
  import qs from "qs";
  export default {
    props: ["indexList"],

    data() {
      return {
        msg: "this is a data to b data",
        isTaggle: [false, false, false, false, false, false],
        collectList: [],
        pid: this.$route.query.pid,//空的！！！ 
        manager: []
      }
    },
    methods: {
      enter(i) {
        //监听数据
        this.$set(this.isTaggle, i, true);
      },
      leave(i) {
        this.$set(this.isTaggle, i, false);
      },
      colle(mid, pic, title, i, url) {
        var data = qs.stringify({
          uname: sessionStorage.getItem("uname"),
          pid: mid,
          img: pic,
          title: title,
          url:url
        });
        var url = "http://localhost:3000/collect";
        this.axios.post(url, data).then(res => {
          if (res.data.code == 200) {
            alert("收藏成功");
            var temp = this.indexList;
            temp[i].isSave = 1;
            this.indexList = temp;
          }
        });
      },
      uncolle(mid, i) {
        var data = qs.stringify({
          uname: sessionStorage.getItem("uname"),
          pid: mid,
        });
        var url = "http://localhost:3000/uncollect";
        this.axios.post(url, data).then(res => {
          if (res.data.code == 200) {
            alert("取消收藏成功");
            var temp = this.indexList;
            temp[i].isSave = 0;
            this.indexList = temp;
          }
        });
      },
      toMovies(url, mid, pic, title) {
        window.open(url)
        var data = qs.stringify({
          uname: sessionStorage.getItem("uname"),
          pid: mid,
          img: pic,
          title: title,
          url:url
        });
        var url = "http://localhost:3000/addHistory";
        this.axios.post(url, data).then(res => {
          console.log(res.data.data)
        });
      },
      // 添加赞
      addZan(id,index){
        var url = "http://localhost:3000/addZan";
        this.axios.get(url, {
          params:{
            id: id
          }
        }).then(res => {
          if (res.data.code == 200) {
            alert('赞');
            var arr = this.indexList;
            arr[index].zan = arr[index].zan+1;
            arr[index].status = 1;
            this.indexList = arr;
          }
        })
      },
      // 添加踩
      addCai(id,index){
        var url = "http://localhost:3000/addCai";
        this.axios.get(url, {
          params:{
            id: id
          }
        }).then(res => {
          if (res.data.code == 200) {
            alert('踩');
            var arr = this.indexList;
            arr[index].cai = arr[index].cai+1;
            arr[index].status = 2;
            this.indexList = arr;
          }
        })
      },
      // 取消赞
      unZan(id, index){
        var url = "http://localhost:3000/unZan";
        this.axios.get(url, {
          params:{
            id: id
          }
        }).then(res => {
          if (res.data.code == 200) {
            alert('取消赞');
            var arr = this.indexList;
            arr[index].zan = arr[index].zan-1;
            arr[index].status = 0;
            this.indexList = arr;
          }
        })
      },
      // 取消踩
      unCai(id, index){
        var url = "http://localhost:3000/unCai";
        this.axios.get(url, {
          params:{
            id: id
          }
        }).then(res => {
          if (res.data.code == 200) {
            alert('取消踩');
            var arr = this.indexList;
            arr[index].cai = arr[index].cai-1;
            arr[index].status = 0;
            this.indexList = arr;
          }
        })
      }
    }
  } 
</script>