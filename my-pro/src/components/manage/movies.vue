<template>
  <div class="right">
    <div class="sear">
      <input type="search" v-model="sea"><button class="search" @click="search()">搜索影片</button>
      <span>
        <button class="add" @click="add()">添加</button>
      </span>
    </div>
    <div>


      <div class="add1" v-if="message">
        <table class="xg">
          <tr>
            <td>片名</td>
            <td> <input type="text" v-model="title" name="" id=""></td>
          </tr>
          <tr>
            <td>图片</td>
            <td> <input type="text" v-model="pic" name="" id=""></td>
          </tr>
          <tr>
            <td>类别</td>
            <td> <input type="text" v-model="category" name="" id=""></td>
          </tr>
          <tr>
            <td>标签</td>
            <td> <input type="text" v-model="label" name="" id=""></td>
          </tr>
          <tr>
            <td>导演</td>
            <td> <input type="text" v-model="director" name="" id=""></td>
          </tr>
          <tr>
            <td>主演</td>
            <td> <input type="text" v-model="performer" name="" id=""></td>
          </tr>
          <tr>
            <td>评分</td>
            <td> <input type="text" v-model="score" name="" id=""></td>
          </tr>
          <tr>
            <td>上映时间</td>
            <td> <input type="text" v-model="screen" name="" id=""></td>
          </tr>
          <tr>
            <td>影片时长</td>
            <td> <input type="text" v-model="duration" name="" id=""></td>
          </tr>
          <tr>
            <td>影片简介</td>
            <td> <input type="text" v-model="details" name="" id=""></td>
          </tr>
        </table>
        <button @click="message=false">取消</button>
        <button @click="addConfrim">确定</button>

      </div>


    </div>
    <ul class="menus">
      <li class="menu-item">编号</li>
      <li class="menu-item">片名</li>
      <li class="menu-item">图片</li>
      <li class="menu-item">类别</li>
      <li class="menu-item">导演</li>
      <li class="menu-item">主演</li>
      <li class="menu-item">评分</li>
      <li class="menu-item">上映时间</li>
      <li class="menu-item">影片时长</li>
      <li class="menu-item">操作</li>
    </ul>
    <table>
      <tr v-for="(item, index) in manager" :key="index">
        <td>{{item.pid}}</td>
        <td>{{item.title}}</td>
        <td>
          <img :src="'http://127.0.0.1:3000/'+item.pic">
        </td>
        <td>{{item.category}}</td>
        <td>{{item.director}}</td>
        <td>{{item.performer}}</td>
        <td>{{item.score}}</td>
        <td>{{item.screen}}</td>
        <td>{{item.duration}}</td>
        <td>
          <button @click="update(item.pid)">修改</button>
          <!--  <button @click="del(item.pid)">删除</button> -->
        </td>
      </tr>
    </table>
    <button type="primary" size="large" @click="prevPage()">上一页</button>
    <span>第{{totalPage+1}}页/共{{Math.ceil(count/5)}}页</span>
    <button type="primary" size="large" @click="nextPage()">下一页</button>

    <div>
      <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

      <el-dialog title="影片信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="片名" :label-width="formLabelWidth">
            <el-input v-model="form.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="类别" :label-width="formLabelWidth">
            <el-input v-model="form.category" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="标签" :label-width="formLabelWidth">
            <el-input v-model="form.label" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="导演" :label-width="formLabelWidth">
            <el-input v-model="form.director" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="主演" :label-width="formLabelWidth">
            <el-input v-model="form.performer" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="评分" :label-width="formLabelWidth">
            <el-input v-model="form.score" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="上映时间" :label-width="formLabelWidth">
            <el-input v-model="form.screen" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="时长" :label-width="formLabelWidth">
            <el-input v-model="form.duration" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateConfrim">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        message: false,
        list: [],
        totalPage: 0,
        count: '',
        /*  movlist,//所有数据
         totalPage:1,//总共页数，默认为1
         currentPage:1,//当前页数，默认为1
         pageSize: 6,//每页显示数量
         currentPageData:[],//当前页显示内容 */
        manager: [],
        pid: "",
        title: "",
        subheading: "",
        pic: "",
        category: "",
        label: "",
        director: "",
        performer: "",
        score: "",
        screen: "",
        duration: "",
        details: "",
        sea: "",
        dialogFormVisible: false,
        form: {
          title: "",
          category: "",
          label: "",
          director: "",
          performer: "",
          score: "",
          screen: "",
          duration: ""
        },
        formLabelWidth: "120px",
        currentPid: ""
      };
    },
    created() {
      this.getManager();
      this.getCount();
    },

    methods: {
      // 添加影片信息
      addConfrim() {
        var url = "http://localhost:3000/add";
        this.axios.get(url, {
          params: {
            title: this.title,
            subheading: this.subheading,
            pic: this.pic,
            category: this.category,
            label: this.label,
            director: this.director,
            performer: this.performer,
            score: this.score,
            screen: this.screen,
            duration: this.duration,
            details: this.details,
          }
        }).then(res => {
          console.log(res.data)
        })
        this.message = false;
      },

      add() {
        this.message = true;
      },
      // 修改影片信息
      update(pid) {
        this.dialogFormVisible = true;
        var url = "http://localhost:3000/getById";
        this.axios
          .get(url, { params: { pid: pid } }).then(res => {
            // console.log(res.data);
            if (res.data.code == 1) {
              var result = res.data.data[0];
              this.form.title = result.title;
              this.form.category = result.category;
              this.form.label = result.label;
              this.form.director = result.director;
              this.form.performer = result.performer;
              this.form.score = result.score;
              this.form.screen = result.screen;
              this.form.duration = result.duration;
              this.currentPid = result.pid;
            }
          });
      },
      //确认修改
      updateConfrim() {
        this.dialogFormVisible = false;
        console.log(this.currentPid)
      },
      //删除
      //获取所有影片信息
      getManager() {
        var url = "http://localhost:3000/moveList";
        this.axios.get(url, {
          params: {
            count: this.totalPage
          }
        }).then(res => {
          console.log(res);
          this.manager = res.data.data;
          console.log(this.manager);
        });
      },
      //搜索影片
      search() {
        var url = "http://localhost:3000/search?search=" + this.sea;
        this.axios.get(url).then(res => {
          console.log(res.data);
          this.manager = res.data;
        });
      },
      // 下一页
      nextPage() {
        var url = "http://localhost:3000/moveList";
        this.axios.get(url, {
          params: {
            count: this.totalPage + 1
          }
        }).then(res => {
          console.log(res);
          this.manager = res.data.data;
          this.totalPage = this.totalPage + 1;
          console.log(this.manager);
        });
      },
      // 上一页
      prevPage() {
        if (this.totalPage > 0) {
          var url = "http://localhost:3000/moveList";
          this.axios.get(url, {
            params: {
              count: this.totalPage - 1
            }
          }).then(res => {
            this.manager = res.data.data;
            this.totalPage = this.totalPage - 1;
            console.log(this.manager);
          });
        } else {
          alert('没有上一页')
        }
      },
      // 获取总页数
      getCount() {
        // getCount
        var url = "http://localhost:3000/getCount";
        this.axios.get(url).then(res => {
          console.log(res.data);
          if (res.data.code == 200) {
            this.count = res.data.data[0].count
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

  .right {
    position: relative;
  }

  .add1 {
    width: 1100px;
    height: 700px;
    position: absolute;
    background-color: white;
  }

  input {
    width: 330px;
    height: 30px;
  }

  span {
    padding-left: 10px;
  }

  .xg {
    margin: 0px auto;
  }

  .add {
    float: right;
    height: 30px;
    width: 60px;
    background-color: #686899;
    color: white;
    border: 1px solid #686899;

  }

  .sear {
    position: relative;
    text-align: right;
    margin-bottom: 20px;

  }

  .search {
    height: 30px;
    background-color: #686899;
    color: white;
    border: 1px solid #686899;
  }

  tr>td:nth-child(1) {
    padding-left: 5px;
  }

  tr>td:nth-child(2) {
    padding-left: 30px;
    width: 110px;
    height: 50px;
  }

  tr>td:nth-child(3) {
    padding-left: 30px;
  }

  tr>td:nth-child(4) {
    padding-left: 40px;
    width: 50px;
    height: 50px;
  }

  tr>td:nth-child(5) {
    padding-left: 55px;
    width: 50px;
  }

  tr>td:nth-child(6) {
    padding-left: 25px;
    width: 100px;
    width: 50px;
  }

  tr>td:nth-child(7) {
    padding-left: 40px;
  }

  tr>td:nth-child(8) {
    padding-left: 50px;
    width: 110px;
  }

  tr>td:nth-child(9) {
    padding-left: 45px;
    width: 60px;
  }

  tr>td:nth-child(10) {
    /* padding-left: 20px; */
    width: 200px;
    height: 100px;
  }

  img {
    width: 60px;
    height: 80px;
  }

  ul,
  li {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  .menu {
    top: 70px;
  }

  .menu-item {
    line-height: 30px;
    font-size: 17px;
    float: left;
  }

  .menu-item:not(:first-child) {
    padding-left: 70px;
  }
</style>