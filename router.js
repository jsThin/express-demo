let express = require('express');
let router = express.Router();

//定义网页主站路由
router.get('/',(req,res) => {
    res.send('home page');
});

router.post('/add',(req,res) => {
    res.send('add page');
})

//all() 适用于同一个路径，可以发送任意请求方式的路由
/* router.all('/select',(req,res) => {
    res.send('all');
}) */

//use() 此路由可以匹配所有路径请求，及所有请求方式
/* router.use((req,res) => {
    res.send('use');
}) */

//使用route() 定义路由，适用于对同一个路径发送不同请求
/* router.route('/book').get((req,res) => {
    res.send('book-get');
}).post((req,res) => {
    res.send('book-post');
}).put((req,res) => {
    res.send('book-put');
}).delete((req,res) => {
    res.send('book-delete');
}); */

//导出路由
module.exports = router;