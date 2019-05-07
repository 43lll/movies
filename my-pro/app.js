//1.加载模块express pool.js
const express =require("express");
const pool=require("./pool");
//2.创建服务器端对象
var app=express();
//3.监听端口3000
app.listen(3000);
//4.指定静态目录 public
app.use(express.static("public"));
//5.加载跨域访问模块
const cors=require("cors");
//6.配置跨域访问模块 
//脚手架8080允许
//origin  允许跨域访问域名列表
//credentials 跨域访问保存session id
app.use(cors({
  origin:["http://127.0.0.1:8080",
"http://localhost:8080"],
credentials:true
}));
//6.1下载express-session并且配置
//npm install express-session
const session=require("express-session");
app.use(session({
  secret:"128位随机字符", //安全字符
  resave:false,           //每次请求是否都更新数据
  saveUninitialized:true, //初始化时保存数据
  cookie:{
    maxAge:1000*60*60*8
  }
}));


//7.加载第三方模块body-parser
//body-parser针对post请求处理请求参数
//配置成功 req.body
const bodyParser=require("body-parser");
//8.配置对特殊json是否自动转换  不转换
app.use(bodyParser.urlencoded({extended:false}))


//功能一：登录
app.get("/login",(req,res)=>{
  //参数
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  //sql
  var sql ="SELECT id FROM movies_login WHERE uname=? AND upwd=md5(?)";
  
})