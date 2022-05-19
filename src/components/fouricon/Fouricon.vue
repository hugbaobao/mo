<template>
  <div id="Fouricon">
<div class="animate__animated animate__bounce">
  <img :src="pic1" alt="" class="pic">
  <h3>T1 +0 服务体系</h3>
  <span>1小时内启动办理流程，高效智能</span>
</div>
<div class="animate__animated animate__bounce">
  <img :src="pic2" alt="" class="pic">
  <h3>覆盖全杭州</h3>
  <span>杭州全面覆盖，构建高效快速服务体系</span>
</div>
<div class="animate__animated animate__bounce">
  <img :src="pic3" alt="" class="pic">
  <h3>金牌会计师团队</h3>
  <span>5年以上从业经验，1V1解决各种财税问题</span>
  <!-- <slot name="pic1">pic1插槽</slot> -->
</div>
<div class="animate__animated animate__bounce">
  <img :src="pic4" alt="" class="pic">
  <h3>CRM客户管理系统</h3>
  <span>保障客户财务信息安全，规避税务风险</span>
  <!-- <slot name="pic1">pic1插槽</slot> -->
</div>

  </div>
</template>

<script>
import pic1 from '@/assets/1.png'
import pic2 from '@/assets/2.png'
import pic3 from '@/assets/3.png'
import pic4 from '@/assets/4.png'
export default {
  name: 'FourIcon',
  data () {
    return {
      pic1,
      pic2,
      pic3,
      pic4
    }
  }
}
</script>

<style scoped>
*{
  box-sizing: border-box;
}
#Fouricon {
  display: flex;
  justify-content: space-around;
}
#Fouricon>div {
  padding-top: 50px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pic {
  margin-bottom: 20px;
}
</style>
