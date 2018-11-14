var express = require('express');
var router = express.Router();
var fs = require('fs');
var CmsCustom = require("../mocks/CmsCustom")
var commentData=require("../mocks/commentData")
var commentData=require("../mocks/sortData")
var commentData=require("../mocks/logData")
var app =express()

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.get("/api/CmsCustom",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Origin,Content-Type,Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.json(CmsCustom)
})

router.post('/AdminOrderList', function(req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
//允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
//跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");

    let data = fs.readFileSync('../mocks/CmCustom.json');
    var items = data.toString();//将二进制的数据转换为字符串
    items = JSON.parse(items);//将字符串转换为json对象

    items.goodsmsg.push(req.body);//将传来的对象push进数组对象
    console.log(items.goodsmsg)

    var str = JSON.stringify(items, null, 4);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
    fs.writeFile('../mocks/CmCustom.json',str,function(err){
        if(err){
            console.error(err);
        }
        console.log('----------新增成功-------------');
    });

    res.json(str)
    console.log(req.body)
});

module.exports = router;
