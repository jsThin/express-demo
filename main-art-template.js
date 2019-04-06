var express = require('express');
var app = express();
let path = require('path');

//设置模板路径
app.set('views',path.join(__dirname,'views'));
//设置模板引擎
app.set('view engine','art');
//让express兼容art-template
app.engine('art', require('express-art-template'));

app.get('/list', function (req, res) {
    let travelData = {
        title: '旅游城市',
        city: ['北京','上海','广州','深圳']
    }
    res.render('index.art',travelData);
})
 
var server = app.listen(3000, function () {
  console.log("app is running....");
})