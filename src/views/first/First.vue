<template>
  <div>
<div class="png">
  <img src="../../assets/upload/bgi2.png" alt="">
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
  注册前，您需要确定注册公司类型
  <template v-slot:1-1>
  内资公司注册
  </template>
  <template v-slot:1-2>
  由五十个以下股东出资设立
  </template>
  <template v-slot:1-3>
  全体股东认缴的出资额
  </template>
  <template v-slot:1-4>
  股东共同制定公司章程
  </template>
  <template v-slot:1-5>
  有公司名称，有公司住所
  </template>

  <template v-slot:2-1>
  个人独资企业注册
  </template>
  <template v-slot:2-2>
  投资人为一个自然人
  </template>
  <template v-slot:2-3>
  合法的企业名称
  </template>
  <template v-slot:2-4>
   投资人申报的出资
  </template>
  <template v-slot:2-5>
  生产经营场所和从业人员
  </template>
  <template v-slot:3-1>
  合伙企业注册
  </template>
  <template v-slot:3-2>
  二个以上合伙人
  </template>
  <template v-slot:3-3>
  书面合伙协议
  </template>
  <template v-slot:3-4>
   认缴或实际缴付的出资
  </template>
  <template v-slot:3-5>
  企业名称和经营场所
  </template>
  <template v-slot:4-1>
  股份有限公司注册
  </template>
  <template v-slot:4-2>
  发起人符合法定人数
  </template>
  <template v-slot:4-3>
  认购股本法定资本最低限额
  </template>
  <template v-slot:4-4>
   制订章程，经创立大会通过
  </template>
  <template v-slot:4-5>
  公司名称和公司住所
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
  name: 'myFirst',
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
