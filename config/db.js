//该模块用来链接数据库
//引入模块
var mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb://localhost:27017/xuexi',{useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;
// 失败警告  成功提醒
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.info("数据库连接成功");
})

module.exports = db