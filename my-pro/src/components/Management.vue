<template>
    <div class="manager-box">
        <div class="box">
            <!-- 头部 -->
            <div class="header">
                <h1>iQiY影片管理平台！</h1>

            </div>
            <div class="center-contain">
                <div class="left">
                    <ul>
                        <li><a class="manu" href="#">功能菜单</a></li>
                        <li>
                            <a class="manu" href="#"> 首页</a>
                        </li>
                        <li>
                            <router-link class="item" to="/Management/Manager"><span>&gt;</span> 用户管理</router-link>
                        </li>
                        <li>
                            <router-link class="item" to="/Management/movies"><span>&gt;</span> 影片管理</router-link>
                        </li>
                        <li>
                            <router-link class="item" to="/Management/statistical"><span>&gt;</span> </router-link>
                        </li>

                    </ul>
                </div>
                <div class="right">
                    <router-view></router-view>
                </div>
            </div>
            <!-- 左侧功能菜单 -->

        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }

    .center-contain {
        display: flex;
    }

    h1 {
        margin-top: 10px;
        color: white;
    }

    .header {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        background-color: #686899;
        height: 80px;
    }

    ul,
    li {
        list-style: none;
        margin: 0px;
        padding: 0px;
    }

    a {
        text-decoration: none;
    }

    .left {
        background-color: #686899;
        width: 200px;
        height: 100%;
        min-height: 800px;
    }

    ul li {
        height: 50px;
        /* align-items: center; */
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
        background: #00cc99;
    }

    .right {
        padding: 20px;
        width: 100%;
        height: 100%;
    }

    .top {
        height: 60px;
        float: left;
    }
</style>