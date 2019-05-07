<template>
  <div>
    <header id="iQIY_PersonalCenter_top">
			<div id="head-top">
          <div id="head-top-cnt">
            <div id="top-logo">
              <a href="iQIY_index.html">
                <img src="http://127.0.0.1:3000/img/movie/sprite-headLogo-nonIndex.png">
              </a>
            </div>
            <div id="top-link">
              <a href="iQIY_index.html">首页</a> 
            </div>
            <div id="top-search">
              <div id="search-text">
                <input type="text"  value="黄金瞳">
              </div>
              <div id="search-btn">搜全网</div>
            </div>
            <ul id="top-lists">
              <a href="#">
                <li class="top-list01"></li>
              </a>
             <!--  <a href="#">
                <li class="top-list03">上传</li>
              </a>
              <a href="#">
                <li class="top-list04">客户端</li>
              </a>
              <a href="#">
                <li class="top-list05">消息</li>
              </a> -->
              <a href="#">
                <li class="top-list06"></li>
              </a>
            </ul>
          </div>
        </div>
		</header>
    <div class="cate">
      <table >
        <tr>
          <td>频道：</td>
          <td style="color:white;background-color:#00be06">电影</td>  
        </tr>
        <tr>
          <td>类型：</td>
          <td v-for="(item,i) of leibie " :key="i" @click="s(item)">
            {{item}}
          </td>
        </tr>
        <tr>
          <td>排序：</td>
          <!-- <td> 综合排序</td> -->
          <td @click="date()"> 上映时间</td>
          <td @click="score()"> 评分 </td>
          
        </tr>
      </table>
      
     <div class="movie-cnt1" v-for="(item, index) in manager" :key="index">
									<div class="movie-img" :style="'background-image: url(http://127.0.0.1:3000/'+item.pic+');'">
										<div class="movie-tubiao"><img src="http://127.0.0.1:3000/img/vip-tubiao.png"/></div>
									</div>
									<div class="movie-text">
										<div class="text-top">
											<div class="movie-title">{{item.title}}</div>
											<div class="movie-score">{{item.score}}</div>
										</div>
										<div class="text-btm">时间：{{item.screen}}
                      <button class="d-btn" @click="toDetail(item.pid)">查看详情</button>
                    </div>
									</div>
				</div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      manager: [],
      leibie:['喜剧','爱情','动作','枪战','犯罪','惊悚','恐怖','悬疑','动画','家庭','奇幻','科幻']
    }

  },
  created(){
    this.getManager();
  },
  methods:{
    getManager() {
      var url = "http://localhost:3000/manager";
      this.axios.get(url).then(res => {
        this.manager = res.data.data;
        // console.log(this.manager);
      });
    },
    date(){
      for(var i=0;i<this.manager.length;i++){
        //console.log(this.manager[i].screen);
        for(var j=0;j<this.manager.length-1-i;j++){
          if(this.manager[j].screen>this.manager[j+1].screen){
            var temp = this.manager[j+1];
            this.$set(this.manager,j+1,this.manager[j]);
            this.$set(this.manager,j,temp);
          }
        }
      }
      
     
    },
    score(){
      for(var i=0;i<this.manager.length;i++){
        for(var j=0;j<this.manager.length-1-i;j++){
          if(this.manager[j].score>this.manager[j+1].score){
            var temp=this.manager[j+1];
             this.$set(this.manager,j+1,this.manager[j]);
            this.$set(this.manager,j,temp);
          }
        }
      }
    },
    s(str){
      var url = "http://localhost:3000/sea1?search="+str;
      this.axios.get(url).then(res => {
        
        this.manager = res.data;
        console.log(this.manager);
      });
    },
    toDetail(pid){
      // console.log(pid);
      this.$router.push(`/detail?pid=${pid}`)
    }


  }
  
}
</script>
<style>
*{margin: 0;
padding: 0;}
a:link{
  color: white;
  text-decoration: none;
}
a:visited{
  color: white;
  text-decoration: none;
}
.movie-cnt1{
	width: 190px;
	height: 340px;
  float: left;
padding-left: 40px;
margin-top: 50px;
}
.cate{
  margin-top: 30px;
  margin-left: 70px;
 /*  margin-bottom: 30px; */

}
.d-btn{
  background-color: #00be06;
  color: white;
  border: 1px solid #00be06;
  margin-left: 21px;
}
.movie-img{
	width: 190px;
	height: 280px;
  padding-left: 15px;
	background-size: 210px 280px;
}
.movie-tubiao{
	width: 32px;
	height: 19px;
	margin-left: 158px;
}
.movie-text{
	width: 190px;
	height: 60px;
	background-color: #F8F8F8;
}
.text-top{
	width: 210px;
	height: 30px;
}
.movie-title{
	width: 160px;
	height: 30px;
	line-height: 30px;
	font-size: 16px;
	float: left;
}
.movie-score{
	width: 40px;
	height: 30px;
	line-height: 30px;
	font-size: 17px;
	text-align: center;
	color: #FF6200;
	float: left;
}
.text-btm{
	width: 200px;
	height: 30px;
	/* padding-left: 10px; */
	line-height: 30px;
	font-size: 15px;
	color: #999999;
  text-align: left;
}
.mov{
  width: 220px;
  height: 260px;
  float: left;
}
table{
  /* width: 700px;
  height: 400px;
  margin: 0 auto; */
 border-color: red;
  line-height: 25px;
}
td{
  padding-left: 30px;
}
header{
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
  left: 0px;
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
#top-lists{
	width: 378px;
	height: 42px;
	margin-top: 14px;
	margin-left: 55px;
	float: left;
	list-style: none;
}
#top-lists li{
	height: 21px;
	padding-top: 21px;
	line-height: 21px;
	text-align: center;
	margin-right: 20px;
	float: left;
	color: #C7C7C7;
}
.top-list01{
	background-image: url(http://127.0.0.1:3000/img/用户/个人中心/user.png);
	background-repeat: no-repeat;
	background-position: 27px 0px;
}
.top-list03{
	background-image: url(http://127.0.0.1:3000/img/用户/个人中心/upload.png);
	background-repeat: no-repeat;
	background-position: 6px 0px;
}
.top-list04{
	background-image: url(http://127.0.0.1:3000/img/用户/个人中心/kehuduan.png);
	background-repeat: no-repeat;
	background-position: 12px 0px;
}
.top-list05{
	background-image: url(http://127.0.0.1:3000/img/用户/个人中心/xinxi.png);
	background-repeat: no-repeat;
	background-position: 3px 0px;
}
.top-list06{
	background-image: url(http://127.0.0.1:3000/img/用户/个人中心/history.png);
	background-repeat: no-repeat;
	background-position: 4px 0px;
	margin-right: 0px;
}
</style>
