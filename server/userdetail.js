//引入数据库操作模块
const dbserver = require('../dao/dbserver');

//查询用户的详情
exports.userDetail = function (req, res) {
    let id = req.body.id;
    dbserver.userDetail(id, res);
};

//用户信息修改
exports.userUpdate = function (req, res) {
    let data = req.body;
    // res.send(data)
    dbserver.userUpdate(data, res);
}
exports.getFriendNickname = function (req, res) {
    let data = req.body;
    dbserver.getFriendNickname(data, res);
}
//修改好友昵称
exports.alterFriendNickname = function (req, res) {
    let data = req.body;
    dbserver.alterFriendNickname(data, res);
}

