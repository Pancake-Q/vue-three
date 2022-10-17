// 引入express
const express = require('express');
const app = express();

//指定启动服务器到哪个文件夹，我这边指的是/public/dist文件夹
app.use(express.static('./../dist'));

//监听端口为3000
app.listen(3000, function () {
  console.log(' app listening at http://localhost:3000');
});
