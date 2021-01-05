<template>
  <div style="padding:50px">
    <h1>Express、MongoDB练习界面</h1>
    <div class="search">
      <el-input v-model="input" placeholder="请输入姓名查询"></el-input>
      <el-button @click="search" size="medium" type="primary">搜索</el-button>
      <el-button @click="add" size="medium" type="primary">新增</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="age" label="年龄"> </el-table-column>
      <el-table-column prop="tel" label="电话"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="handleDelete(scope.row._id)"
            type="text"
            size="small"
            >删除</el-button
          >
          <el-button @click="handleEdit(scope.row)" type="text" size="small"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      input: "",
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 获取列表
    getList() {
      this.$api
        .get("list")
        .then((res) => {
          console.log(res, 8888)
          this.tableData = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 编辑
    handleEdit(row) {
      console.log(row)
      sessionStorage.setItem("obj", JSON.stringify(row))
      this.$router.push("updata")
    },
    // 删除
    handleDelete(_id) {
      this.$confirm("此操作将永久删除该条信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$api
            .post("del", { _id })
            .then(() => {
              this.$message({
                type: "success",
                message: "删除成功!",
              })
              setTimeout(() => {
                this.$router.go(0)
              }, 500)
            })
            .catch((err) => {
              console.log(err)
            })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          })
        })
    },
    // 搜索
    search() {
      let a = {
        name: this.input,
      }
      console.log(a)
      this.$api
        .post("find", a)
        .then((res) => {
          this.tableData = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 新增
    add() {
      this.$router.push("add")
    },
  },
}
</script>
<style>
.search {
  width: 40%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>
