// 导入express
const express = require('express')
// 引入body-parser进行相关解析
const bodyParser = require('body-parser');


//创建web服务器
const app = new express();
//定义端口号
const port = 3001;

//引入中间件解决跨域问题
const cors = require('cors');
app.use(cors());                                                      //允许跨域

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(bodyParser.json({ limit: '50mb' }))  // 解析前端数据 ,并设置文件上传大小限制

//解析前端数据 解析 post 表单数据的中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//引入jwt.js进行token验证
const jwt = require('./dao/jwt');
//token判断
app.use((req, res, next) => {
    //有token就进行token验证 没有就放行
    if (typeof (req.body.tokenStr) != 'undefined') {
        //处理token匹配 匹配成功就返回1反之返回0
        let tokenMatch = jwt.verifyToken(req.body.tokenStr);
        //验证成功就是 1 反之 0
        if (tokenMatch) {
            next();
        } else {
            res.send({ status: 400 });//400客户端错误 token不对
        }
    } else {
        next();
    }
});

//导入路由模块  
const router = require('./routes');
app.use(router);
//其它路由模块
require('./routes/uploadfile')(app);




// 404页面
app.use((req, res, next) => {
    console.log(req.path);
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});



app.listen(port, () => {
    console.log(`服务器已开启在${port}端口，链接:  http://127.0.0.1:3001`);
});
