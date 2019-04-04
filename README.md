# express-demo

### express安装
##### npm install express --save
##### 三个重要模块的安装
###### body-parser - node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
###### cookie-parser - 这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
###### multer - node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据。
```
npm install body-parser --save
npm install cookie-parser --save
npm install multer --save
```

### 基本框架实例
``` 
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})
 
app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
}
```

### 绑定静态资源
##### Express 提供了内置的中间件 express.static 来设置静态文件如：图片， CSS, JavaScript 等
```
app.use('/static',express.static(path.join(__dirname,'public')));
```

### GET请求处理表单提交
```
<form action="http://127.0.0.1:3000/process_get" method="GET">
    First Name: <input type="text" name="first_name">  <br>
    
    Last Name: <input type="text" name="last_name">
    <input type="submit" value="Submit">
</form>
```
```
app.get('/process_get', function (req, res) {
   // 输出 JSON 格式
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   res.end(JSON.stringify(response));
})
```

### POST请求处理表单提交
```
<form action="http://127.0.0.1:8081/process_post" method="POST">
    First Name: <input type="text" name="first_name">  <br>
    
    Last Name: <input type="text" name="last_name">
<input type="submit" value="Submit">
```
```
//使用body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.post('/process_post', urlencodedParser, function (req, res) {
   // 输出 JSON 格式
   var response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   res.end(JSON.stringify(response));
})
```

### POST上传文件
```
<!-- 使用 POST 方法，表单 enctype 属性设置为 multipart/form-data -->
<form action="/file_upload" method="post" enctype="multipart/form-data">
    <input type="file" name="image" size="50" />
    <br />
    <input type="submit" value="上传文件" />
</form>
```
```
//使用body-parser及multer
app.use(bodyParser.urlencoded({extended: false}));
app.use(multer({ dest: '/tmp/'}).array('image'));

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
```

