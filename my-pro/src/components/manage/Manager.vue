<template>
  <div>
    <ul class="menus">
      <li class="menu-item">编号</li>
      <li class="menu-item">用户名</li>
      <li class="menu-item">密码</li>
      <li class="menu-item">编辑</li>  
    </ul>
       <table>
         <tr class="men" v-for="(item, index) in user" :key="index">
           <td class="c-item">{{item.uid}}</td>
           <td class="c-item">{{item.uname}}</td>
           <td class="c-item">{{item.upwd}}</td>
           <td class="c-item"><button>编辑</button></td>
         </tr>
       </table>

    
  </div>
</template>
<script>
export default {
  data(){
    return{
      user:[]
    }
  },
  created(){
    this. getUser();
  },
  methods:{
    // 获取用户的信息
    getUser(){
      var url="http://localhost:3000/user";
      this.axios.get(url).then(res=>{
         console.log(res);
        this.user=res.data.data;
        console.log(this.user);
      })
  }
}
}
</script>
<style scoped>
*{margin: 0;
padding: 0;}
.right{
  /* position: fixed;
  left: 200px;
  top:70px;
  bottom: 0; */
  width: 100%;
} 
.menu-item{
  line-height: 30px;
  font-size: 17px;
  float: left;
}
.menu-item:not(:first-child) {
   padding-left: 100px; 
}
tr>td:nth-child(1){
  padding-left: 10px; 
}
tr>td:nth-child(2){
padding-left: 70px;  
  width: 110px;
  height: 50px;
}
tr>td:nth-child(3){
  padding-left: 70px; 
}
tr>td:nth-child(4){
 padding-left: 80px;  
width: 50px;
height: 50px;
}

ul,li{
    list-style: none;
    margin: 0px;
    padding: 0px;
    height: 20px;
}


</style>
