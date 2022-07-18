<template>
  <div id="app">
    <el-backtop :bottom="60"></el-backtop>
    <!-- logo -->
    <header>
      <div class="w">
        <div class="head" @click="tohome">
          <div class="mylogo">
            <a href="">
              <img src="./assets/logom.png" alt="星期六财务" />
            </a>
            <h2>星期六财务</h2>
          </div>
          <!-- 联系我 -->
          <div class="contact animate__animated animate__pulse">
            <el-popover placement="bottom" title="" width="200" trigger="click">
              <img src="./assets/vchat.png" alt="" style="width: 175px" />
              <div class="span">电话：17858757375</div>
              <el-button slot="reference">加我微信</el-button>
            </el-popover>
          </div>
          <!-- <div class="contact animate__animated animate__pulse">
            <a class="button-t" href="javascript:void(0)" onclick="openJesongChatByGroup(28241,58319);return false;">在线客服</a>
          </div> -->
        </div>
      </div>
    </header>
    <!-- nav -->
    <nav>
      <div class="w">
        <el-menu :default-active="activeIndex" active-text-color="#FF8A22" class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/home">首页</el-menu-item>
          <el-submenu index="/first" :show-timeout="200">
            <template slot="title">工商登记</template>
            <el-menu-item index="/first">工商注册</el-menu-item>
            <el-menu-item index="/first2">工商变更</el-menu-item>
            <el-menu-item index="/first3">工商注销</el-menu-item>
          </el-submenu>

          <el-submenu index="/second" :show-timeout="200">
            <template slot="title">财税服务</template>
            <el-menu-item index="/second">代理记账</el-menu-item>
            <el-menu-item index="/second2">税务服务</el-menu-item>
            <el-menu-item index="/second3">审计报告</el-menu-item>
            <el-menu-item index="/second4">税务筹划</el-menu-item>
          </el-submenu>

          <el-submenu index="/third" :show-timeout="200">
            <template slot="title">法律服务</template>
            <el-menu-item index="/third">法律顾问</el-menu-item>
            <el-menu-item index="/third2">合同纠纷</el-menu-item>
          </el-submenu>
          <el-menu-item index="/fourth">许可证办理</el-menu-item>
          <el-menu-item index="/five">高新申请</el-menu-item>
          <el-menu-item index="/six">知识产权</el-menu-item>
          <el-menu-item index="/seven">财务外包</el-menu-item>
          <el-menu-item index="/eight">融资服务</el-menu-item>
          <!-- <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item> -->
        </el-menu>
      </div>
    </nav>
    <router-view></router-view>
    <footer>
      <div class="w">
        <div class="footer">
          <div>
            <i class="el-icon-phone-outline"> 17858757375</i>
          </div>
          <div>
            <i class="el-icon-lock"> 最高安全等级保障</i>
          </div>
          <div>
            <i class="el-icon-trophy-1"> 自有金牌会计师</i>
          </div>
        </div>
      </div>
    </footer>
    <div class="bottom white">
      <div class="w">
        <div id="bottom">
          <table>
            <thead>
              <tr>
                <th>工商服务</th>
                <th>财税服务</th>
                <th>资质办理</th>
                <th>其他业务</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>工商注册</td>
                <td>税务筹划</td>
                <td>高新申请</td>
                <td>知识产权</td>
              </tr>
              <tr>
                <td>工商变更</td>
                <td>财务外包</td>
                <td>许可证办理</td>
              </tr>
              <tr>
                <td>公司注销</td>
                <td>代理记账</td>
              </tr>
            </tbody>
          </table>
          <div class="vchat">
            <h3>星期六财务官方微信</h3>
            <img src="./assets/vchat.png" alt="" />
            <p>公司地址：杭州市拱墅区万科智谷2-510</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 侧边栏 -->
    <fixd></fixd>
  </div>
</template>

<script>
import fixd from '@/components/fix/fix.vue'
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    tohome () {
      this.$router.push('/home')
    }
  },
  components: {
    fixd
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
header {
  width: 100%;
  height: 80px;
  background-color: #fff;
  box-shadow: 0px 1px 0px 0px rgba(0, 3, 8, 0.05);
}
header a img {
  height: 40px;
}
.head {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
}
.head h2 {
  font-weight: 400;
  margin-left: 10px;
}
.mylogo {
  display: flex;
  align-items: center;
}
.mylogo a {
  font-size: 0;
}
.contact {
  margin-right: 0;
}
.el-popover .span {
font-size: 18px;
text-align: center;
}
.w {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.white {
  background-color: #fff;
}
/* nav */
nav {
  height: 60px;
  margin-top: 1px;
  background-color: #fff;
  box-shadow: 0px 1px 0px 0px rgba(0, 3, 8, 0.05);
}
.el-menu.el-menu--horizontal {
  display: flex;
  justify-content: space-around;
}
/* footer */
footer {
  width: 100%;
  height: 180px;
  background: url('./assets/upload/bgi.png') no-repeat center;
  display: flex;
  justify-content: space-around;
}
footer > div {
  color: #fff;
  font-size: 30px;
  font-weight: 300;
}
.footer {
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* 底部 */
.bottom {
  height: 300px;
  padding: 25px 0;
}
#bottom {
  display: flex;
  justify-content: center;
  align-items: center;
}
th {
  padding: 10px 30px;
}
table {
  height: 200px;
  border-right: 1px dashed #ccc;
  margin-right: 30px;
}
.vchat img {
  width: 150px;
  height: 150px;
  margin-top: 10px;
}
.vchat p {
  font-size: 18px;
  font-weight: 700;
}
/* 留言板 */
.dialog {
  position: fixed;
  right: 20px;
  bottom: 150px;
  z-index: 999;
}
/* 在线客服 */
#jesong_panel {
  top: 550px !important;
}
</style>
