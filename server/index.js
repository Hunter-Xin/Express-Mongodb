const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(require('cors')())
app.use(express.json())

app.get('/', async(req, res) => {
  res.send('2222')
})
// 连接数据库
mongoose.connect('mongodb://localhost/play', { 
  useNewUrlParser: true, //避免“不推荐使用当前URL字符串解析器”警告 
  useFindAndModify: true, //全局选项选择使用MongoDB驱动程序的功能
  useCreateIndex: true //全局选项以选择使用Mongoose createIndex()
 })
  .then((res) => {
    console.log(11111);
  })
  .catch((err) => {
    console.log(err, 2222);
  })
// 创建集合规则
  const student = new mongoose.Schema({
    name: String,
    age:  Number,
    tel: Number
  })
// 规则创建集合
  const Student = mongoose.model('Student', student)

  // 新增
  app.post('/api/student', async(req, res) => {
    const student = await Student.create(req.body)
    res.send(student)
  })
  // 删除
  app.post('/api/del', async(req, res) => {
    const del = await Student.findOneAndDelete(req.body)
    res.send(del)
  })
  // 查询
  app.post('/api/find', async(req, res) => {
    const find = await Student.find({ name: { $regex: req.body.name, $options: 'i'} })
    res.send(find)
  })
  // 更新
  app.post('/api/updata', async(req, res) => {
    const updata = await Student.updateOne(req.body[0], req.body[1])
    res.send(updata)
  })
  // 获取列表
  app.get('/api/list', async(req, res) => {
    const list = await Student.find()
    res.send(list)
  })

  app.listen(3000, () => {
    console.log('sucess');
  })