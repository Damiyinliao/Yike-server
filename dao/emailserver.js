//使用邮箱进行注册 模块服务

//引入邮件发送模块
const nodemailer = require('nodemailer');
//引入证书文件
const credential = require('../config/credential');
//创建传输方式
const transporter = nodemailer.createTransport({
    service:'qq',
    auth:{
        user:credential.qq.user,
        pass:credential.qq.pass
    }
});

//注册 之后发送邮件给客户
exports.emailSignUp = function(email, res){
    //发送信息内容
    let options = {
        from:'3534269201@qq.com',
        to:email,
        subject:'感谢你在hichat注册',
        html:`
            <span>welcome to hichat!</span>
        `
    };
    //发送邮件
    transporter.sendMail(options, (err, res)=>{
        if(err){
            console.warn(err);
        }else{
            res.send('注册邮箱发送成功')
            // console.log('邮件发送成功');
        }
    })
}