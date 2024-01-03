// 1.安装mysql2模块：npm i mysql2

// 2.导入模块：
const mysql2 = require('mysql2');
const express = require('express');

// 3.配置MySQL连接信息：
const connection = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'db_test'
});

// 4.创建连接对象：
connection.connect((err) => {
    // err是一个对象，如果它不为空，说明当前连接就出问题了
    if(err) {
        console.log('连接失败，请检查配置信息！' , err);
    } else{
        console.log('恭喜，连接成功！');
    }
})

// 5.构建server对象：
const app = express();

// post请求参数处理中间件：
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/getOne' , (request , response) => {

    const {username , password} = request.query
    console.log(username , password);

    connection.query(
        'select * from tb_user where username = ? and password = ?' ,
        [username , password] ,
        (err , result) => {
            if(result.length === 0) {
                response.send('查询失败！');
            } else{
                response.send(`欢迎 ${username} 登录成功！`);
            }
        });
});

app.get('/api/getAll' , (request , response) => {

    connection.query(
        'select * from tb_user' ,
        (err , result) => {
            if(result.length === 0) {
                response.send('查询失败！');
            } else{
                response.send(JSON.stringify(result));
            }
        });
});

app.put('/api/update/:id' , (request , response) => {

    let id = request.params.id;
    const {username , password} = request.body;
    console.log(id , username , password);

    connection.query(
        'update tb_user set username = ? , password = ? where id = ?' ,
        [username , password , id] ,
        (err , result) => {
            console.log(result);
            if(result.affectedRows === 0) {
                response.send(JSON.stringify({msg: '修改失败！'}));
            } else{
                response.send(JSON.stringify({msg: '修改成功！'}));
            }
        });
});

app.delete('/api/delete/:id' , (request , response) => {

    let id = request.params.id;
    connection.query(
        'delete from tb_user where id = ?' ,
        [id] ,
        (err , result) => {
            console.log(result);
            if(result.affectedRows === 0) {
                response.send(JSON.stringify({msg: '修改失败！'}));
            } else{
                response.send(JSON.stringify({msg: '修改成功！'}));
            }
        });
});

app.post('/api/insert' , (request , response) => {

    const {username , password} = request.body;
    connection.query(
        'insert into tb_user(username , password) values(? , ?)' ,
        [username , password] ,
        (err , result) => {
            console.log(result);
            if(result.affectedRows === 0) {
                response.send(JSON.stringify({msg: '插入失败！'}));
            } else{
                response.send(JSON.stringify({msg: '插入成功！'}));
            }
        });
});

// 5.启动服务，监听端口：
app.listen(80 , (err) => {
    if(err) {
        console.log('后台启动错误，请检查。。。');
    } else {
        console.log('后台服务运行中，监听端口：80')
    }
})