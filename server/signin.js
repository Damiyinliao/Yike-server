// 引入数据库操作模块
const dbserver = require('../dao/dbserver');

exports.signIn = function (req, res) {
    let data = req.body.userinfo;
    let userpassword = req.body.password;
    // res.send(req.body)
    dbserver.userMatch(data, userpassword, res);
}
const jwt = require('../dao/jwt')
exports.tokenTest = function (req, res) {
    let tokenStr = req.body.tokenStr;
    let decodeToken = jwt.verifyToken(tokenStr);
    res.send(decodeToken);//返回解析出来的 id 和 time
}