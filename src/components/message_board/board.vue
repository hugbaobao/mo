<template>
  <div>
 <el-popover
    placement="bottom"
    title=""
    width="400"
    trigger="click"
    content="">
    <el-button slot="reference">点此给我们留言</el-button>
    <div class="message" v-popover>
<el-form ref="form" :model="form" :label-position="labelPosition" label-width="80px">
  <el-form-item label="您的需求">
    <el-input type="textarea" v-model="form.desc" name="message"></el-input>
  </el-form-item>
  <el-form-item label="联系方式">
    <el-input v-model="form.Number" name="phone"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即发送</el-button>
  </el-form-item>
</el-form>
    </div>
  </el-popover>
</div>
</template>

<script>
import { Message } from '@/utils/messageApi.js'
export default {
  name: 'MessageBoard',
  data () {
    return {
      labelPosition: 'top',
      form: {
        Number: '',
        desc: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      const { data: res } = await Message(this.form.desc, this.form.Number)
      console.log(res)
      if (res.status === 1) {
        return this.$notify({
          title: '警告',
          message: res.message,
          type: 'warning'
        })
      }
      this.$notify({
        title: '成功',
        message: '提交成功！',
        type: 'success'
      })
      this.form.Number = ''
      this.form.desc = ''
    }
  }
}
</script>

<style scoped>

</style>
