let express = require('express');
let app = express();

//use方式挂载
/* app.use((req,res,next) => {
    console.log('AAA');
    next();
}) */

//get方式挂载
/* app.use((req,res,next) => {
    console.log('BBB');
    next();
}) */

app.get('/admin',(req,res,next) => {
    console.log('A');
    //添加参数route,可以跳过下一个中间件
    next('route');
},(req,res,next) => {
    console.log('B');
    next();
})
app.get('/admin',(req,res,next) => {
    console.log('C');
    next();
});


app.listen(3000,()=> {
    console.log('app is running....');
})