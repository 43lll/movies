<template>
  <div class="login">
    <div class="img">
      <img src="http://127.0.0.1:3000/img/movie/sprite-headLogo-nonIndex.png">
    </div>
    <div class="tab">
      <div id="tab-cnts">
        <form class="tab-cnt" action="#" id="f1" name="fname">
          <div class="user">
            <img src="http://127.0.0.1:3000/img/用户/登录/tab1.jpg">
            <input type="text" id="un" placeholder="请输入11位的手机号"
             v-model="uname" name="number">
          </div>
          <div class="pwd">
            <img src="http://127.0.0.1:3000/img/用户/登录/tab2.jpg">
            <input type="text" id="pwd" placeholder="请输入密码" v-model="upwd">
          </div>
          <div class="txt">
            <div class="txtleft"> <a href="#">忘记密码?</a> </div>
            <div class="txtright"> <router-link to="/Reg">免费注册</router-link></div>
          </div>
          <div class="login">
            <input id="myDiv" v-on:click="btnLogin" type="submit" value="登录">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
//
import { Toast } from "mint-ui";

export default {
  data() {
    return { uname: "",
     upwd: "",
     errorTip:false };
  },
  methods: {
     btnLogin() {
       //1:获取用户输入用户名和密码
        var u = this.uname;
        var p = this.upwd;
         //2:验证不能为空
        var reg = /^1[3-8]\d{9}$/;
        if(!reg.test(u)){
           alert("用户名格式不正确，请检查");
           return;
        }
        //3:发送ajax请求
        var url = "http://127.0.0.1:3000/login?uname="+u+"&upwd="+p;
      
        this.axios.get(url).then(result=>{
          if(result.data.code==1){
            sessionStorage.setItem("uname",u);
            this.$router.push("/Index")
          }else{
            alert("用户名或密码有误");
          }
        })
  
  }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
}
a:hover{
  color:#00be06; 
}
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

.tab-cnt {
  width: 300px;
  height: 50px;
}
.tab-cnt-qrcode {
  width: 130px;
  height: 130px;
  margin: 28px 87px 10px;
}
.tab-cnt-qrcode img {
  width: 130px;
  height: 130px;
  float: left;
}
.tab-cnt-text1,
.tab-cnt-text2 {
  width: 300px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.tab-cnt-text2 {
  font-size: 12px;
}
.user,
.pwd {
  width: 288px;
  height: 35px;
  border: 1px solid #dedede;
  margin-top: 30px;
}
.user img,
.pwd img {
  width: 35px;
  height: 35px;
  float: left;
}
.user input,
.pwd input {
  width: 251px;
  height: 33px;
  float: left;
  border: none;
}
#myDiv {
  width: 300px;
  height: 33px;
  border: none;
  color: white;
  background-color: #00be06;
}
.txt {
  width: 250px;
  height: 20px;
  margin-top: 30px;
  font-size: 12px;
}
.txtleft {
  width: 200px;
  height: 20px;
  line-height: 20px;
  float: left;
}
.txtright {
  width: 50px;
  height: 20px;
  line-height: 20px;
  float: left;
}
.login {
  width: 300px;
  height: 40px;
  margin-top: 10px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: white;
}

</style>
