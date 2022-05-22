<template>
  <div>
<div class="png">
  <img src="../../assets/upload/BGI3.png" alt="">
</div>
<div class="w">
  <div>
<Fouricon></Fouricon>
  </div>
</div>
<div class="w">
   <phone></phone>
</div>
  </div>
</template>

<script>
import Fouricon from '@/components/fouricon/Fouricon.vue'
import phone from '@/components/myphone/MyPhone.vue'
export default {
  name: 'mySecond3',
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
.w>div {
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
</style>
