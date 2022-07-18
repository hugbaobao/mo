<template>
  <div>
<ul>
  <li><a class="button-t" href="javascript:void(0)" onclick="openJesongChatByGroup(28241,58319);return false;">在线客服</a></li>
  <li slot="reference">
    <el-popover
    placement="left"
    title=""
    trigger="hover">
    <img src="@/assets/vchat.png" alt="" style="width: 120px" />
    <div slot="reference">微信客服</div>
  </el-popover>
  </li>
  <li>
    <el-popover
    placement="left"
    title=""
    trigger="hover"
    content="电话：17858757375">
    <div slot="reference">电话联系</div>
  </el-popover></li>
  <li>
     <el-popover
    placement="left"
    title=""
    trigger="hover">
    <Board></Board>
    <div slot="reference">给我留言</div>
  </el-popover>
    </li>
</ul>
</div>
</template>

<script>
import Board from '@/components/message_board/board.vue'
export default {
  name: 'myFix',
  data () {
    return {

    }
  },
  components: {
    Board
  }
}
</script>

<style scoped>
ul {
  width: 80px;
  position: fixed;
  top: 300px;
  right: 10px;
  z-index: 999;
  list-style: none;
}
ul>li {
  height: 80px;
  margin-bottom: 5px;
  border-radius: 5px;
    background-color:skyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    font-weight: 700;
}
.button-t {
  text-decoration: none;
  color: #fff;
}
</style>
