<template>
  <div>
<div class="png">
  <img src="../../assets/upload/bgi5.png" alt="">
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
  高新认定 五大优势推动企业发展
  <template v-slot:1-1>
  减免企业税收
  </template>
  <template v-slot:1-2>
  高企所得税减免40%，同时可享受办理研发经费加计扣除
  </template>
  <template v-slot:1-3>
  享受专业团队服务
  </template>

  <template v-slot:2-1>
  财政直接补贴
  </template>
  <template v-slot:2-2>
  地区对首次认定的高新技术企业资助均在5万元以上。
  </template>
  <template v-slot:2-3>
  高效处理，低差错率
  </template>

  <template v-slot:3-1>
  企业上市优先
  </template>
  <template v-slot:3-2>
  吸引政策和资金扶持创业板，新三板上市重要条件之一。
  </template>
  <template v-slot:3-3>
  规范审批，避免税务风险
  </template>

  <template v-slot:4-1>
  政策资金扶持
  </template>
  <template v-slot:4-2>
  土地、电力、排污、节能、科研资金、税收等各项扶持政策。
  </template>
  <template v-slot:4-3>
  合理筹划
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
  name: 'myFive',
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
.pics {
  background-color: #fff;
}
</style>
