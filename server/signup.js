var dbserver = require('../dao/dbserver');

//用户注册
exports.signUp = (req, res) =>{
    let name = req.body.username;
    let email = req.body.email;
    let password = req.body.password;
    // res.send(req.body);
    dbserver.buildUser(name, email, password, res);
}

//用户使用邮箱注册 判断邮箱是否已经被占用
exports.judgeValue = (req, res)=>{
    let data = req.body.data;
    let type = req.body.type;
    // res.send(req.body);
    dbserver.countUserValue(data,type,res);
}

