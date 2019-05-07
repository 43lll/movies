<template>
    <div class="tab">
      <h1>管理员登录</h1>
      <div id="tab-cnts">
        
          <div class="user">
            <img src="http://127.0.0.1:3000/img/用户/登录/tab1.jpg">
            <input type="text" id="un" placeholder="请输入管理员帐号" v-model="uname">
          </div>
          <div class="pwd">
            <img src="http://127.0.0.1:3000/img/用户/登录/tab2.jpg">
            <input type="text" id="pwd" placeholder="请输入密码" v-model="upwd">
          </div>
          <div class="login">
            <button id="myDiv" @click.prevent="login">登录</button>
          </div>
      
      </div>
    </div>
</template>
<script>
  import qs from 'qs'
export default {
   data() {
    return { uname: "", upwd: "" };
  },
  methods: {
    login(){
      console.log(this.uname, this.upwd)
      // adminLogin
      // this.$router.push('/Management/Manager')
      var data = qs.stringify({
        uname:this.uname,
        upwd: this.upwd
      })
      var url = "http://localhost:3000/adminLogin";
      this.axios.post(url, data).then(res => {
        if (res.data.code == 200) {
          this.$router.push('/Management/Manager')
        } else {
          alert('登录失败')
        }
      })

    }
  },
}
</script>
<style >
  .tab {
  width: 300px;
  height: 300px;
  padding: 0px 25px;
  border: 2px solid #ccc;
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
  line-height: 40px;
  color: white;
  font-size: 16px;
  margin-top: 30px;
  text-align: center;
  background-color: #00be06;
}

</style>