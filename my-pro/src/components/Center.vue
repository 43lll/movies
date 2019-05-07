<template>
  <div>
    <!--头部导航栏开始-->
    <div id="head-top">
      <div id="head-top-cnt">
        <div id="top-logo">
          <a href="iQIY_index.html">
            <img src="http://127.0.0.1:3000/img/movie/sprite-headLogo-nonIndex.png">
          </a>
        </div>
        <div id="top-title">· 个人中心</div>
        <div id="top-link">
          <a href="iQIY_index.html">首页</a>
        </div>
        <div id="top-search">
          <div id="search-text">
            <input type="text" value="黄金瞳">
          </div>
          <div id="search-btn">搜全网</div>
        </div>
        <ul id="top-lists">
          <a href="#">
            <li class="top-list01">12***8017</li>
          </a>
          <!-- <a href="#">
                <li class="top-list03">上传</li>
              </a> -->
          <a href="#">
            <li class="top-list04">客户端</li>
          </a>
          <!--  <a href="#">
                <li class="top-list05">消息</li>
              </a> -->
          <a href="#">
            <li class="top-list06">看过</li>
          </a>
        </ul>
      </div>
    </div>
    <!-- 头部结束 -->
    <!-- 左侧功能菜单 -->
    <div class="center-contain">
      <div class="left">
        <ul>
          <li class="tx">
            <img class="ig" src="http://127.0.0.1:3000/img/用户/头像.png" alt="">
          </li>
          <li>
            <a class="manu" href="#">个人中心</a>
          </li>
          <li>
            <a class="manu" href="#"> 首页</a>
          </li>
          <li>
            <router-link class="item" to="/Center/History"><span>&gt;</span> 浏览记录</router-link>
          </li>
          <li>
            <router-link class="item" to="/Center/Collect"><span>&gt;</span> 影片收藏</router-link>
          </li>
          <li>
            <router-link class="item" to="/Center/Seave"><span>&gt;</span> 设置</router-link>
          </li>
          <li>
            <router-link class="item" to="/Login"><span>&gt;</span>退出登录</router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
  * {
    margin: 0px;
    padding: 0px;
  }

  .center-contain{
    display: flex;
  }

  .ig {
    width: 200px;
    height: 200px;

  }

  .tx {
    height: 200px;
  }

  a:link {
    color: white;
    text-decoration: none;
  }

  a:visited {
    color: white;
    text-decoration: none;
  }

  /*头部导航栏*/
  header {
    width: 100%;
    height: 70px;
    /* background-color: #000000; */
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
    font-size: 15px;
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
    color: #C7C7C7;
  }

  .top-list01 {
    background-image: url(http://127.0.0.1:3000/img/用户/个人中心/user.png);
    background-repeat: no-repeat;
    background-position: 27px 0px;
  }

  .top-list03 {
    background-image: url(http://127.0.0.1:3000/img/用户/个人中心/upload.png);
    background-repeat: no-repeat;
    background-position: 6px 0px;
  }

  .top-list04 {
    background-image: url(http://127.0.0.1:3000/img/用户/个人中心/kehuduan.png);
    background-repeat: no-repeat;
    background-position: 12px 0px;
  }

  .top-list05 {
    background-image: url(http://127.0.0.1:3000/img/用户/个人中心/xinxi.png);
    background-repeat: no-repeat;
    background-position: 3px 0px;
  }

  .top-list06 {
    background-image: url(http://127.0.0.1:3000/img/用户/个人中心/history.png);
    background-repeat: no-repeat;
    background-position: 4px 0px;
    margin-right: 0px;
  }

  ul,
  li {
    list-style: none;
  }

  .left {
    float: left;
    background-color: #686899;
    width: 200px;
    min-height: 600px;
  }

  ul li {
    height: 50px;
    line-height: 50px;
    padding-left: 40px;
  }

  ul>li span {
    margin: 0 10px;
  }

  ul>li {
    font-size: 18px;
    color: #686899;
    padding-left: 20px;
  }

  .manu {
    color: white;
  }

  ul>li:last-child {
    border: 0;
  }

  ul li .item {
    color: white;
  }

  ul li:hover {
    background: #00c;
  }

  .right {
    float: left;
    padding: 20px;
    width: 80%;
    height: 100%;
  }
</style>