<template>
  <div id="Home">
<!-- 轮播图 -->
<div>
    <el-carousel height="600px">
      <el-carousel-item>
        <img src="../../assets/upload/banner2.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/upload/banner4.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/upload/banner5.jpg" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="pics">
     <div class="w">
      <Fouricon></Fouricon>
    </div>
   </div>
   <!-- 内容部分 -->
  <div class="w">
     <div class="container">
      <Title>
        一站式企业服务
      </Title>
      <ul>
        <router-link to="/first">
          <li class="animate__animated animate__fadeInLeft">
          <i class="el-icon-user-solid" style="font-size: 50px;"></i>
          <h2>工商注册</h2>
          <span style="color:#999">了解详情 ></span>
        </li>
        </router-link>
        <router-link to="/second">
          <li class="animate__animated animate__fadeInLeft">
          <i class="el-icon-data-line" style="font-size: 50px;"></i>
          <h2>财税服务</h2>
          <span style="color:#999">了解详情 ></span>
        </li>
        </router-link>
        <router-link to="/third">
          <li class="animate__animated animate__fadeInRight">
          <i class="el-icon-suitcase" style="font-size: 50px;"></i>
          <h2>财务外包</h2>
          <span style="color:#999">了解详情 ></span>
        </li>
        </router-link>
        <router-link to="/fourth">
          <li class="animate__animated animate__fadeInRight">
          <i class="el-icon-key" style="font-size: 50px;"></i>
          <h2>商标注册</h2>
          <span style="color:#999">了解详情 ></span>
        </li>
        </router-link>
        <router-link to="/five">
          <li class="animate__animated animate__fadeInLeft">
          <i class="el-icon-s-management" style="font-size: 50px;"></i>
          <h2>资质办理</h2>
          <span style="color:#999">了解详情 ></span>
        </li>
        </router-link>
        <router-link to="/six">
          <li class="animate__animated animate__fadeInLeft">
          <i class="el-icon-s-ticket" style="font-size: 50px;"></i>
          <h2>高新认证</h2>
          <span style="color:#999">了解详情 ></span>
        </li>
        </router-link>
        <router-link to="/seven">
          <li class="animate__animated animate__fadeInRight">
          <i class="el-icon-s-check" style="font-size: 50px;"></i>
          <h2>知识产权</h2>
          <span style="color:#999">了解详情 ></span>
        </li>
        </router-link>
        <router-link to="/eight">
          <li class="animate__animated animate__fadeInRight">
          <i class="el-icon-stopwatch" style="font-size: 50px;"></i>
          <h2>税务筹划</h2>
          <span style="color:#999">了解详情 ></span>
        </li>
        </router-link>
      </ul>
     </div>
  </div>
  <div class="w">
    <h1 class="lasttitle">杭州首家实行T+0管理模式工商代理机构，高效——源于不断的模式创新</h1>
  </div>
  <!-- 介绍 -->
  <div class="select">
<div class="w">
  <div class="fl">
<h1>
    WHY CHOOSE US ?
    <h2>为什么选择我们？</h2>
  </h1>
  <p>
    杭州星期六财务管理有限公司是国内领先的企业一站式服务提供商。<br>
    我们的使命让企业经营成本更低，创业更容易！旗下拥有三大事业部：财税事业部，知识产权事业部，技术共享事业部。<br>
    目前在全国拥有30家全资子公司：深圳、苏州、杭州、南京、武汉、上海，郑州，天津，宁波，温州，广州，长沙等，目前分公司还在持续拓展中

  </p>
  </div>
<div class="fr">
<img src="../../assets/upload/pep.png" alt="">
</div>
</div>
  </div>
  </div>
</template>

<script>
import Fouricon from '@/components/fouricon/Fouricon.vue'
import Title from '@/components/container/Title.vue'
export default {
  name: 'myHome',
  data () {
    return {

    }
  },

  components: {
    Fouricon, Title
  }
}
</script>

<style scoped>
.w {
  width: 1200px;
  margin: 0 auto;
}
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  /* 轮播图 */
 .el-carousel__container img{
width: 100%;
height: 100%;
  }
  /* 复用组件 */
  .pics {
    height: 250px;
    background-color: #fff;
  }
  /* 内容块 */
  .container ul{
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin: 40px 0;
  }
  .container ul a{
  text-decoration: none;
  color: #2c3e50;
}
  .container ul li {
    list-style: none;
    width: 294px;
    height: 280px;
    margin-bottom: 6px;
     box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container ul li h2 {
    margin: 20px 0;
  }
  .lasttitle {
    margin: 40px auto;
  }
  .select {
    background-color: #fff;
  }
  .select .w {
    display: flex;
    justify-content: space-between;
    padding: 40px 0;
  }
  .select h1 {
    position: relative;
    display: inline-block;
    color: rgba(33, 33, 33, 0.08);
    font-size: 60px;
    margin-bottom: 100px;
  }
  .select h1 h2 {
    position: absolute;
    top: 35px;
    left: 30px;
    font-size: 60px;
    color: #2c3e50;
  }
  .select p {
    text-align: left;
    line-height: 30px;
    padding: 0 30px;
  }
  .select img {
    width: 400px;
  }
  .fl {
    width: 700px;
  }
</style>
