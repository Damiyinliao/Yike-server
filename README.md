# 聊天APP后台
## Project
### 一、项目目录
```javascript
├─bin                   //配置文件
|  └db.js               //连接数据库
├─dao                   //数据处理层
|  └bcrypt.js           //数据加密
|  └dbserver.js         //数据库操作
|  └emailserver.js      //邮箱注册账号数据操作
├─middleware            //中间件
├─model                 //数据模型
|  └dbmodel.js
├─public                //静态资源
├─server                //具体服务文件
|  └signup.js           //登录服务
├─routes                //路由
|  └index.js
├─app.js                //入口
├─package-lock.json
├─package.json
├─README.md             //readme
```
### 二、前后端接口文档
#### 注册页
1. 用户注册
- 地址：/userRegister/add
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  name  |  string  |  用户名  |  是  |
    |  email |  string  |  邮箱  |  是  |
    |  password  |  string  |  密码  |  是  |

- 输出
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  返回的状态码  |  是  |

2. 用户/邮箱 是否存在进行判断
- 地址：/userRegister/judge
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  data  |  string  |  邮箱/用户名  |  是  |
    |  type |  string  |  name/email  |  是  |

- 输出
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  邮箱/用户名  |  是  |
    |  result |  int  |  0为不存在，非0表示存在  |  是  |

### 登录页
1. 用户登录
- 地址：/userLogin/match
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  data  |  string  |  邮箱/用户名  |  是  |
    |  password |  string  |  密码  |  是  |
- 输出：
  
### 搜索页
1. 搜索用户
- 地址：/search/user
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  data  |  string  |  用户名/邮箱 即搜索词  |  是  |
    |  token  |  string  |  验证  |  是  |
- 输出
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  状态码200/400  |  是  |
    |  name  |  string  |  用户名  |  是  |
    |  imgurl  |  string  |  头像地址  |  是  |
    |  id  |  string  |  用户id  |  是  |
1. 判断是否为好友
- 地址：/search/isFriend
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id即自己的id  |  是  |
    |  fid |  string  |  搜索出来符合搜索条件的对象的id  |  是  |
- 输出
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  状态码200/400  |  是  |

1. 搜索群
- 地址：/search/group
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  data  |  string  |  搜索词  |  是  |
- 输出
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  状态码200/400  |  是  |
    |  _id  |  String  |  群id  |  是  |
    |  name  |  int  |  群名  |  是  |
    |  imgurl  |  String  |  群头像地址  |  是  |
1. 判断是否在群内
- 地址：/search/isGroupUser
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  gid |  string  |  搜索群的id  |  是  |
- 输出
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  状态码200/400  |  是  |

### 用户详情页
1. 查看详情
- 地址：/user/detail
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  id  |  string  |  用户id  |  是  |
    |  token  |  string  |  验证  |  是  |
- 输出
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  name  |  String  |  用户名  |  是  |
    |  imgurl  |  String  |  头像地址  |  是  |
    |  id  |  String  |  用户id  |  是  |
    |  gender  |  string  |  性别  |  是  |
    |  birthday  |  date  |  生日  |  否  |
    |  phone  |  String  |  电话  |  否  |
    |  signature  |  String  |  签名  |  否  |
    |  time  |  date  |  注册时间  |  是  |
2. 详情页修改
- 地址：/user/detail/update
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  id  |  string  |  用户id  |  是  |
    |  data  |  string  |  修改内容  |  是  |
    |  type  |  string  |  修改项类型  |  是  |
    |  pwd  |  string  |  原密码  |  是  |
    |  token  |  string  |  验证  |  是  |
- 输出
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  返回的状态码  |  是  |
    |  name  |  String  |  用户名  |  是  |
    |  imgurl  |  String  |  头像地址  |  是  |
    |  id  |  String  |  用户id  |  是  |
    |  gender  |  string  |  性别  |  是  |
    |  birthday  |  date  |  生日  |  否  |
    |  phone  |  String  |  电话  |  否  |
    |  signature  |  String  |  签名  |  否  |
    |  time  |  date  |  注册时间  |  是  |
3. 获取好友昵称
- 地址：/user/detail/nickname
- 请求：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  fid  |  string  |  好友id  |  是  |
    |  token  |  string  |  端口验证  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  状态码200/500  |  是  |
    |  result  |  Object  |  昵称  |  是  |
4. 修改好友备注
- 地址：/user/alternickname
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  fid  |  string  |  好友id  |  是  |
    |  token  |  string  |  端口验证  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  状态码200/500  |  是  |
### 好友相关操作
1. 好友申请
- 地址：/friend/apply
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  fid  |  string  |  好友id  |  是  |
    |  token  |  string  |  端口验证  |  是  |
    |  msg  |  string  |  请求词  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---   |  ---  |  ---  |  ---  |
    |  status  |  int  |  返回的状态码  |  是  |
2. 好友通过
- 地址：/friend/update/state
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  fid  |  string  |  好友id  |  是  |
    |  token  |  string  |  端口验证  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---   |  ---  |  ---  |  ---  |
    |  status  |  int  |  返回的状态码  |  是  |
3. 删除好友
- 地址：/friend/delete
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  fid  |  string  |  好友id  |  是  |
    |  token  |  string  |  端口验证  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---   |  ---  |  ---  |  ---  |
    |  status  |  int  |  返回的状态码  |  是  |
### 文件相关操作
1. 文件上传
- 地址：/upload/files
- 请求方式：POST
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  url  |  string  |  路径  |  是  |
    |  token  |  string  |  端口验证  |  是  |
    |  name  |  string  |  文件名  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---   |  ---  |  ---  |  ---  |
    |  Name  |  string  |  文件名  |  是  |

### 首页相关API
1. 获取好友列表
- 地址：/index/getfriend
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  token  |  string  |  验证  |  是  |
    |  state  |  int  |  关系类型  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  返回的状态码  |  是  |
    |  id    |  string  |  好友id  |  是  |
    |  name  |  string  |  用户名  |  是  |
    |  nickname  |  string  |  备注名  |  否  |
    |  imgurl  |  string  |  用户头像  |  是  |
    |  lastTime  |  Date  |  最后通话时间  |  是  |
2. 一对一获取最后一条消息
- 地址：/index/getlastmsg
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  token  |  string  |  验证  |  是  |
    |  fid  |  string  |  好友列表  |  是  |
    |  state  |  int  |  返回的状态码  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  返回的状态码  |  是  |
    |  message  |  string  |  内容  |  是  |
    |  types  |  int  |  消息类型  |  是  |
    |  time  |  Date  |  发送时间  |  是  |
3. 汇总一对一消息未读数
- 地址：/index/unreadmsg
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  token  |  string  |  验证  |  是  |
    |  fid  |  string  |  好友列表  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  返回的状态码  |  是  |
4. 一对一消息状态修改
- 地址：/index/updatemsg
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  token  |  string  |  验证  |  是  |
    |  fid  |  string  |  好友列表  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  返回的状态码  |  是  |

5. 获取群列表
- 地址：/index/getgroup
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  token  |  string  |  验证  |  是  |
    |  state  |  int  |  关系类型  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  返回的状态码  |  是  |
    |  id    |  string  |  好友id  |  是  |
    |  name  |  string  |  用户名  |  是  |
    |  nickname  |  string  |  备注名  |  否  |
    |  imgurl  |  string  |  用户头像  |  是  |
    |  lastTime  |  Date  |  最后通话时间  |  是  |
6. 获取群消息
- 地址：/index/getlastgroupmsg
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  token  |  string  |  验证  |  是  |
    |  fid  |  string  |  好友列表  |  是  |
    |  state  |  int  |  返回的状态码  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  返回的状态码  |  是  |
    |  message  |  string  |  内容  |  是  |
    |  types  |  int  |  消息类型  |  是  |
    |  time  |  Date  |  发送时间  |  是  |
7. 群消息状态修改
- 地址：/index/updategroupmsg
- 请求方式：POST
- 输入：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  uid  |  string  |  用户id  |  是  |
    |  token  |  string  |  验证  |  是  |
    |  fid  |  string  |  好友列表  |  是  |
- 输出：
    |  字段  |  类型  |  说明  | 必须  |
    |  ---  |  ---  |  ---  |  ---  |
    |  status  |  int  |  返回的状态码  |  是  |

  
  
  

  
