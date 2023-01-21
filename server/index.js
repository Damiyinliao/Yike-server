//主页
var dbserver = require('../dao/dbserver');

//获取好友列表
exports.getFriend = function (req, res) {
    let data = req.body;
    dbserver.getUsers(data, res);
}

//获取最后一条消息
exports.getLastMsg = function (req, res) {
    let data = req.body;
    dbserver.getOneMsg(data, res);
}
//获取未读消息数的条数
exports.unreadMsg = function (req, res) {
    let data = req.body;
    dbserver.unreadMsg(data, res);
}
//更新消息状态 已读还是未读状态
exports.updateMsg = function (req, res) {
    let data = req.body;
    dbserver.updateMsg(data, res);
}


//获取群列表
exports.getGroup = function (req, res) {
    let uid = req.body.uid;
    dbserver.getGroup(uid, res);
}
//获取群消息
exports.getLastGroupMsg = function (req, res) {
    let gid = req.body.gid;
    dbserver.getOneGroupMsg(gid, res);
}

//群消息状态修改
exports.updateGroupMsg = function (req, res) {
    let data = req.body.data;
    dbserver.updateGroupMsg(data, res);
}