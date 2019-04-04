var express = require('express');
let bodyParser = require('body-parser')
let path = require('path');
let fs = require('fs');
let multer = require('multer');
var app = express();

app.use('/static',express.static(path.join(__dirname,'public')))

// 创建 application/x-www-form-urlencoded 编码解析
//var urlencodedParser = bodyParser.urlencoded({ extended: false }) 效果等同下面
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({ dest: '/tmp/'}).array('image'));
 
//  主页输出 "Hello World"
app.get('/', function (req, res) {
   res.send('Hello GET');
})

//get 请求提交表单
app.get('/process_get',(req,res) => {
    let response = {
      "firstName": req.body.first_name,
      "lastName": req.body.last_name
    }
    res.send(response.firstName + response.lastName);
})

//post请求提交表单
app.post('/process_post',(req,res) => {
  let response = {
    "firstName": req.body.first_name,
    "lastName": req.body.last_name
  }
  res.send(response.firstName + response.lastName);
})

//上传文件
app.post('/file_upload',(req,res) => {
  console.log(req.files[0]);  //上传的文件信息
   //新文件的存放路径及文件名
  let des_file = __dirname + '/public/images/' + req.files[0].originalname;
  //先读后写
  fs.readFile(req.files[0].path, (err,data) => {
    fs.writeFile(des_file,data,(err) => {
      if(err) {
        console.log('err');
      } else {
        res.send('文件上传成功！');
      }
    })
  })
})
 
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})