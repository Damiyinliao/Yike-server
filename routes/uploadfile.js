const multer = require('multer');

//定义存储引擎
const storage = multer.diskStorage({
    //保存路径
    destination: function (req, file, cb) {
        let user = req.body.user;
        // console.log('user' + user);
        cb(null, './data/uploads');
    },
    //保存在destination中的文件名
    filename: function (req, file, cb) {
        //正则匹配后缀名
        let type = file.originalname.replace(/.*\./, ".");
        // console.log(type);
        cb(null, Date.now() + type);
    }
});

const upload = multer({ storage: storage });
module.exports = function (app) {
    //前端文件上传
    app.post('/upload/files', upload.array('file', 10), (req, res, next) => {
        //获取文件信息
        let data = req.files;
        //返回给前端
        res.send(data);
    })
}

