let express = require('express');
let app = express();
let router = require('./router/router.js');

//使用路由模块 第一个参数为虚拟路径(可选)
app.use('/admin',router);

app.listen(3000,() => {
    console.log('app is running.....');
})