<template>
  <div>
<div class="png">
  <img src="../../assets/upload/bgi6.png" alt="">
</div>
<div class="pics">
  <div class="w">
  <div class="Four">
<Fouricon></Fouricon>
  </div>
</div>
</div>

      <phone></phone>
  </div>
</template>

<script>
import Fouricon from '@/components/fouricon/Fouricon.vue'
import phone from '@/components/myphone/MyPhone.vue'
export default {
  name: 'mySix',
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
.pics {
  background-color: #fff;
}
</style>
