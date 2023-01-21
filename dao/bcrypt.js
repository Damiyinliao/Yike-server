//处理数据加密模块 和 解密模块

//引入bcrypt进行相关数据加密
const bcrypt = require('bcryptjs');

exports.encrypt = function(password){
    
    //生成随机字符串salt
    let salt = bcrypt.genSaltSync(10);
    //生成hash密码
    let hash = bcrypt.hashSync(password, salt);

    return hash
}
//解密验证
exports.decrypt = function(e, hash){
    
    let verif = bcrypt.compareSync(e, hash);

    return verif;
}
