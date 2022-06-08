<template>
  <div>
<div class="png">
  <img src="../../assets/upload/bgi4.png" alt="">
</div>
<div class="pics">
  <div class="w">
  <div class="Four">
<Fouricon></Fouricon>
  </div>
</div>
</div>

      <phone></phone>
      <div class="section">

        <div class="w">
         <h1>常见特殊资质</h1>
         <h4>我们可以办的资质</h4>
         <ul>
          <li>
            <i class="el-icon-star-on"></i>
            食品经营许可证
          </li>
          <li>
            <i class="el-icon-star-on"></i>
            出版物经营许可证
          </li>
          <li>
            <i class="el-icon-star-on"></i>
            道路运输许可证
          </li>
          <li>
            <i class="el-icon-star-on"></i>
            第二类增值电信业务
          </li>
          <li>
            <i class="el-icon-star-on"></i>
            二类医疗器械
          </li>
          <li>
            <i class="el-icon-star-on"></i>
            三类医疗器械
          </li>
          <li>
            <i class="el-icon-star-on"></i>
            劳务派遣经营许可证
          </li>
          <li>
            <i class="el-icon-star-on"></i>
            公共卫生许可证
          </li>
          <li>
            <i class="el-icon-star-on"></i>
            烟草专卖零售许可证
          </li>
          <li>
            <i class="el-icon-star-on"></i>
            进出口权证
          </li>
         </ul>
        </div>

      </div>

  </div>
</template>

<script>
import Fouricon from '@/components/fouricon/Fouricon.vue'
import phone from '@/components/myphone/MyPhone.vue'
export default {
  name: 'myFourth',
  components: {
    Fouricon,

    phone
  }
}
</script>

<style scoped>
.w {
  width: 1200px;
  margin: 0 auto;
}
.w .Four {
  height: 250px;
}
.png {
  width: 100%;
  height: 400px;
}
.png img {
  width: 100%;
  height: 100%;
}
.pics,.section {
  background-color: #fff;
}
.section {
  height: 400px;
  padding: 20px 50px;
  overflow: hidden;
}
.section h4 {
  margin-top: 20px;
  color: rgb(250, 107, 107);
}
.section ul {
  padding: 40px 0;
  list-style: none;
}
.section li {
  width: 600px;
  height: 50px;
  float: left;
  background-color: #fff;
}
</style>
