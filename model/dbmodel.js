//引入模块
var mongoose = require('mongoose');

var db = require('../config/db');
//数据库对象的集合 一种数据模式 表结构的定义，
//每个schema会映射到mongodb中的一个collection，它不具备操作数据库的能力
var Schema = mongoose.Schema;


//用户列表
var UserSchema = new Schema({
    name:{type: String},            //姓名
    password:{type: String},        //密码
    email:{type: String},           //邮箱
    gender:{type: String, default:'asexuality'},          //性别
    birthday:{type: Date},          //生日
    phone:{type: Number},           //电话号码
    about:{type: String},           //简介、关于
    imgurl:{type: String, default:'/user/user.jpg'},          //头像地址
    registertime:{type: Date}      //注册日期
});
//好友表
var FriendSchema = new Schema({
    userID:{type: Schema.Types.ObjectId,ref:'User'},        //用户id
    friendID:{type: Schema.Types.ObjectId,ref:'User'},      //好友id
    state:{type: String},                                   //好友状态（0表示已为好友，1表示申请成功，2表示发送方）
    nickname:{type: String},                                //给好友的昵称
    time:{type: Date},                                       //成为好友的时间
    lastTime:{type:String}                                  //最后一次聊天时间
});
//一对一消息表
var MessageSchema = new Schema({
    userID:{type: Schema.Types.ObjectId,ref:'User'},        //用户id
    friendID:{type: Schema.Types.ObjectId,ref:'User'},      //好友id
    messageContent:{type: String},                           //消息内容
    messageType:{type: String},                              //消息类型（0是文字，1是图片，2是音频链接，4是图片）
    messageTime:{type: Date},                                //消息发送的时间
    state:{type: Number}                                     //消息的状态（0表示已读，1表示未读）
})
//群表
var GroupSchema = new Schema({
    userID:{type:Schema.Types.ObjectId,ref:'User'},         //用户id
    groupName:{type:String},                                //群名
    groupImgUrl:{type:String, default:'group.png'},         //群头像
    time:{type:Date},                                       //群建时间
    notice:{type:String}                                    //群公告
})
//群成员表
var GroupUserSchema = new Schema({
    groupID:{type:Schema.Types.ObjectId,ref:'Group'},       //群id
    userID:{type:Schema.Types.ObjectId,ref:'User'},         //用户id
    name:{type:String},                                     //群内名称
    tip:{type:Number,default:0},                            //未读消息数
    time:{type:Date},                                       //加入时间
    lastTime:{type:Date},                                   //最后一次聊天时间
    shield:{type:Number}                                    //是否屏蔽群消息(0屏蔽，1屏蔽)
})
//群消息表
var GroupMessageSchema = new Schema({
    groupID:{type:Schema.Types.ObjectId,ref:'Group'},       //群id
    userID:{type:Schema.Types.ObjectId,ref:'User'},         //用户id
    message:{type:String},                                  //内容
    types:{type:String},                                    //内容类型（0文字，1图片内容，2音频链接
    time:{type:Date}                                        //发送时间
})
module.exports = db.model('User', UserSchema);
module.exports = db.model('Friend', FriendSchema);
module.exports = db.model('Message', MessageSchema);
module.exports = db.model('Group', GroupSchema);
module.exports = db.model('GroupUser', GroupUserSchema);
module.exports = db.model('GroupMessage', GroupMessageSchema);



