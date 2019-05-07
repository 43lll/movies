<template>
  <div>
    <!--头部开始-->
    <header>
      <a name="hea">
        <div id="head-top">
          <div id="head-top-cnt">
            <div id="top-logo">
              <router-link to="/">
                <img src="http://127.0.0.1:3000/img/movie/sprite-headLogo-nonIndex.png">
              </router-link>
            </div>
            <div id="top-title">· 电影</div>
            <div id="top-link">
            </div>
            <div id="top-search">
              <div id="search-text">
                <input v-model="sea" type="text" value="动物世界">
              </div>
              <div id="search-btn" @click="search()">搜全网</div>
            </div>
            <ul id="top-lists">
              <li class="top-list01" v-if="msgg=='登录'">
                <router-link to="/Login">登录</router-link>|
                <router-link to="/Reg">注册</router-link>
              </li>
              <li class="top-list01" v-if="msgg" @click="toCenter">
                {{msgg}}
              </li>
              <li class="top-list03">
                <router-link to="/Adm">管理员</router-link>
              </li>
            </ul>
          </div>
        </div>
      </a>
      <my-slider :slider="slider"></my-slider>


    </header>
    <!--头部结束-->
    <!--主体开始-->
    <div class="section">
      <div id="main-menus">
        <div id="main-menus-cnt1">
          <div class="menus-cnt-title">
            片库
            <span>全部></span>
          </div>
          <ul class="menus-cnt1-lists">
            <li class="menus-cnt-list">
              <router-link to="/category"> 近期热门</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 免费电影</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 会员专享</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 最新上线</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 院线大片</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 评分最高</router-link>
            </li>
          </ul>
        </div>

        <div id="main-menus-cnt2">
          <div class="menus-cnt-title">
            地区
            <span>全部></span>
          </div>
          <ul class="menus-cnt2-lists">
            <li class="menus-cnt-list">
              <router-link to="/category"> 华语</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 美国</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 欧洲</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 日本</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 韩国</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 泰国</router-link>
            </li>
          </ul>
        </div>

        <div id="main-menus-cnt3">
          <div class="menus-cnt-title">
            分类
            <span>全部></span>
          </div>
          <ul class="menus-cnt3-lists">
            <li class="menus-cnt-list">
              <router-link to="/category"> 喜剧</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 悲剧</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 爱情</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 动作</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 枪战</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 犯罪</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 恐怖</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 悬疑</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 动画</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 家庭</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 魔幻</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 科幻</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 战争</router-link>
            </li>
            <li class="menus-cnt-list">
              <router-link to="/category"> 青春</router-link>
            </li>
          </ul>
        </div>
        <div id="main-menus-cnt4"></div>
      </div>

      <div id="main-content1">
        <div class="main-content1-title">
          <div class="main-content1-title-tit">电影排行榜</div>
          <div class="main-content1-title-more">更多></div>
          <!--  <div class="main-content1-title-btn" style="background-color: #00BE06;">热播榜</div>
          <div class="main-content1-title-btn" style="background-color: #C7C7C7;">高分榜</div> -->
        </div>
        <div class="main-content1-cnt">
          <div class="content1-cnt-playleft" style="width:40%;float:left">
            <!-- <div class="playleft-title">白蛇缘起</div>
            <div class="playleft-video">
              <img src="http://127.0.0.1:3000/img/movie/sprite-channel-icons_play.png">
            </div> -->
          </div>
          <div style="width:58%;float:left;height:340px;margin-left:2%">
            <as :indexList="dyphb" :listNum="dyphb.length" style="width:100%">
            </as>
          </div>


        </div>
      </div>
      <div id="main-content2">
        <div class="main-content2-list">
          <div class="list-title">
            <div class="title-tubiao"></div>
            <div class="title-tit">最新上线</div>
          </div>
          <div class="list-more">本周上架></div>
          <ul class="list-menu">
            <li>最强电影独播专区</li>
            <li class="menu-line">/</li>
            <li>品质齐聚文艺院线</li>
          </ul>
        </div>
        <div class="main-content2-cnts">
          <as :indexList="zxsj" style="width:100%">
          </as>
        </div>

      </div>

      <div id="main-content3">
        <div class="main-content2-list">
          <div class="list-title">
            <div class="title-tubiao"></div>
            <div class="title-tit">经典动画</div>
          </div>
          <div class="list-more">更多></div>
        </div>
        <as :indexList="jddh" style="width:100%">
        </as>
      </div>
      <div class="bg">
        <h1>私人专属影院</h1>
        <my-carrousel :carrousel="carrousel"></my-carrousel>
      </div>

      <div id="main-content2">
        <div class="main-content2-list">
          <div class="list-title">
            <div class="title-tubiao"></div>
            <div class="title-tit">华语最好看</div>
          </div>
          <div class="list-more">更多></div>
        </div>
        <as :indexList="hyzhk" style="width:100%">
        </as>
      </div>


      <div id="main-content2">
        <div class="main-content2-list">
          <div class="list-title">
            <div class="title-tubiao"></div>
            <div class="title-tit">精彩好莱坞</div>
          </div>
          <div class="list-more">更多></div>
        </div>
        <as :indexList="jchlw" style="width:100%">
        </as>
      </div>
      <div style="clear:both"></div>
    </div>
    <footer>
      <ul class="footer-menus">
        <li>公司介绍</li>
        <li>新闻动态</li>
        <li>联系方式</li>
        <li>招聘英才</li>
        <li>爱奇艺实验室</li>
        <li>开放平台</li>
        <li>爱奇艺号认证</li>
        <li>爱奇艺号</li>
        <li>爱奇艺会员合作</li>
        <li>帮助中心</li>
        <li>侵权投诉</li>
        <li>用户协议</li>
        <li>隐私政策</li>
        <li>About US</li>
      </ul>
      <div class="p">
        <p>反盗版和反盗链权利声明 Copyright © 2019 爱奇艺 All Rights Reserved</p>
      </div>
    </footer>

  </div>
</template>
<script>
  import mySlider from './slider.vue'
  import myCarrousel from './carrousel.vue'
  import as from './a.vue'
  export default {
    components: { mySlider, myCarrousel, as },
    data() {
      return {
        sea: "",
        msgg: sessionStorage.getItem('uname') || '登录',
        carrousel: [],
        slider: [],
        list: [],
        isTaggle: [],
        msg: [1, 2, 3],
        allCollect: [],
        dyphb: [],//电影排行榜
        zxsj: [],//最新上架
        jddh: [],//金典动画
        hyzhk: [],//华语最好看
        jchlw: []//精彩好莱坞
      };
    },
    created() {
      this.renderCollect().then(this.getList);
      this.getSlider();
      this.getCarrousel();
    },
    methods: {
      enter(e, i) {
        console.log(this.isTaggle);
        this.$set(this.isTaggle, i, true);
        console.log(this.isTaggle);
      },
      leave(e, i) {
        console.log(this.isTaggle);
        this.$set(this.isTaggle, i, false);
        console.log(this.isTaggle);
      },
      getList() {
        var _self = this;
        return new Promise(function (result, reject) {
          var url = "http://localhost:3000/index";
          _self.axios.get(url).then(res => {
            var resList = res.data.data;

            for (const item of resList) {
              item.isSave = 0;
              for (const i of _self.allCollect) {
                if (item.mid == i.pid) {
                  item.isSave = 1;
                }
              }
            }

            _self.dyphb = resList.splice(0, 3);
            _self.zxsj = resList.splice(0, 6);
            _self.jddh = resList.splice(0, 6);
            _self.hyzhk = resList.splice(0, 6);
            _self.jchlw = resList.splice(0, 6);
            _self.isTaggle = [false, false, false, false, false, false];
            result();
          });
        })
      },
      getSlider() {
        var url = "http://localhost:3000/slider";
        this.axios.get(url).then(res => {
          this.slider = res.data;
        });
      },
      getCarrousel() {
        var url = "http://localhost:3000/carrousel";
        this.axios.get(url).then(res => {
          this.carrousel = res.data;
        });
      },
      search() {
        var url = "http://localhost:3000/search?search=" + this.sea;
        this.axios.get(url).then(res => {
          console.log(res.data);
          this.manager = res.data;
        });
      },
      renderCollect() {
        // console.log(this.collectList)
        var _self = this;
        return new Promise(function (resolve, reject) {
          var url = "http://localhost:3000/isCollects";
          _self.axios.get(url).then(res => {
            // console.log(res.data.data)
            var result = res.data.data;
            _self.allCollect = result;
            resolve();
          })
        })
      },
      toCenter() {
        this.$router.push('/Center/History')
      }

    }
  };
</script>
<style>
  * {
    margin: 0px;
    padding: 0px;
  }

  a:link {
    color: #000000;
    text-decoration: none;
  }

  a:visited {
    color: #000000;
    text-decoration: none;
  }

  /*  */
  .bg {
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 95%;
    height: 405px;
    background-color: rgba(0, 0, 0, .3);
    margin-left: 10px;
  }

  h1 {
    color: white;
    line-height: 90px;
  }

  /* 头部样式 */
  header {
    width: 100%;
    height: 520px;
    background-color: #000000;
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

  #top-lists {
    width: 378px;
    height: 42px;
    margin-top: 14px;
    margin-left: 55px;
    float: left;
    list-style: none;
  }

  #top-lists li {
    height: 21px;
    padding-top: 21px;
    line-height: 21px;
    text-align: center;
    margin-right: 20px;
    float: left;
    color: #c7c7c7;
    cursor: pointer;
  }
  #top-lists li a{
    cursor: pointer;
    color: #c7c7c7;

  }

  .top-list01 {
    background-image: url(http://127.0.0.1:3000/img/user.png);
    background-repeat: no-repeat;
    background-position: 27px 0px;
  }

   .top-list02 {
  background-image: url(http://127.0.0.1:3000/img/sprite-vip-rank.png);
  background-repeat: no-repeat;
  background-position: -205px -64px;
}
.top-list03 {
  background-image: url(http://127.0.0.1:3000/img/upload.png);
  background-repeat: no-repeat;
  background-position: 6px 0px;
}
.top-list04 {
  background-image: url(http://127.0.0.1:3000/img/kehuduan.png);
  background-repeat: no-repeat;
  background-position: 12px 0px;
}
.top-list05 {
  background-image: url(http://127.0.0.1:3000/img/xinxi.png);
  background-repeat: no-repeat;
  background-position: 3px 0px;
} 
  .top-list06 {
    background-image: url(http://127.0.0.1:3000/img/history.png);
    background-repeat: no-repeat;
    background-position: 4px 0px;
    margin-right: 0px;
  }

  .footer-menus {
    margin-left: 130px;
  }

  .footer-menus li {
    padding-left: 20px;
    line-height: 30px;
    font-size: 14px;
    margin-top: 60px;
    list-style: none;
    float: left;
  }

  .p {
    text-align: center;
    margin-bottom: 30px;
    clear: both;
    font-size: 13px;
    line-height: 40px;
    color: #999;
  }

  .img-menulist {
    height: 32px;
    line-height: 32px;
    margin: 0px 10px;
    float: left;
    font-size: 14px;
    color: white;
    /*background-color: green;*/
  }



  .section {
    /* width: 1350px; */
    height: auto;
  }

  /* 主体 */
  #main-menus {
    margin-left: 30px;
    /* width: 1350px; */
    height: 110px;
    background-color: #f9f9f9;
  }

  #main-menus-cnt1,
  #main-menus-cnt2,
  #main-menus-cnt3 {
    width: 250px;
    height: 110px;
    float: left;
  }

  #main-menus-cnt1 {
    margin-left: 30px;
  }

  #main-menus-cnt2 {
    margin-left: 80px;
    width: 180px;
  }

  #main-menus-cnt3 {
    margin-left: 80px;
    width: 410px;
  }

  #main-menus-cnt4 {
    width: 236px;
    height: 110px;
    margin-left: 40px;
    background-image: url(http://127.0.0.1:3000/img/movie/classes-logo-big.png);
    background-position: 0px 17px;
    background-repeat: no-repeat;
    float: left;
  }

  .menus-cnt-title {
    text-align: left;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    color: #a9a9a9;
  }

  .menus-cnt-title span {
    font-size: 14px;
    color: black;
    margin-left: 10px;
  }

  .menus-cnt1-lists {
    width: 270px;
    height: 60px;
    list-style: none;
  }

  .menus-cnt2-lists {
    width: 180px;
    height: 60px;
    list-style: none;
  }

  .menus-cnt3-lists {
    width: 410px;
    height: 60px;
    list-style: none;
  }

  .menus-cnt-list {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin: 0px 15px;
    float: left;
  }

  #main-content1 {
    width: 1290px;
    height: 390px;
    margin-left: 10px;
    margin-top: 20px;
    /* padding: 0px 30px; */
  }

  #main-content2 {
    margin-left: 10px;
    margin-top: 20px;
  }

  .main-content1-title {
    width: 400px;
    height: 26px;
    padding: 12px 0px;
  }

  .main-content1-title-tit {
    height: 25px;
    line-height: 25px;
    font-size: 24px;
    float: left;
  }

  .main-content1-title-more {
    height: 26px;
    line-height: 26px;
    margin-left: 10px;
    float: left;
  }

  .main-content1-title-btn {
    width: 62px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    margin-left: 20px;
    border-radius: 13px;
    font-size: 14px;
    float: left;
  }

  .main-content1-cnt {
    width: 1290px;
    height: 340px;
  }

  .content1-cnt-playleft {
    width: 640px;
    height: 340px;
    float: left;
    background-color: black;
  }

  .playleft-title {
    width: 640px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: white;
    font-size: 20px;
  }

  .playleft-video {
    width: 480px;
    height: 270px;
    margin: 0px 80px;
    background-image: url(http://127.0.0.1:3000/img/movie/v_113158420_m_601_m5_480_270.jpg);
  }

  .playleft-video img {
    width: 50px;
    height: 50px;
    margin-left: 215px;
    margin-top: 110px;
  }

  .content1-cnt-listright {
    width: 645px;
    height: 340px;
    float: left;
  }

  .movie-cnt {
    width: 210px;
    height: 340px;
    margin-left: 5px;
    float: left;
    position: relative;
  }

  .movie-cnt1 {
    width: 210px;
    height: 340px;
  }

  .movie-img {
    width: 210px;
    height: 280px;
    background-size: 210px 280px;
  }

  .movie-tubiao {
    width: 32px;
    height: 19px;
    margin-left: 170px;
  }

  .title1 {
    width: 80%;
    float: left;
    text-align: left;
    line-height: 35px;
    font-family: "SimHei";
  }

  .socre1 {
    width: 20%;
    float: left;
    text-align: center;
    color: #ff6200;
  }

  .title2 {
    text-align: left;
    color: #999;
    font-size: 14px;
  }

  .movie-text {
    width: 210px;
    height: 60px;
    background-color: #f8f8f8;
  }

  .text-top {
    width: 210px;
    height: 30px;
  }

  .movie-title {
    width: 160px;
    height: 30px;
    padding-left: 10px;
    line-height: 30px;
    font-size: 16px;
    float: left;
  }

  .movie-score {
    width: 40px;
    height: 30px;
    line-height: 30px;
    font-size: 17px;
    text-align: center;
    color: #ff6200;
    float: left;
  }

  .text-btm {
    width: 200px;
    height: 30px;
    padding-left: 10px;
    line-height: 30px;
    font-size: 15px;
    color: #999999;
  }

  .movie-cnt2 {
    width: 252px;
    height: 362px;
    position: absolute;
    left: -21px;
    top: -11px;
    z-index: 1;
    /* display: none; */
    background-color: white;
    box-shadow: 1px 1px 5px;
  }

  .movie-cnt2-img,
  .movie-cnt2-img img {
    width: 252px;
    height: 140px;
  }

  .movie-cnt2-title {
    width: 252px;
    height: 30px;
    margin-top: 5px;
  }

  .movie-cnt2-tit {
    width: 185px;
    height: 30px;
    padding-left: 10px;
    line-height: 30px;
    font-size: 16px;
    float: left;
  }

  .movie-cnt2-score {
    width: 57px;
    height: 30px;
    line-height: 30px;
    font-size: 17px;
    text-align: center;
    color: #ff6200;
    float: left;
  }

  .movie-cnt2-tagtime,
  .movie-cnt2-actors,
  .movie-cnt2-text {
    width: 250px;
    height: 26px;
    padding: 0px 5px;
    font-size: 12px;
    color: #999999;
  }

  .movie-cnt2-tag {
    width: 180px;
    height: 26px;
    line-height: 26px;
    float: left;
  }

  .movie-cnt2-tit,
  .movie-cnt2-tag,
  .movie-cnt2-actors,
  .movie-cnt2-text {
    text-align: left;
  }

  .movie-cnt2-time {
    width: 52px;
    height: 26px;
    float: left;
    line-height: 26px;
  }

  .movie-cnt2-text {
    height: 52px;
  }

  .movie-cnt2-collect {
    width: 232px;
    height: 30px;
    padding: 0px 10px;
    font-size: 12px;
    border-bottom: 1px solid gainsboro;
  }

  .movie-cnt2-collect-score-stars {
    width: 120px;
    height: 20px;
    /*   background-image: url(http://127.0.0.1:300/img/grade-star.png); */
    background-repeat: no-repeat;
    background-position: 0px 2px;
    float: left;
  }

  .movie-cnt2-collect-score-tit {
    width: 40px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-left: 6px;
    float: left;
  }

  .movie-cnt2-collect-btn {
    width: 56px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 10px;
    background-color: #00be06;
    color: white;
    float: left;
    margin-left: 10px;
  }

  .movie-cnt2-zancai {
    width: 252px;
    height: 50px;
  }

  .movie-cnt2-zan,
  .movie-cnt2-cai {
    width: 50px;
    height: 48px;
    padding: 6px 38px;
    float: left;
  }

  .movie-cnt2-zan-img,
  .movie-cnt2-cai-img {
    margin-left: 15px;
  }

  .movie-cnt2-zan-img,
  .movie-cnt2-zan-img img,
  .movie-cnt2-cai-img,
  .movie-cnt2-cai-img img {
    width: 22px;
    height: 21px;
  }

  .movie-cnt2-zan-num,
  .movie-cnt2-cai-num {
    width: 50px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    color: #999999;
  }

  #main-content2,
  #main-content3 {
    /* width: 1340px; */
    height: 390px;
    /* padding: 0px 30px; */
    margin-top: 20px;
  }

  #main-content3 {
    margin-bottom: 45px;
    margin-left: 10px;
  }

  .main-content2-list {
    width: 1290px;
    height: 50px;
  }

  .list-title {
    height: 26px;
    padding: 12px 0px;
    float: left;
  }

  .title-tit {
    height: 25px;
    line-height: 25px;
    font-size: 24px;
    float: left;
  }

  .list-more {
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-left: 10px;
    float: left;
  }

  .list-menu {
    height: 50px;
    float: left;
    margin-left: 15px;
    list-style: none;
  }

  .list-menu li {
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin: 0px 5px;
    float: left;
  }

  .menu-line {
    color: #00be06;
  }
</style>