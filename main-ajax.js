let express = require('express');
let app = express();
let bodyParser = require('body-parser');

//加载静态资源
app.use(express.static('public'));
//使用body-parser
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 处理json格式的数据  即前台传递的数据是json
app.use(bodyParser.json())

app.post('/login',(req,res) => {
    console.log(req.body);
    let data = req.body;
    res.send('ok');
});

app.listen(3000,() => {
    console.log('app is running.....');
})