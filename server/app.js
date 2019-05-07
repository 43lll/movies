//1.加载模块express pool.js
const express = require("express");
const pool = require("./pool");
//2.创建服务器端对象
var app = express();
//3.监听端口3000
app.listen(3000);
//4.指定静态目录 public
app.use(express.static("static"));
//5.加载跨域访问模块
const cors = require("cors");
//6.配置跨域访问模块 
//脚手架8080允许
//origin  允许跨域访问域名列表
//credentials 跨域访问保存session id
app.use(cors({
  origin: ["http://127.0.0.1:8080",
    "http://localhost:8080"
  ],
  credentials: true
}));
//6.1下载express-session并且配置
//npm install express-session
const session = require("express-session");
app.use(session({
  secret: "128位随机字符", //安全字符
  resave: false, //每次请求是否都更新数据
  saveUninitialized: true, //初始化时保存数据
  cookie: {
    maxAge: 1000 * 60 * 60 * 8
  }
}));

//7.加载第三方模块body-parser
//body-parser针对post请求处理请求参数
//配置成功 req.body
const bodyParser = require("body-parser");
//8.配置对特殊json是否自动转换  不转换
app.use(bodyParser.urlencoded({
  extended: false
}))


//功能一获取主页影片数据
app.get('/index', (req, res) => {
  //创建sql语句
  var sql = 'SELECT * FROM mov_index';
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send({
      code: 1,
      data: result
    });
  })
})

//功能二：大图片轮播
app.get("/slider", (req, res) => {
  //1:将轮播图中所需图片 复制public/img
  //2:查询
  var list = [{
      img_url: "http://127.0.0.1:3000/img/movie/diqiu.jpg",
      url: '//www.iqiyi.com/v_19rr8le7n0.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/yun.jpg",
      url: '//www.iqiyi.com/v_19rr7p22e0.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/hai.jpg",
      url: '//www.iqiyi.com/v_19rr7pgg30.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/lai.jpg",
      url: '//www.iqiyi.com/v_19rr3xf05w.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/huang.jpg",
      url: '//www.iqiyi.com/v_19rqxb9kq4.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/da.jpg",
      url: '//www.iqiyi.com/v_19rr6gf1rs.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/mo.jpg",
      url: '//www.iqiyi.com/v_19rr1x6nz4.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/bai.jpg",
      url: '//www.iqiyi.com/v_19rr575vxk.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/xiao.jpg",
      url: '//www.iqiyi.com/v_19rrc7z66c.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/tang.jpg",
      url: '//www.iqiyi.com/v_19rqxb34a0.html'
    },
  ];
  res.send(list);
});

//功能三：小轮播图
app.get("/carrousel", (req, res) => {
  var list = [{
      img_url: "http://127.0.0.1:3000/img/movie/w.jpg",
      url: '//www.iqiyi.com/v_19rrdgdwpg.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/a.jpg",
      url: '//www.iqiyi.com/v_19rrhxxnck.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/2.jpg",
      url: '//www.iqiyi.com/v_19rrdgdwpg.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/3.jpg",
      url: '//www.iqiyi.com/v_19rrk1k0is.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/4.jpg",
      url: '//www.iqiyi.com/v_19rr88x0kk.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/5.jpg",
      url: '//www.iqiyi.com/v_19rr7p9zlc.html'
    },

    {
      img_url: "http://127.0.0.1:3000/img/movie/6.jpg",
      url: '//www.iqiyi.com/v_19rrho2cmo.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/7.jpg",
      url: '//www.iqiyi.com/v_19rra64i9c.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/8.jpg",
      url: '//www.iqiyi.com/v_19rr7qggi4.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/9.jpg",
      url: '//www.iqiyi.com/v_19rrifgpdf.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/10.jpg",
      url: '//www.iqiyi.com/v_19rrazxld8.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/11.jpg",
      url: '//www.iqiyi.com/v_19rrep58sw.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/12.jpg",
      url: '//www.iqiyi.com/v_19rrno0lss.html'
    },

    {
      img_url: "http://127.0.0.1:3000/img/movie/13.jpg",
      url: '//www.iqiyi.com/v_19rrntpmhg.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/14.jpg",
      url: '//www.iqiyi.com/v_19rr7pj8ys.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/15.jpg",
      url: '//www.iqiyi.com/v_19rr8cycvc.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/16.jpg",
      url: '//www.iqiyi.com/v_19rrlsddbw.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/17.jpg",
      url: '//www.iqiyi.com/v_19rrbojj6o.html'
    },
    {
      img_url: "http://127.0.0.1:3000/img/movie/18.jpg",
      url: '//www.iqiyi.com/v_19rr9286cc.html'
    },
  ];
  res.send(list);
})

//功能：分页获取片库影片列表分页显示
// app.get("/moveList", (req, res) => {
//   var sql = "select count(*) as movlist from mov_movies";
//   var tpage = req.query['tpage'];
//   console.log(tpage);
//   var rs;
//   pool.query(sql, [tpage], (err, result) => {
//     if (err)
//       throw err;
//     var lists = result[0].movlist;
//     var pageSize = 5; //一页5条数据
//     var pages = Math.ceil(lists / pageSize); //总共8页
//     console.log(typeof tpage);
//     if (tpage <= 0) {
//       var sql = `select * from mov_movies limit 0,${pageSize}`;
//       pool.query(sql, (err, result) => {
//         if (err)
//           throw err;
//         console.log(result);
//         rs = result;
//       })
//     } else {
//       console.log(123);
//       var sql = "select * from mov_movies limit " + pageSize * (tpage - 1) + "," + pageSize;
//       pool.query(sql, (err, result) => {
//         if (err)
//           throw err;
//         console.log(result);
//       })

//     }
//     res.send(rs);
//   })
// })

//功能：分页获取片库影片列表分页显示
app.get("/moveList", (req, res) => {
  var obj = req.query;
  var sql = 'select * from mov_movies limit ?,5';
  pool.query(sql, [parseInt(obj.count)*5], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length) {
      res.send({code:200, data:result});
    } else {
      res.send({code:400, data:result})
    }
  })

})

//功能三：注册
app.get('/reg', (req, res) => {
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  var sql = "SELECT uname FROM movies_user WHERE uname=?";
  pool.query(sql, [uname], (err, result) => {
    if (err) throw err;
    if (result.length >= 1) {
      res.send({
        code: -1,
        msg: '用户名已存在'
      });
    } else {
      sql = "INSERT INTO movies_user (uname,upwd) VALUES(?,?)";
      pool.query(sql, [uname, upwd], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) {
          res.send({
            code: 1,
            msg: "添加成功"
          });
        } else {
          res.send({
            code: 2,
            msg: "添加失败"
          });
        }
      })

    }
  })
})

//功能四：登录
app.get("/login", (req, res) => {
  //参数
  var uname = req.query.uname;
  var upwd = req.query.upwd;
  //sql
  var sql = "SELECT uid FROM movies_user WHERE uname=? AND upwd=?";
  pool.query(sql, [uname, upwd], (err, result) => {
    if (err) throw err;
    if (result.length == 0) {
      res.send({
        code: -1,
        msg: "用户名或密码有误"
      });
    } else {
      //将用户登录凭证保存在服务器端 session对象中
      var uname = result[0].uname; //获取当前用户uname
      console.log(result)
      req.session.uid = uname; //保存session
      console.log(req.session.uid)
      res.send({
        code: 1,
        msg: "登录成功"
      });
    }
  });
})


//功能五：片库管理
app.get('/manager', (req, res) => {
  //创建sql语句
  var sql = 'SELECT * FROM mov_movies';
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send({
      code: 1,
      data: result
    });
  })
});

//功能六：修改影片信息
//修改：先获取信息
app.get('/getById', (req, res) => {
  var obj = req.query;
  var sql = 'SELECT * FROM mov_movies WHERE pid=?';
  pool.query(sql, [obj.pid], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length) {
      res.send({
        code: 1,
        data: result
      })
    } else {
      res.send({
        code: -1,
        data: result
      })
    }
  })
})

app.get('/edit', (req, res) => {
  //获取参数
  var pid = req.query.pid;
  var title = req.query.title;
  var subheading = req.query.subheading;
  var score = req.query.score;
  var category = req.query.category;
  var label = req.query.label;
  var screen = req.query.screen;
  var duration = req.query.duration;
  var director = req.query.director;
  var performer = req.query.performer;
  var details = req.query.details;
  var sql = "update mov_movies SET title=?,label=?,pic=?,subheading=?,category=?,director=?, performer=?,score=?,screen=?,duration=?,details=? WHERE pid=?";
  pool.query(sql, [title, pic, label, subheading, category, director, performer, score, screen, duration, details, pid], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({
        code: 1,
        msg: "更新成功"
      });;
    } else {
      res.send({
        code: 2,
        msg: "更新失败"
      });;
    }

  })

})

//功能七：添加影片信息
app.get('/add', (req, res) => {
  var title = req.query.title;
  var subheading = req.query.subheading;
  var score = req.query.score;
  var category = req.query.category;
  var label = req.query.label;
  var screen = req.query.screen;
  var duration = req.query.duration;
  var director = req.query.director;
  var performer = req.query.performer;
  var details = req.query.details;
  var pic = req.query.pic;

  var sql = "INSERT INTO mov_movies (title,subheading,score,category,label,screen,duration,director,performer,details,pic) VALUES(?,?,?,?,?,?,?,?,?,?,?)";
  pool.query(sql, [title, subheading, score, category, label, screen, duration, director, performer, details, pic], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send({
        code: 1,
        msg: "添加成功"
      });
    } else {
      res.send({
        code: 2,
        msg: "添加失败"
      });
    }
  })
})

/* //功能八：删除影片信息
app.get('/del',(req,res)=>{
  //获取参数
  var pid=req.query.pid;
  //sql
  var sql="DELETE FROM mov_movies WHERE id=?";
  pool.query(sql,[pid],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"});
    }else{
      res.send({code:1,msg:"删除失败"})

    }
  });
}); */


//功能八：管理端搜索影片
app.get('/search', (req, res) => {
  var search = req.query.search;
  console.log(search);
  //创建sql语句
  // select * from mov_movies where title like '%猫%'
  var sql = "SELECT * FROM mov_movies where title like '%" + search + "%'";
  pool.query(sql, [search], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send(result);
  })
});

//功能九：管理用户列表
app.get('/user', (req, res) => {
  //创建sql语句
  var sql = 'SELECT * FROM movies_user';
  pool.query(sql, (err, result) => {
    if (err) throw err;
    res.send({
      code: 1,
      data: result
    });
  })
})

//分类页搜索
app.get('/sea1', (req, res) => {
  var search = req.query.search;
  /* console.log(search); */
  //创建sql语句
  // select * from mov_movies where title like '%猫%'
  var sql = "SELECT * FROM mov_movies where category like '%" + search + "%'";
  pool.query(sql, [search], (err, result) => {
    if (err) throw err;
    /* console.log(result); */
    res.send(result);
  })
});


//详情加评论
//根据pid取出相应影片的详情
app.get('/getDetail', (req, res) => {
  var obj = req.query;
  var sql = 'SELECT * FROM mov_movies WHERE pid=?';
  pool.query(sql, [obj.pid], (err, result) => {
    if (err) {
      throw err;
    }
    res.send(result)
  })
})
//添加评论
app.post('/saveComment', (req, res) => {
  var obj = req.body;
  var time = new Date().getTime();
  var sql = 'INSERT INTO mov_comment VALUES (null,(SELECT uid FROM movies_user WHERE uname=?), ?, ?, ?, ?)';
  pool.query(sql, [obj.uname, obj.pid, obj.comment, obj.star, time], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows) {
      res.send({
        code: 200,
        msg: '插入成功'
      })
    } else {
      res.send({
        code: 400,
        msg: '插入失败'
      })
    }
  })
})
// 获取评论
app.get('/getComments', (req, res) => {
  var obj = req.query;
  var sql = 'SELECT movies_user.uname, mov_comment.comment, mov_comment.star, mov_comment.time FROM mov_comment JOIN movies_user ON mov_comment.uid=movies_user.uid WHERE pid=? ORDER BY time DESC';
  pool.query(sql, [obj.pid], (err, result) => {
    if (err) {
      throw err;
    }

    res.send({
      code: 200,
      data: result
    });

  })
})

// 收藏影片
app.post('/collect', (req, res) => {
  var obj = req.body;
  var sql = 'INSERT INTO mov_collect VALUES (null,(SELECT uid FROM movies_user WHERE uname=?), ?, ?,?,?)';

  pool.query(sql, [obj.uname, obj.pid, obj.img,obj.title,obj.url], (err, result) => {
  
    if (err) {
      throw err;
    }
    if (result.affectedRows) {
      res.send({ 
        code: 200,
        msg: '插入成功'
      })
    } else {
      res.send({
        code: 400,
        msg: '插入失败'
      })
    }
  })
})

// 获取收藏过的影片
app.get('/getCollects', (req, res) => {
  var obj = req.query;
  var sql = 'SELECT  mov_collect.img, mov_collect.title, FROM mov_collect JOIN movies_user ON mov_collect.uid=movies_user.uid WHERE pid=?';
  pool.query(sql, [obj.pid], (err, result) => {
    if (err) {
      throw err;
    }

    res.send({
      code: 200,
      data: result
    });

  })
}) 
// 盘算是否收藏过
app.get('/isCollects',(req, res) => {
  var sql = 'select * from mov_collect';
  pool.query(sql, (err, result) => {
    if(err){
      throw err;
    }
    res.send({code:200, data:result})
  })
})
// 删除收藏影片
app.post('/uncollect', (req, res) => {
  var obj = req.body;
  var sql = 'delete from mov_collect where uid=(SELECT uid FROM movies_user WHERE uname=?) and pid=?'
  pool.query(sql, [obj.uname, obj.pid], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows) {
      res.send({code:200, data:result});
    } else {
      res.send({code:400, data:[]})
    }
  })
})
// 删除单个收藏影片
app.get('/singleUncollect',(req, res) => {
  var obj = req.query;
  var sql = 'delete from mov_collect where id=?'
  pool.query(sql, [obj.id], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows) {
      res.send({code:200, data:result});
    } else {
      res.send({code:400, data:[]})
    }
  })
})
// 获取所有的收藏影片
app.get('/getAllCollects', (req, res) => {
  var obj = req.query;
  var sql = 'select * from mov_collect where uid=(SELECT uid FROM movies_user WHERE uname=?)';
  pool.query(sql,[obj.uname], (err, result) => {
    if (err) {
      throw err;
    }
    res.send({code:200, data: result})
  })
})
// 添加历史记录
app.post('/addHistory', (req, res) => {
  var obj = req.body;
  var sql = 'INSERT INTO mov_history VALUES (null,(SELECT uid FROM movies_user WHERE uname=?), ?, ?,?,?)';

  pool.query(sql, [obj.uname, obj.pid, obj.title, obj.img,obj.url], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows) {
      res.send({ 
        code: 200,
        msg: '插入成功'
      })
    } else {
      res.send({
        code: 400,
        msg: '插入失败'
      })
    }
  })
})
// 获取所有的历史记录
app.get('/getAllHistory', (req, res) => {
  var obj = req.query;
  var sql = 'select * from mov_history where uid=(SELECT uid FROM movies_user WHERE uname=?)';
  pool.query(sql,[obj.uname], (err, result) => {
    if (err) {
      throw err;
    }
    res.send({code:200, data: result})
  })
})
// 删除单个用户的历史记录
app.get('/singleUnHistory',(req, res) => {
  var obj = req.query;
  var sql = 'delete from mov_history where id=?'
  pool.query(sql, [obj.id], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows) {
      res.send({code:200, data:result});
    } else {
      res.send({code:400, data:[]})
    }
  })
})
// 赞
app.get('/addZan',(req, res) => {
  var obj = req.query;
  var sql = 'update mov_index set zan = zan+1 , status=1 where mid = ?';
  pool.query(sql, obj.id, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows) {
      res.send({code:200})
    } else {
      res.send({code:400})
    }
  })
})
// 踩
app.get('/addCai',(req, res) => {
  var obj = req.query;
  var sql = 'update mov_index set cai = cai+1 , status=2 where mid = ?';
  pool.query(sql, obj.id, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows) {
      res.send({code:200})
    } else {
      res.send({code:400})
    }
  })
})
// 取消赞
app.get('/unZan',(req, res) => {
  var obj = req.query;
  var sql = 'update mov_index set zan = zan-1 , status=0 where mid = ?';
  pool.query(sql, obj.id, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows) {
      res.send({code:200})
    } else {
      res.send({code:400})
    }
  })
})
// 取消踩
app.get('/unCai',(req, res) => {
  var obj = req.query;
  var sql = 'update mov_index set cai = cai-1 , status=0 where mid = ?';
  pool.query(sql, obj.id, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows) {
      res.send({code:200})
    } else {
      res.send({code:400})
    }
  })
})
//获取用户信息
app.get('/getUser',(req, res) => {
  var obj = req.query;
  var sql = 'select * from movies_user where uname = ?';
  pool.query(sql, [obj.uname], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length) {
      res.send({code:200, data:result})
    } else {
      res.send({code:400, data:result})
    }
  })
})
//更改用户密码
app.post('/changeUser', (req, res) => {
  var obj = req.body;
  var sql = 'update movies_user set upwd=? where uname=?';
  pool.query(sql, [obj.upwd, obj.uname], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.affectedRows) {
      res.send({code:200});
    } else {
      res.send({code:400});
    }
  })
})
//管理员登陆
app.post('/adminLogin', (req, res) => {
  var obj = req.body;
  var sql = 'select * from movies_login where uname=? and upwd=?';
  pool.query(sql, [obj.uname, obj.upwd], (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length) {
      res.send({code:200, data:result});
    } else {
      res.send({code:400, data:result});
    }
  })
})
//获取影片数量
app.get('/getCount', (req, res) => {
  var sql = 'select count(*) as count from mov_movies';
  pool.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    if (result.length) {
      res.send({code:200, data:result});
    } else {
      res.send({code:400, data:result})
    }
  })
})

