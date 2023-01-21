//这是路由模块

//导入 express
const express = require('express');
const { sign } = require('jsonwebtoken');
//创建路由对象
const router = express.Router();

//引入数据库服务模块
const dbserver = require('../dao/dbserver');
//引入用户使用邮箱注册服务模块
const signup = require('../server/signup');
//引入用户登录匹配模块
const signin = require('../server/signin');
//引入搜索模块
const search = require('../server/search');
//引入查询与修改用户详情模块
const userdetail = require('../server/userdetail');
//引入好友操作相关模块
const friend = require('../server/friend');
//引入查询好友信息
const index = require('../server/index')

router.get('/', (req, res) => {
    res.send('请求成功')
})
router.get('/test/db', (req, res) => {
    dbserver.findUser(res);
})
router.get('/usr', (req, res) => {
    res.send('usr请求成功')
})
router.get('/hichat/userLogin', (req, res) => {
    console.log('请求的内容：', req.params);
    res.send("访问hichat/user成功")
})

/*
*注册页面
*/
//用户使用邮箱注册路由
router.post('/userRegister/add', (req, res) => {
    signup.signUp(req, res);
})
//用户或邮箱是否已被占用判断
router.post('/userRegister/judge', (req, res) => {
    signup.judgeValue(req, res);
})

/*
*登录页面
*/
//用户登录，进行用户名，邮箱，密码等匹配和验证
router.post('/userLogin/match', (req, res) => {
    signin.signIn(req, res);
})
//临时检验token的路由测试 postman测试
router.post('/userLogin/tokenTest', (req, res) => {
    signin.tokenTest(req, res);
})

/*
*搜索页面相关API  
*/
//搜索用户
router.post('/search/user', (req, res) => {
    search.searchUser(req, res);
})
//判断搜索出来的用户是不是自己的好友
router.post('/search/isFriend', (req, res) => {
    search.isFriend(req, res);
})
//搜索群组
router.post('/search/group', (req, res) => {
    search.searchGroup(req, res);
})
//判断搜索出来的群组是不是已经加入的了
router.post('/search/isGroupUser', (req, res) => {
    search.isGroupUser(req, res);
})

/*
*用户详情页面相关API  
*/
//查询用户详情
router.post('/user/detail', (req, res) => {
    userdetail.userDetail(req, res);
})
//更新用户详情
router.post('/user/detail/update', (req, res) => {
    userdetail.userUpdate(req, res);
})
//获取对朋友的备注
router.post('/user/detail/nickname', (req, res) => {
    userdetail.getFriendNickname(req, res);
})
//修改对朋友的备注
router.post('/user/alter/nickname', (req, res) => {
    userdetail.alterFriendNickname(req, res);
})

/*
*申请好友相关API  
*/
router.post('/friend/apply', (req, res) => {
    friend.applyFriend(req, res);
})
// 更新好友状态（同意）
router.post('/friend/update/state', (req, res) => {
    friend.updateFriendState(req, res);
})
// 更新好友状态（拒绝/删除）
router.post('/friend/delete', (req, res) => {
    friend.deleteFriend(req, res);
})
/**
 * 主页
 */
//获取好友
router.post('/index/getFriend', (req, res) => {
    index.getFriend(req, res);
})

//获取最后一条消息
router.post('/index/getlastmsg', (req, res) => {
    index.getLastMsg(req, res);
})
//获取未读消息条数的数量
router.post('/index/unreadmsg', (req, res) => {
    index.unreadMsg(req, res);
})
//更新消息状态 已读还是未读状态
router.post('/index/updatemsg', (req, res) => {
    index.updateMsg(req, res);
})
//获取群列表
router.post('/index/getgroup', (req, res) => {
    index.getGroup(req, res);
})
//获取群消息
router.post('/index/getlastgroupmsg', (req, res) => {
    index.getLastGroupMsg(req, res);
})
//群消息状态修改
router.post('/index/updategroupmsg', (req, res) => {
    index.updateGroupMsg(req, res);
})
module.exports = router
