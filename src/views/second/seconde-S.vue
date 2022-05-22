<template>
  <div>
<div class="png">
  <img src="../../assets/upload/BGI3.png" alt="">
</div>
<div class="pics">
  <div class="w">
  <div class="Four">
<Fouricon></Fouricon>
  </div>
</div>
</div>

 <div class="w">
<Show>
  不同公司代理记账类型
  <template v-slot:1-1>
  内资公司注册
  </template>
  <template v-slot:1-2>
  以超低价
  </template>
  <template v-slot:1-3>
  享受专业团队服务
  </template>

  <template v-slot:2-1>
  小规模纳税人代理记账
  </template>
  <template v-slot:2-2>
  正规软件
  </template>
  <template v-slot:2-3>
  高效处理，低差错率
  </template>

  <template v-slot:3-1>
  进出口公司代理记账
  </template>
  <template v-slot:3-2>
  三层监管
  </template>
  <template v-slot:3-3>
  规范审批，避免税务风险
  </template>

  <template v-slot:4-1>
  内资公司代理记账
  </template>
  <template v-slot:4-2>
  全方位服务
  </template>
  <template v-slot:4-3>
  合理筹划，降低财务成本
  </template>

</Show>
      </div>
      <phone></phone>
  </div>
</template>

<script>
import Fouricon from '@/components/fouricon/Fouricon.vue'
import Show from '@/components/show/Show.vue'
import phone from '@/components/myphone/MyPhone.vue'
export default {
  name: 'mySecond2',
  components: {
    Fouricon,
    Show,
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
.pics {
  background-color: #fff;
}
</style>
