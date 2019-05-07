<template>
    <div>
        <p>用户名</p>
        <p>{{show.uname}}</p>
        <p>密码</p>
        <p>{{show.upwd}}</p>
        <el-button type="primary" @click="isToggle=true">修改密码</el-button>
        <el-dialog title="提示" :visible.sync="isToggle" width="30%" :before-close="handleClose">
            <el-form label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="user.uname" readonly></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="user.upwd"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="isToggle = false">取 消</el-button>
                <el-button type="primary" @click="changePwd">确 定</el-button>
            </span>
        </el-dialog>

    </div>
</template>
<script>
    import qs from 'qs'
    export default {
        data() {
            return {
                uname: sessionStorage.getItem("uname"),
                user: {},
                show:{},
                isToggle: false,
            }
        },
        mounted() {
            this.renderUser(this.uname);
        },
        methods: {
            // 获取用户信息
            renderUser(uname) {
                var url = "http://localhost:3000/getUser";
                this.axios.get(url, {
                    params: {
                        uname: uname
                    }
                }).then(res => {
                    if (res.data.code == 200) {
                        this.user = res.data.data[0];
                        this.show = new Object();
                        this.show.uname = this.user.uname;
                        this.show.upwd = this.user.upwd;
                    }
                })
            },
            // 点击对话框的小叉叉
            handleClose(done) {
                this.isToggle = false;
            },
            // 更改密码
            changePwd(){
                this.isToggle = false;
                var data = qs.stringify({
                    uname:this.user.uname,
                    upwd:this.user.upwd
                })
                var url = "http://localhost:3000/changeUser";
                this.axios.post(url, data).then(res => {
                    console.log(res.data)
                    if (res.data.code == 200) {
                        console.log('修改成功');
                        this.renderUser(this.uname);
                    }
                })
            }
        }
    }
</script>