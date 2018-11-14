var fs = require('fs');

module.exports={
  //增加json文件中的对象
  "createJson":function createJson(params) {
    //现将json文件读出来
    let data = fs.readFileSync('./mocks/CmsCustom.json');
    var items = data.toString();//将二进制的数据转换为字符串
    items = JSON.parse(items);//将字符串转换为json对象
    items.push(params);//将传来的对象push进数组对象中
    // person.total = person.introItems.length;//定义一下总条数，为以后的分页打基础
    // console.log(person.introItems);
    var str = JSON.stringify(items, null, 4);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
    fs.writeFile('./mocks/CmsCustom.json',str,function(err){
      if(err){
        console.error(err);
      }
      console.log('----------新增成功-------------');
    });
    return items;
  },
    //删除json文件中的对象
    "deleteJson":function deleteJson(id){
        let data= fs.readFileSync('./mocks/CmsCustom.json');

        var items = data.toString();
        items = JSON.parse(items);
        //把数据读出来删除
        for(var i = 0; i < items.length;i++){
            if(id == i){
                console.log(items[i])
                items.splice(i,1);
            }
        }
        // console.log(person);
        // person.total = person.data.length;
        var str = JSON.stringify(items, null, 4);
        //然后再把数据写进去
        fs.writeFile('./mocks/CmsCustom.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log("----------删除成功------------");
        });
        return items;
    },















    //更新json文件中的对象
    "updateJson":function updateJson(id,params) {
        let data = fs.readFileSync('./mocks/CmsCustom.json')
        var items = data.toString();
        items = JSON.parse(items);
        //把数据读出来,然后进行修改
        for(var i = 0; i < items.length;i++){
            if(id == i){
                for(var key in params){
                    if(items[i][key]!=null){
                        items[i][key] = params[key];
                    }
                }
            }
        }
        // person.total = person.introItems.length;
        var str = JSON.stringify(items, null, 4);
        fs.writeFile('./mocks/CmsCustom.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('--------------------修改成功');
        });
        return items;
    },






    //增加json文件中的对象
    "createJson1":function createJson(params) {
        //现将json文件读出来
        let data = fs.readFileSync('./mocks/weChats.json');
        var items = data.toString();//将二进制的数据转换为字符串
        items = JSON.parse(items);//将字符串转换为json对象
        items.push(params);//将传来的对象push进数组对象中
        // person.total = person.introItems.length;//定义一下总条数，为以后的分页打基础
        // console.log(person.introItems);
        var str = JSON.stringify(items, null, 4);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile('./mocks/weChats.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('----------新增成功-------------');
        });
        return items;
    },
    //删除json文件中的对象
    "deleteJson1":function deleteJson(id){
        let data= fs.readFileSync('./mocks/weChats.json');

        var items = data.toString();
        items = JSON.parse(items);
        //把数据读出来删除
        for(var i = 0; i < items.length;i++){
            if(id == i){
                console.log(items[i])
                items.splice(i,1);
            }
        }
        // console.log(person);
        // person.total = person.data.length;
        var str = JSON.stringify(items, null, 4);
        //然后再把数据写进去
        fs.writeFile('./mocks/weChats.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log("----------删除成功------------");
        });
        return items;
    },
    //更新json文件中的对象
    "updateJson1":function updateJson(id,params) {
        let data = fs.readFileSync('./mocks/weChats.json')
        var items = data.toString();
        items = JSON.parse(items);
        //把数据读出来,然后进行修改
        for(var i = 0; i < items.length;i++){
            if(id == i){
                for(var key in params){
                    if(items[i][key]!=null){
                        items[i][key] = params[key];
                    }
                }
            }
        }
        // person.total = person.introItems.length;
        var str = JSON.stringify(items, null, 4);
        fs.writeFile('./mocks/weChats.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('--------------------修改成功');
        });
        return items;
    },

}