<template>
  <div id="Title">
<h1 class="animate__animated animate__fadeInDown">
  <slot>标题</slot>
</h1>
  </div>
</template>

<script>
export default {
  name: 'myTitle'
}
</script>

<style scoped>
#Title{
  padding-top: 50px;
}
</style>
