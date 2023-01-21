//搜索模块

//引入数据库操作模块
const dbserver = require('../dao/dbserver');
//以下为具体操作

//搜索用户
exports.searchUser = function (req, res) {
    let data = req.body.data;
    dbserver.searchUser(data, res);
}
//判断是否是好友
exports.isFriend = function (req, res) {
    let uid = req.body.uid;
    let fid = req.body.fid;
    dbserver.isFriend(uid, fid, res);
}
//搜索群
exports.searchGroup = function (req, res) {
    let data = req.body.data;
    dbserver.searchGroup(data, res)
}
//判断是否在群里
exports.isGroupUser = function (req, res) {
    let uid = req.body.uid;
    let gid = req.body.gid;
    dbserver.isGroupUser(uid, gid, res);
}

