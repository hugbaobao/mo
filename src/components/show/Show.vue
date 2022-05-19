<template>
  <div id="Show">
<Title>
  <slot></slot>
</Title>

<div class="blocks">
<div class="theblock">
  <h4><slot name="1-1">
  </slot></h4>
  <span>
    受理条件
  </span>
  <ul>
    <li><slot name="1-2">
  </slot></li>
    <li><slot name="1-3">
  </slot></li>
    <li><slot name="1-4">
  </slot></li>
    <li><slot name="1-5">
  </slot></li>
  </ul>
</div>
<div class="theblock">
  <h4><slot name="2-1">
  </slot></h4>
  <span>
    受理条件
  </span>
  <ul>
    <li><slot name="2-2">
  </slot></li>
    <li><slot name="2-3">
  </slot></li>
    <li><slot name="2-4">
  </slot></li>
    <li><slot name="2-5">
  </slot></li>
  </ul>
</div>
<div class="theblock">
  <h4><slot name="3-1">
  </slot></h4>
  <span>
    受理条件
  </span>
  <ul>
    <li><slot name="3-2">
  </slot></li>
    <li><slot name="3-3">
  </slot></li>
    <li><slot name="3-4">
  </slot></li>
    <li><slot name="3-5">
  </slot></li>
  </ul>
</div>
<div class="theblock">
  <h4><slot name="4-1">
  </slot></h4>
  <span>
    受理条件
  </span>
  <ul>
    <li><slot name="4-2">
  </slot></li>
    <li><slot name="4-3">
  </slot></li>
    <li><slot name="4-4">
  </slot></li>
    <li><slot name="4-5">
  </slot></li>
  </ul>
</div>

</div>
  </div>
</template>

<script>
import Title from '@/components/container/Title.vue'
export default {
  name: 'myShow',
  components: {
    Title
  }
}
</script>

<style scoped>
.blocks {
  margin: 50px 0;
  height: 290px;
  display: flex;
  justify-content: space-around;
}
.theblock {
width: 235px;
padding: 20px 10px;
background-color: #fff;
 box-shadow: 1px 2px 4px rgba(0, 0, 0, .12);
}
.blocks>div span {
  display: inline-block;
  width: 100%;
  color: #FF8E2A;
  margin: 20px 0;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
}
.blocks>div li {
  list-style: none;
  margin-bottom: 10px;
}
</style>
