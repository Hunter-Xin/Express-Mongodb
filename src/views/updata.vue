<template>
  <el-form style="padding: 0 300px" ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="form.age"></el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="form.tel"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即修改</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        age: "",
        tel: "",
      },
      oldData: {}
    }
  },
  created() {
    this.oldData =  JSON.parse(sessionStorage.getItem('obj'));
    console.log(this.oldData,88888);
    delete this.oldData._id
    let temp = JSON.parse(JSON.stringify(this.oldData))
    this.form = temp
  },
  methods: {
    onSubmit() {
      console.log(this.form, 7777);
      console.log(this.oldData,88888);
      this.$api.post('updata', [this.oldData, this.form])
        .then((res) => {
          console.log(res, 'success');
          this.$router.go(-1)
        })
        .catch((err) => {
          console.log(err);
        })
    },
    cancel() {
      this.$router.go(-1)
    }
  },
}
</script>

<style></style>
