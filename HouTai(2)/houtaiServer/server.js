const express=require("express");
const app=new express();

const weChats=require("./mocks/weChats");
const CmsCustom=require("./mocks/CmsCustom");
const MemMa=require("./mocks/MemMa");
const pack=require("./mocks/pack");
const products=require("./mocks/products");
const commentData=require("./mocks/commentData");
const sortData=require("./mocks/sortData");
const logData=require("./mocks/logData");

var fs = require('fs');//文件读写
var bodyParser = require('body-parser');//中间件获取req.body
var crud=require("./crud");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

app.all('*', function (req, res, next) {
    if (req.path !== "/" && !req.path.includes(".")) {
        res.header('"Access-Control-Allow-Credentials", true');
        res.header("Access-Control-Allow-Origin", req.headers["origin"] || "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.header("Content-Type", "application/json;charset=utf-8");
    }
    next();
});
app.use("/pack",(req,res)=>{
    res.json(pack);
});
app.use("/CmsCustom",(req,res)=>{
    res.json(CmsCustom);
});
app.use("/weChats",(req,res)=>{
    res.json(weChats);
});
app.use("/MemMa",(req,res)=>{
    res.json(MemMa);
});
app.use("/products",(req,res)=> {
    res.json(products);
});
app.use("/commentData",(req,res)=>{
    res.json(commentData);
});
app.use("/sortData",(req,res)=>{
    res.json(sortData);
});
app.use("/logData",(req,res)=>{
    res.json(logData);
});
app.listen(3000,()=>{
    console.log("api-server is ready on port 3000")
});


//新增
app.post("/api/CmsCustom/create",(req,res)=>{
    console.log("新增",req.body);
    let temp=crud.createJson(req.body);
    res.json(temp);
});
//删除
app.get("/api/CmsCustom/delete",(req,res)=>{
    console.log(req.query.id)
    let temp = crud.deleteJson(req.query.id);
    res.json(temp);
});


//更新
app.post("/api/CmsCustom/update",(req,res)=>{
    console.log(req.query.id)
    console.log("更新",req.body);
    let temp = crud.updateJson(req.query.id,req.body);
    res.json(temp);
});




//新增
app.post("/api/weChats/create",(req,res)=>{
    console.log("新增",req.body);
    let temp=crud.createJson1(req.body);
    res.json(temp);
});
//删除
app.get("/api/weChats/delete",(req,res)=>{
    console.log(req.query.id)
    let temp = crud.deleteJson1(req.query.id);
    res.json(temp);
});
//更新
app.post("/api/weChats/update",(req,res)=>{
    console.log(req.query.id)
    console.log("更新",req.body);
    let temp = crud.updateJson1(req.query.id,req.body);
    res.json(temp);
});

//新增
app.post("/api/MemMa/create",(req,res)=>{
    console.log("新增",req.body);
    let temp=crud.createJson2(req.body);
    res.json(temp);
});
//删除
app.get("/api/MemMa/delete",(req,res)=>{
    console.log(req.query.id)
    let temp = crud.deleteJson2(req.query.id);
    res.json(temp);
});
//更新
app.post("/api/MemMa/update",(req,res)=>{
    console.log(req.query.id)
    console.log("更新",req.body);
    let temp = crud.updateJson2(req.query.id,req.body);
    res.json(temp);
});
