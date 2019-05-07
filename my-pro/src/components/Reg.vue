<template>
<div class="reg">
   <div class="img">
      <img src="http://127.0.0.1:3000/img/movie/sprite-headLogo-nonIndex.png">
    </div>
  <div class="tab">
    <form action="./login" method="get">
    
      <input type="text" name="uname" class="uname" v-model="uname" placeholder="请输入手机号">
       <!-- <span class="s2">获取验证码</span>  -->
      <input type="password" name="password" class="upwd" v-model="upwd" placeholder="请输入密码">
      <p>点击注册即表示您同意<span class="s1">《爱奇艺用户服务协议》</span></p>
      <button type="button" class="btn" @click="btnReg"> 注册</button>
      <div class="cstyle">
        <router-link to="/Login">帐号密码登录</router-link>
      </div>
    </form>
   </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      uname: '',
      upwd: ''
    }
  },
  methods: {
    btnReg(){
      var url = 'http://localhost:3000/reg';
      this.axios.get(url,{
        params:{
          uname: this.uname,
          upwd: this.upwd
        }
      }).then(res => {
        console.log(res.data)
      })
    }
  },
}
</script>
<style>
.img {
  width: 297px;
  height: 100px;
  margin: 50px 500px;
  background-color: rgba(0, 0, 0, 0.8);
  position: absolute;
  padding-left: 57px;
  border: 2px solid #dedede;
  float: left;
}
.img img {
  width: 240px;
  height: 80px;
}
.tab {
  width: 300px;
  height: 300px;
  padding: 0px 25px;
  border: 2px solid #dedede;
  border-top: none;
  margin: 150px 500px;
  position: absolute;
  color: black;
  background-color: rgba(255, 255, 255, 0.8);
}
a{
  text-decoration: none;
  color: #999;
}
p{
  font-size: 12px;
  color: #999;
}
input{
  line-height: 35px;
  font-size: 15px;
  width: 300px;
  margin-bottom: 10px;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
 
}
.reg {
   width: 300px;
  height: 40px;
  margin-top: 10px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: white;
}

.cstyle {
  font-size: 14px;
  
  
}
.s1 {
  font-size: 12px;
  color: #00be06;
}
.s2{
  position: absolute;
  font-size: 14px;
  color: #ccc;
  left: 245px;
  top:20px;
}

.btn {
  background: #00be06;
  color: white;
  width: 300px;
  height: 35px;
  border: none;
  font-size: 20px;
}
.cstyle{
 text-align: right;
  color:#999;
}
a:hover{
  color:#00be06; 
}
</style>
