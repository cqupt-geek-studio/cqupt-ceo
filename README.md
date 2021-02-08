# **仿真辅助系统**



## 项目简介

​    该系统用于辅助学生和老师进行企业运营的模拟仿真实验，用户均为学校的老师和学生，主要功能如下：

* 帮助学生完成申请成为CEO，文件上传，创建公司，查看公司，以及在实验后的成员打分操作等等

* 帮助老师对学生和CEO的管理，如任命学生成为CEO，学生的旷课，迟到的情况管理，导出和导入学生信息等等

* 此外，系统还设置了超级管理员来对所有用户进行管理，可以为老师分配教学班等

  

## 项目目录

使用tree生成的src目录内容

```js
│  index.js
│  router.js
│  setupProxy.js       //开发时使用的代理，用于解决跨域问题
│  tree.txt                    //目录
│  
├─components
├─pages
│  │  App.js
│  │  
│  ├─ceo                    //CEO端
│  │  │  CEO.js
│  │  │  
│  │  ├─application
│  │  ├─components
│  │  │      Comfirm.js
│  │  │      Lists.js
│  │  │      MyTable.js
│  │  │      NavMenu.js
│  │  │      Router.js
│  │  │      WelcomeTitle.js
│  │  │      WithModal.js
│  │  │      
│  │  ├─config
│  │  │      defaultPagination.js
│  │  │      
│  │  ├─store
│  │  │      actionCreators.js
│  │  │      constants.js
│  │  │      index.js
│  │  │      reducer.js
│  │  │      
│  │  └─views
│  │      ├─application
│  │      │  │  index.js
│  │      │  │  
│  │      │  ├─components
│  │      │  │      ApplicationItem.js
│  │      │  │      
│  │      │  ├─consts
│  │      │  │      constants.js
│  │      │  │      
│  │      │  └─style
│  │      │          application.scss
│  │      │          
│  │      ├─company
│  │      │  │  index.js
│  │      │  │  
│  │      │  ├─components
│  │      │  │      CompanyItem.js
│  │      │  │      Member.js
│  │      │  │      MyCompany.js
│  │      │  │      
│  │      │  └─style
│  │      │          position.scss
│  │      │          
│  │      └─file
│  │          │  index.js
│  │          │  
│  │          └─components
│  │                  FileList.js
│  │                  Uploader.js
│  │                  
│  ├─manager                    //管理员端
│  │  │  Manager.js
│  │  │  
│  │  ├─components
│  │  │      AddClass.jsx
│  │  │      ChoseTeacher.jsx
│  │  │      DeleteClass.jsx
│  │  │      MenuClass.jsx
│  │  │      
│  │  ├─style
│  │  │      choseclass.scss
│  │  │      ImData.css
│  │  │      Nav.css
│  │  │      
│  │  └─view
│  │          ChoseClass.jsx
│  │          ImData.jsx
│  │          
│  ├─student                    //学生端
│  │      AllCompanies.jsx
│  │      CEO.jsx
│  │      ChosenClasses.jsx
│  │      CompanyMember.jsx
│  │      Detail.jsx
│  │      Join.jsx
│  │      MyCompany.jsx
│  │      Student.jsx
│  │      WriteWant.jsx
│  │      
│  └─teacher                    //老师端
│      ├─components
│      │      ChosenStuClass.jsx
│      │      ChoseStudent.jsx
│      │      NewsName.jsx
│      │      NewsType.jsx
│      │      SetCompany.jsx
│      │      SetOthers.jsx
│      │      SetPersonal.jsx
│      │      ShowScore.jsx
│      │      SignedCom.jsx
│      │      UnChosenStuClass.jsx
│      │      UnsignCom.jsx
│      │      
│      ├─content
│      │      Teacher.js
│      │      
│      ├─style
│      │      ComInfo.css
│      │      contentNav.css
│      │      StuInfo.css
│      │      VoSit.css
│      │      
│      └─view
│              ComInfo.js
│              Download.jsx
│              news.jsx
│              Set.jsx
│              Sign.jsx
│              StuClass.jsx
│              StuInfo.js
│              Teacher.js
│              VotSit.js
│              
├─redux                    //redux文件夹
│  │  actionTypes.js
│  │  store.js
│  │  
│  ├─actionCreators
│  │      creators.js
│  │      user.js
│  │      
│  ├─reducers
│  │      reducer.js
│  │      
│  └─sagas                    //中间键
│          index.js
│          
├─static
│  ├─images
│  └─style                    //样式文件
│          style.css
│          style.css.map
│          style.sass
│          style.scss
│          teacherStyle.css
│          teacherStyle.css.map
│          teacherStyle.scss
│          
└─until                    //页面中使用的函数及封装
    │  .Service.js.swp
    │  .Service_BASE_1018.js.swp
    │  .Service_LOCAL_1018.js.swp
    │  .Service_REMOTE_1018.js.swp
    │  BaseUrl.js                    //请求地址
    │  changeNav.js                    //保留导航栏高亮
    │  changePage.js                   //保留导航栏高亮
    │  encrypt.js                    //加密
    │  index.js
    │  Jquery.js
    │  Service.js                    //请求封装
    │  Service_BACKUP_1018.js
    │  Service_BASE_1018.js
    │  Service_LOCAL_1018.js
    │  Service_REMOTE_1018.js
    │  useInput.js
    │  useRequest.js
    │  
    └─api                    //页面中使用的接口封装
            ceo.js
            common.js
            isPPT.js
            LoginApi.js
            managerApi.js
            ManagerApi.js~Stashed changes_0
            StudentApi.js
            teacherApi.js
```



## 技术栈

* antd 

* react 

* react-dom 

* react-router 

* react-router-dom 

* redux 

* react-redux 

* redux-saga 

* axios 

* sass

* crypto-js 

  

## 项目运行方式

 springboot 



## 图例

### 登录界面

![login](https://github.com/cqupt-geek-studio/cqupt-ceo/blob/master/login.png)

### 学生提交公司申请

![wish](https://github.com/cqupt-geek-studio/cqupt-ceo/blob/master/wish.png)



### 管理员管理老师的班级

![manager](https://github.com/cqupt-geek-studio/cqupt-ceo/blob/master/manager.png)

### 确认删除文件

![delete](https://github.com/cqupt-geek-studio/cqupt-ceo/blob/master/delete.png)



##  项目亮点/难点

### 1. 通过页数来进行分批获取

项目要从后端获取的数据量比较大，所以前端在获取数据时，需要哪一页的数据，再发送相应的请求，只得到一页的数据渲染到页面即可，不必一次性把全部数据获取

### 2. 获取到的数据进行存储

当用户从一个页面切换到另一个页面，如果用户已经获取过了当前页面的数据，那么数据就会直接呈现在页面上，不用重新请求，一定程度上缓解了数据库的压力

### 3. 组件的优化

应用了生命组件函数来进行性能优化，不需要进行数据更新的组件不重新渲染

### 4. 用户登录状态过期检测

如果用户登录状态过期，那么在这个用户登录过期后发出的第一个请求中，就会提示用户，让用户重新登录，并且自动回到登录界面，不需要定时进行检查

### 5. 页面即时反馈

用户进行的每一个操作都会即时在页面上反馈，例如用户为CEO投票，如果投票成功，那么显示在该页面上的被投票的CEO的票数也会对应增加

### 6. 防止高并发导致业务来不及处理的问题

防止用户通过多次点击按钮来多次发送同一个请求，在用户发送请求后把按钮变为loading状态不让用户再点击，也使用了redux-saga的监听机制，在接受到一个请求后的一定时间内不再接受同样的action，也就不会发送同样的请求



## 项目存在的不足、优化

* 代码的格式，风格以及class的命名方式都没有进行规范
* 虽然已经经过调整，但是不同的页面的样式风格之间还是有些许差异
* 项目的文件目录格式没有规范，不同层次的文件层次没有分明
* 部分无用，多余的代码
* 功能比较简陋



## 接口文档

# 极客工作室企业仿真项目接口文档

## 1规范说明

### 1.1通信协议

HTTP协议

### 1.2请求方法

有get请求和post请求

### 1.3字节编码

HTTP通讯即报文BASE64编码均采用UTF-8字符集编码格式

### 1.4 格式说明

元素出现要求说明：

| 符号 | 说明                                        |
| ---- | ------------------------------------------- |
| R    | 报文中该元素必须出现（Required）            |
| O    | 报文中该元素可选出现（Optional）            |
| C    | 报文中该元素在一定条件下出现（Conditional） |

### 1.5 报文规范说明

1. 报文规范仅针对请求数据进行描述；
2. 报文规范中请求报文的内容为Http请求报文中RequestData值的明文内容；
3. 报文规范分为请求报文和响应报文。请求报文描述由发起方，响应报文由报文接收方响应。

### 1.6 请求报文结构

接口只接收两个参数 **RequestData** 和 **SignData** ，其中RequestData的值为请求内容，SignData的值为签名内容。

#### 1.6.1 参数说明

**RequestData（请求内容）：** 其为每次请求的具体参数，采用 JSON 格式，在方问每一个接口前会比对签名内容。

**SignData（签名内容）：** 请求参数（明文）的MD5加密字符串，用于校验RequestData是否合法。

#### 1.6.2 请求内容（RequestData）明文结构说明

采用JSON格式，其中包含Header（公有参数）、Body（私有参数）节点：

| 名称     | 描述                                                 | 备注                 |
| -------- | ---------------------------------------------------- | -------------------- |
| 公共参数 | 每个接口都包含的通用参数，以JSON格式存放在Header属性 | 详见以下公共参数说明 |
| 私有参数 | 每个接口特有的参数，以JSON格式存放在Body属性         | 详见每个接口定义     |

**公共参数说明：**

公共参数（Header）是用于标识产品及接口鉴权的参数，每次请求均需要携带这些参数：(登录和退出登录接口不需要携带这个参数，其他接口在请求头中都要携带token参数，登录之后，服务器会返回给前端token参数)

| 参数名称 | 类型   | 出现要求 | 描述                                                         |
| -------- | ------ | -------- | ------------------------------------------------------------ |
| token    | string | R        | 用户登录后token，没有登录则为空字符串，登录过期了也会提是过期，重新登录并进行拦截 |

**AES加密/解密函数示例：**

```java
/**
     * 加密
     *
     * @param cleartext 加密前的字符串
     * @return 加密后的字符串
     */
    public static String encrypt(String cleartext) {

        //------------------------------------------AES加密-------------------------------------
        //加密方式： AES128(CBC/PKCS7Padding) + Base64, 私钥：
        try {
            byte[] bytes = IV.getBytes(bm);
            Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
            IvParameterSpec zeroIv = new IvParameterSpec(IV.getBytes(bm));
            //两个参数，第一个为私钥字节数组， 第二个为加密方式 AES或者DES
            SecretKeySpec key = new SecretKeySpec(ASE_KEY.getBytes(bm), "AES");
            //实例化加密类，参数为加密方式，要写全
            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS7Padding"); //PKCS5Padding比PKCS7Padding效率高，PKCS7Padding可支持IOS加解密
            //初始化，此方法可以采用三种方式，按加密算法要求来添加。（1）无第三个参数（2）第三个参数为SecureRandom random = new SecureRandom();中random对象，随机数。(AES不可采用这种方法)（3）采用此代码中的IVParameterSpec
            cipher.init(Cipher.ENCRYPT_MODE, key, zeroIv);
            //------------------------------------------base64编码-------------------------------------
            //加密操作,返回加密后的字节数组，然后需要编码。主要编解码方式有Base64, HEX, UUE,7bit等等。此处看服务器需要什么编码方式
            //byte[] encryptedData = cipher.doFinal(cleartext.getBytes(bm));
            //return new BASE64Encoder().encode(encryptedData);
            //上下等同，只是导入包不同
            //加密后的字节数组
            byte[] encryptedData = cipher.doFinal(cleartext.getBytes(bm));
            //对加密后的字节数组进行base64编码
            //byte[] base64Data = org.apache.commons.codec.binary.Base64.encodeBase64(encryptedData);
            //将base64编码后的字节数组转化为字符串并返回
            return Hex.encodeHexString(encryptedData).toUpperCase();
            //------------------------------------------/base64编码-------------------------------------
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
        //------------------------------------------/AES加密-------------------------------------
    }
    /**
     * 解密
     *
     * @param encrypted 解密前的字符串（也就是加密后的字符串）
     * @return 解密后的字符串（也就是加密前的字符串）
     */
    public static String decrypt(String encrypted) {
        //---------------------------------------AES解密----------------------------------------
        try {
            Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
            //---------------------------------------base64解码---------------------------------------
            //byte[] byteMi = new BASE64Decoder().decodeBuffer(encrypted);
            //上下等同，只是导入包不同
            //将字符串转化为base64编码的字节数组
//            byte[] encryptedBase64Bytes = encrypted.getBytes();
            //将base64编码的字节数组转化为在加密之后的字节数组
            byte[] byteMi = Hex.decodeHex(encrypted);

            //---------------------------------------/base64解码---------------------------------------

            IvParameterSpec zeroIv = new IvParameterSpec(IV.getBytes(bm));
            SecretKeySpec key = new SecretKeySpec(
                    ASE_KEY.getBytes(bm), "AES");
            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS7Padding");
            //与加密时不同MODE:Cipher.DECRYPT_MODE
            cipher.init(Cipher.DECRYPT_MODE, key, zeroIv);
            byte[] decryptedData = cipher.doFinal(byteMi);
            return new String(decryptedData, bm);
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
        //---------------------------------------/AES解密----------------------------------------
    }
```

（密钥）
 GeEk_1s_AwEs0Me!  

### 1.7 响应报文结构

#### 1.7.1 结构说明

所有接口响应均采用JSON格式，如无特殊说明，每次请求的返回值中，都包含下列字段：

| 参数名称 | 类型   | 出现要求 | 描述     |
| -------- | ------ | -------- | -------- |
| Data     | object | R        | 响应内容 |
| Msg      | string | R        | 响应描述 |

## 2. 接口定义

## 老师端

### 2.1 密码登录

- **接口说明：** 密码登录

- **接口地址：**http://120.78.180.59:8000/login/user

- **请求类型：POST**

  | 参数名称  | 类型   | 出现要求 | 描述                         |
  | :-------- | ------ | -------- | ---------------------------- |
  | teacherId | string | R        | 老师登录或者管理员登录的账号 |
  | studentId | string | R        | 学生登录的账号               |
  | password  | string | R        | 密码                         |

#### 2.1.2 返回结果

| 参数名称 | 类型   | 出现要求 | 描述         |
| -------- | ------ | -------- | ------------ |
| message  | string | R        | 响应信息描述 |
| data     | object | R        | 具体响应信息 |

示例：

```
失败
{
    "message": "用户或密码错误",
    "data": null
}

成功（学生）
{
    "message": "学生登录",
    "data": {
        "id": 9217,
        "userId": "2010211506",
        "userName": "黄林",
        "academy": "经济管理学院",
        "grade": "2012",
        "discipline": "信息管理类",
        "cls": "0311203",
        "sex": "男",
        "phone": null,
        "type": "student",
        "password": "6D257F9D3882DB6553E1A929746C7D38",
        "securityQuestion": null,
        "answer": null,
        "registerDate": null
    }
}

成功
（老师，通过type判断是老师还是管理员登陆）
{
    "flag": false,
    "page": 0,
    "message": "老师登录",
    "data": {
        "id": 1632,
        "userId": "tiansh",
        "userName": "田帅辉",
        "academy": "",
        "grade": "",
        "discipline": "",
        "cls": null,
        "sex": "",
        "phone": "",
        "type": "teacher",
        "password": "6D257F9D3882DB6553E1A929746C7D38",
        "securityQuestion": null,
        "answer": null,
        "registerDate": null,
        "teacherId": null,
        "studentId": null,
        "state": 0,
        "count": 0,
        "position": null
    },
    "error": null
}
管理员登录
{
    "flag": false,
    "page": 0,
    "message": "管理员登录",
    "data": {
        "id": 1,
        "userId": "a001",
        "userName": "超级管理员",
        "academy": "",
        "grade": null,
        "discipline": null,
        "cls": null,
        "sex": "男",
        "phone": null,
        "type": "admin",
        "password": "11FA88E3FF3A4E13FC06431516E7ABB7",
        "securityQuestion": "Q1",
        "answer": "1",
        "registerDate": null,
        "teacherId": null,
        "studentId": null,
        "state": 0,
        "count": 0,
        "position": null
    },
    "error": null
}


```

### 2.2退出登录

- **接口地址：**http://120.78.180.59:8000/login/quituser

- **请求类型：POST**

  | 参数名称 | 类型   | 出现要求 | 描述         |
  | :------- | ------ | -------- | ------------ |
  | userId   | string | R        | 要退出的账号 |

#### 2.2.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 响应信息描述 |
| data     | object  | O        | 具体响应信息 |
| flag     | boolean | R        | 响应是否成功 |
| page     | int     | O        |              |
| error    | string  | O        | 错误信息     |

示例：

```
退出登录成功
{
    "flag": true,
    "page": 0,
    "message": "退出登录",
    "data": null,
    "error": null
}
```

### 2.3展示老师选择的班级

- **接口地址：**http://120.78.180.59:8000/teacher/exitclass

- **请求类型：GET**

  | 参数名称    | 类型   | 出现要求 | 描述             |
  | :---------- | ------ | -------- | ---------------- |
  | currentPage | int    | R        | 当前所在的页数   |
  | pageSize1   | int    | R        | 一页显示几条数据 |
  | teacherId   | string | R        | 当前老师的账号   |

#### 2.3.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 响应信息描述 |
| data     | object  | O        | 具体响应信息 |
| flag     | boolean | R        | 响应是否成功 |
| page     | int     | O        |              |
| error    | string  | O        | 错误信息     |

示例：

```
失败
{
    "flag": false,
    "page": 0,
    "message": "没有选择的班级",
    "data": null,
    "error": null
}
成功
{
    "flag": false,
    "page": 0,
    "message": "有选择的班级",
    "data": [
        {
            "cls": "0311203"
        },
        {
            "cls": "0311201"
        }
    ],
    "error": null
}
```

### 2.4展示老师没有选择的班级

- **接口地址：**http://120.78.180.59:8000/teacher/allclass

- **请求类型：GET**

  | 参数名称    | 类型   | 出现要求 | 描述           |
  | :---------- | ------ | -------- | -------------- |
  | currentPage | int    | R        | 当前所在的页数 |
  | teacherId   | string | R        | 当前老师的账号 |

#### 2.4.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | O        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": false,
    "page": 79,
    "message": "已经显示所有没有选择的班级",
    "data": [
        {
            "cls": "0331301"
        },
        {
            "cls": "123456"
        },
        {
            "cls": "0721202"
        },
        {
            "cls": "0381203"
        }
    ],
    "error": null
}
```

### 2.5老师开起ceo投票

- **接口地址：**http://120.78.180.59:8000/teacher/runceo

- **请求类型：POST**

  | 参数名称   | 类型   | 出现要求 | 描述               |
  | :--------- | ------ | -------- | ------------------ |
  | teachclass | string | R        | 开启哪个教学班投票 |

#### 2.5.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": "投票已经开启",
    "data": 2,
    "error": null
}
//说明老师没有选择班级，要先选择班级才可以开启投票
{
    "flag": false,
    "page": 0,
    "message": "请先选择班级",
    "data": 0,
    "error": null
}error": null
}
```

### 2.6老师关闭ceo投票

- **接口地址：**http://120.78.180.59:8000/teacher/closeceo

- **请求类型：POST**

  | 参数名称   | 类型   | 出现要求 | 描述               |
  | :--------- | ------ | -------- | ------------------ |
  | teachclass | string | R        | 开启哪个教学班投票 |

#### 2.6.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
0,1,2是不同的事件
{
    "flag": false,
    "page": 0,
    "message": "关闭成功",
    "data": 1,
    "error": null
}
{
    "flag": false,
    "page": 0,
    "message": "投票已经关闭",
    "data": 2,
    "error": null
}

{
    "flag": false,
    "page": 0,
    "message": "请先选择班级",
    "data": 0,
    "error": null
}
```

### 2.7老师展示ceo更改公司名称

- **接口地址：**http://120.78.180.59:8000/teacher/changeName

- **请求类型：POST**

  | 参数名称    | 类型   | 出现要求 | 描述           |
  | :---------- | ------ | -------- | -------------- |
  | teachclass  | string | R        | 展示哪个教学班 |
  | currentPage | string | R        | 当前页数       |

#### 2.7.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | R        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
其中message是公司原来的名字
{
        "flag": true,
        "page": 1,
        "message": "新公司",
        "data": {
            "userId": "2016211032",
            "userName": "甘雅婷",
            "cls": "03011701",
            "professional": "0301",
            "discipline": "信息管理与信息系统",
            "academy": "经济管理学院",
            "grade": "2017",
            "teachclass": "SJ00201A2031780003",
            "sex": null,
            "type": null,
            "password": null,
            "phone": null,
            "securityQuestion": null,
            "answer": null,
            "registerDate": null,
            "id": 1,
            "teacherId": null,
            "studentId": null,
            "list": null,
            "state": 0,
            "count": 0,
            "position": null
        },
        "error": "测试改名字"
    },
```

### 2.8老师同意ceo更改公司名称

- **接口地址：**http://120.78.180.59:8000/teacher/agree

- **请求类型：POST**

  | 参数名称    | 类型   | 出现要求 | 描述           |
  | :---------- | ------ | -------- | -------------- |
  | ceo         | string | R        | 哪个ceo的申请  |
  | companyName | string | R        | 要更改成的名字 |

#### 2.8.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
 		"flag": true,
        "page": 1,
        "message": "修改成功",
        "data":null,
        "error":null
}
```

### 2.9老师同意ceo更改公司名称

- **接口地址：**http://120.78.180.59:8000/teacher/refuse

- **请求类型：POST**

  | 参数名称 | 类型   | 出现要求 | 描述          |
  | :------- | ------ | -------- | ------------- |
  | ceo      | string | R        | 哪个ceo的申请 |

#### 2.9.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
 		"flag": true,
        "page": 1,
        "message": "拒绝成功",
        "data":null,
        "error":null
}
```

### 2.10老师删除学生创建的公司

- **接口地址：**http://120.78.180.59:8000/teacher/deletecompany

- **请求类型：POST**

  | 参数名称    | 类型   | 出现要求 | 描述     |
  | :---------- | ------ | -------- | -------- |
  | ceo         | string | R        | ceo账号  |
  | companyName | string | R        | 公司名称 |
  | teachclass  | string | R        | 教学班   |

#### 2.10.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": "成功删除公司",
    "data": null,
    "error": null
}
```

### 2.11老师撤销ceo

- **接口地址：**http://120.78.180.59:8000/teacher/deleteceo

- **请求类型：POST**

  | 参数名称  | 类型   | 出现要求 | 描述            |
  | :-------- | ------ | -------- | --------------- |
  | studentId | string | R        | 要撤销的ceo账号 |

#### 2.11.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
//根据flag判断
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": null,
    "error": null
}
```

### 2.12老师选择ceo

- **接口地址：**http://120.78.180.59:8000/teacher/decideceo

- **请求类型：POST**

  | 参数名称  | 类型   | 出现要求 | 描述             |
  | :-------- | ------ | -------- | ---------------- |
  | studentId | string | R        | 要选择的学生账号 |

#### 2.12.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
//根据flag判断
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": null,
    "error": null
}
```

### 2.13老师给公司打分

- **接口地址：**http://120.78.180.59:8000/teacher/companyscore

- **请求类型：POST**

  | 参数名称     | 类型   | 出现要求 | 描述              |
  | :----------- | ------ | -------- | ----------------- |
  | ceo          | string | R        | 那个公司ceo的账号 |
  | scoreTeacher | int    | R        | 分数              |

#### 2.13.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
//根据flag判断
{
    "flag": true,
    "page": 0,
    "message": 打分成功,
    "data": null,
    "error": null
}
```

### 2.14老师修改宣讲投票状态

- **接口地址：**http://120.78.180.59:8000/teacher/speakvote

- **请求类型：POST**

  | 参数名称   | 类型   | 出现要求 | 描述                                         |
  | :--------- | ------ | -------- | -------------------------------------------- |
  | flag       | int    | R        | 表示是开启投票还是关闭，1表示开启，0表示关闭 |
  | teacherId  | string | R        | 老师id                                       |
  | teachclass | string | R        | 教学班                                       |

#### 2.14.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": false,
    "page": 0,
    "message": "投票已经是关闭的",
    "data": null,
    "error": null
}

{
    "flag": true,
    "page": 0,
    "message": "投票成功开启",
    "data": null,
    "error": null
}
```

### 2.15老师给学生打分

- **接口地址：**http://120.78.180.59:8000/teacher/setstuscore

- **请求类型：POST**

  | 参数名称     | 类型   | 出现要求 | 描述     |
  | :----------- | ------ | -------- | -------- |
  | studentId    | int    | R        | 学生账号 |
  | teacherId    | string | R        | 老师账号 |
  | teacherScore | string | R        | 分数     |

#### 2.15.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": null,
    "error": null
}
```

### 2.16展示所以学生信息

- **接口地址：**http://120.78.180.59:8000/teacher/showall

- **请求类型：POST**

  | 参数名称    | 类型   | 出现要求 | 描述     |
  | :---------- | ------ | -------- | -------- |
  | teachclass  | string | R        | 教学班   |
  | currentPage | string | R        | 当前页数 |

#### 2.16.2 返回结果

集合类型

示例：

```
[
    {
        "academy": "信息管理与信息系统",
        "cls": "03011701",
        "companyName": "天下第一贸易",
        "companyScore": 0.0,
        "discipline": "0301",
        "grade": "经济管理学院",
        "page": 187,
        "personalScore": 80.0,
        "studentId": "2016211032",
        "userName": "甘雅婷"
    },
    {
        "academy": "信息管理与信息系统",
        "cls": "03011701",
        "companyName": "第一家新闻机构",
        "companyScore": 0.0,
        "discipline": "0301",
        "grade": "经济管理学院",
        "page": 187,
        "personalScore": 80.0,
        "studentId": "2017210952",
        "userName": "刘石"
    }
]
```

### 2.17修改学生迟到或者在勤状态

- **接口地址：**http://120.78.180.59:8000/teacher/sign

- **请求类型：POST**

  | 参数名称   | 类型   | 出现要求 | 描述                                |
  | :--------- | ------ | -------- | ----------------------------------- |
  | teachclass | string | R        | 教学班                              |
  | studentId  | string | R        | 学生账号                            |
  | scoreSign  | double | R        | 10为第一次插入，其他值为更改状态    |
  | sign       | int    | R        | 0表示正常上课，1表示迟到，2表示旷课 |
  | addtime    | string | R        | 第一次不传给我，第二次才传给我      |

#### 2.17.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": 修改成功,
    "data": 2020-1-5,//放缺勤时间
    "error": null
}
```



### 2.18展示所有缺勤学生

- **接口地址：**http://120.78.180.59:8000/teacher/noSign

- **请求类型：POST**

  | 参数名称    | 类型   | 出现要求 | 描述     |
  | :---------- | ------ | -------- | -------- |
  | teachclass  | string | R        | 教学班   |
  | currentPage | int    | R        | 当前页数 |

#### 2.18.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": 修改成功,
    "data": 缺勤的学生信息  //集合类型
    "error": null
}
```

### 2.19老师是否开启投票

- **接口地址：**http://120.78.180.59:8000/teacher/checkceo

- **请求类型：POST**

  | 参数名称   | 类型   | 出现要求 | 描述   |
  | :--------- | ------ | -------- | ------ |
  | teachclass | string | R        | 教学班 |

#### 2.19.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": 已经开启投票,
    "data": null
    "error": null
}
```

### 2.20老师给学生选公司

- **接口地址：**http://120.78.180.59:8000/teacher/selectStu

- **请求类型：POST**

  | 参数名称    | 类型   | 出现要求 | 描述                     |
  | :---------- | ------ | -------- | ------------------------ |
  | ceoId       | string | R        | 被选择的ceo账号          |
  | studentId   | string | R        | 要被添加进公司的学生账号 |
  | companyName | string | R        | 公司名称                 |

#### 2.20.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": 成功添加,
    "data": null
    "error": null
}
```

### 2.21老师一键生成公司等级

- **接口地址：**http://120.78.180.59:8000/teacher/companyLevel

- **请求类型：POST**

  | 参数名称   | 类型   | 出现要求 | 描述   |
  | :--------- | ------ | -------- | ------ |
  | teachclass | string | R        | 教学班 |

#### 2.21.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": 等级生成成功,
    "data": null
    "error": null
}
```

### 2.22判断老师是否开启宣讲投票

- **接口地址：**http://120.78.180.59:8000/teacher/checkSpeak

- **请求类型：POST**

  | 参数名称   | 类型   | 出现要求 | 描述       |
  | :--------- | ------ | -------- | ---------- |
  | teachclass | string | R        | 教学班     |
  | teacherId  | string | R        | 老师的账号 |

#### 2.22.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": 已经开启投票,
    "data": null
    "error": null
}
```

### 2.23老师更改公司类型

- **接口地址：**http://120.78.180.59:8000/teacher/updateType

- **请求类型：POST**

  | 参数名称 | 类型   | 出现要求 | 描述         |
  | :------- | ------ | -------- | ------------ |
  | ceo      | string | R        | ceo账号      |
  | type     | string | R        | 公司类型中文 |

#### 2.23.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": 更改成功,
    "data": null
    "error": null
}
```

### 2.24老师搜索学生信息

- **接口地址：**http://120.78.180.59:8000/teacher/search

- **请求类型：POST**

  | 参数名称    | 类型   | 出现要求 | 描述     |
  | :---------- | ------ | -------- | -------- |
  | studentId   | string | R        | 学生账号 |
  | currentPage | string | R        | 当前页数 |

#### 2.24.2 返回结果

示例：

```
[
    {
    	"page":1,	 //页数
        "userName": "xxx",
        "academy": "经济管理",
        "professional": "xxx",
        "xxx":"xxx"
        ....
    },
    {
    .....
    }
]
```

### 2.25选择班级时搜索老师

- **接口地址：**http://120.78.180.59:8000/teacher/searchTeacher

- **请求类型：POST**

  | 参数名称    | 类型   | 出现要求 | 描述               |
  | :---------- | ------ | -------- | ------------------ |
  | studentId   | string | R        | 老师名字的模糊查询 |
  | currentPage | string | R        | 当前页数           |

#### 2.25.2 返回结果

示例：

```
[
    {
    	"page":1,   //页数
        "userName": "xxx",
        "academy": "经济管理",
        "professional": "xxx",
        "xxx":"xxx"
        ....
    },
    {
    .....
    }
]
```



## 管理员端

### 3.1管理员导入excel教学班

- **接口地址：**http://120.78.180.59:8000/admin/stufile

- **接口类型：POST（formdate）**

  | 参数名称 | 类型           | 出现要求 | 描述                    |
  | :------- | -------------- | -------- | ----------------------- |
  | stufile  | file(formdate) | R        | excel文件，表头类型一致 |

#### 3.1.2 返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | R        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": 一共导入xx信息,导入成功
    "data": null,
    "error": null
}
```



### 3.2管理员为老师批量选择班级

- **接口地址：**http://120.78.180.59:8000/admin/addclass

- **请求类型：POST**

  参数类型：

  ```json
  类似于这种格式
  {
      "list": [
          {
              "teacherId":"1",
              "teachclass":"0311203"
          },
          {
              "teacherId":"1",
              "teachclass":"0311201"
          }
      ]
  }
  ```

  | 参数名称   | 类型   | 出现要求 | 描述     |
  | ---------- | ------ | -------- | -------- |
  | teacherId  | string | R        | 老师账号 |
  | teachclass | string | R        | 教学班   |

#### 3.2.2返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | O        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
//添加成功
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": null,
    "error": null
}
//添加失败
{
    "flag": false,
    "page": 0,
    "message": null,
    "data": null,
    "error": null
}
```

### 3.3管理员为老师批量删除班级

- **接口地址：**http://120.78.180.59:8000/admin/deleteclass

- **请求类型：GET**

  参数类型：

  ```json
  类似于这种格式
  {
      "list": [
          {
              "teacherId":"1",
              "teachclass":"0101"
          },
          {
             "teacherId":"2",
              "teachclass":"0202"
          }
      ]
  }
  ```

  | 参数名称   | 类型   | 出现要求 | 描述     |
  | ---------- | ------ | -------- | -------- |
  | teacherId  | string | R        | 老师账号 |
  | teachclass | string | R        | 教学班   |

####  3.3.2返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | O        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": "成功删除",
    "data": null,
    "error": null
}

{
    "flag": false,
    "page": 0,
    "message": "没有选择这个班级",
    "data": null,
    "error": null
}
```

### 3.4管理员展示所有老师

- **接口地址：**http://120.78.180.59:8000/admin/showteacher

- **接口类型：POST**

  | 参数名称    | 类型 | 出现要求 | 描述     |
  | :---------- | ---- | -------- | -------- |
  | currentPage | int  | R        | 当前页数 |

#### 3.4.2 返回结果

示例：

```
类似于这种格式
{
    "list": [
        {
            "teacherId":"1",
            "academy":"经济管理"
            "xxx":"xxx"...
        },
        {
           "teacherId":"2",
            "academy":"经济管理"
            "xxx":"xxx"...
        }
    ]
}
```







## 文件管理

### 4.1导出成绩

- **接口地址：**http://120.78.180.59:8000/upload/export

- **请求类型:POST**

  | 参数名称   | 类型   | 出现要求 | 描述   |
  | :--------- | ------ | -------- | ------ |
  | teachclass | string | R        | 教学班 |

#### 4.1.2 返回结果

一个文件

示例：

![image.png](https://sjwx.easydoc.xyz/56647738/files/kibc1kdk.png)

### 4.2上传ppt文件

- **接口地址：**http://120.78.180.59:8000/upload/up

- **请求类型：POST**

  | 参数名称   | 类型            | 出现要求 | 描述          |
  | ---------- | --------------- | -------- | ------------- |
  | studentId  | string          | R        | 学生账号      |
  | file       | file(form-date) | R        | 上传的ppt文件 |
  | teachclass | string          | R        | 教学班        |

####  4.2.2返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | O        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "error": "25",//相当于这个文件在数据库中的id，需要前端保存，下载请求的时候，就发送这个id过来
    "flag": true,
    "message": "C:/Users/Administrator/Downloads7.txt",//文件保存的位置，本地测试现在没有问题，服务器地址现在还未知
    "page": 0
}
```

### 4.3删除上传的ppt文件

- **接口地址：**http://120.78.180.59:8000/upload/delete

- **请求类型：POST**

  | 参数名称 | 类型   | 出现要求 | 描述                  |
  | -------- | ------ | -------- | --------------------- |
  | id       | string | R        | 上传文件中返回的error |

####  4.3.2返回结果

| 参数名称 | 类型    | 出现要求 | 描述         |
| -------- | ------- | -------- | ------------ |
| message  | string  | R        | 描述信息     |
| data     | object  | O        | 具体响应信息 |
| flag     | boolean | O        | 响应是否成功 |
| page     | int     | O        | 页数         |
| error    | string  | O        | 错误信息     |

示例：

```
{
    "flag": true,
    "page": 0,
    "message": "成功删除",
    "data": null,
    "error": null
}
```

### 4.4下载上传的ppt文件

- **接口地址：**http://120.78.180.59:8000/upload/download

- **请求类型：GET**

  | 参数名称 | 类型   | 出现要求 | 描述                  |
  | -------- | ------ | -------- | --------------------- |
  | id       | string | R        | 上传文件中返回的error |
  | userId   | string | R        | 下载人的账号          |

####  4.3.2返回结果

示例：

![image.png](https://sjwx.easydoc.xyz/56647738/files/kibc56fp.png)

## 

### 4.4展示所有上传的ppt文件

- **接口地址：**http://120.78.180.59:8000/upload/showall

- **请求类型：POST**

  | 参数名称    | 类型   | 出现要求 | 描述     |
  | ----------- | ------ | -------- | -------- |
  | teachclass  | string | R        | 教学班   |
  | currentPage | int    | R        | 当前页数 |

####  4.4.2返回结果

| 参数名称   | 类型   | 出现要求 | 描述     |
| ---------- | ------ | -------- | -------- |
| fileName   | string | R        | 文件名称 |
| filepath   | string | R        | 总页数   |
| id         | int    | R        | 文件id   |
| studentId  | int    | R        | 页数     |
| teachclass | string | R        | 教学班   |

示例：

```
[
    {
        "fileName": "新建文本文档.txt",
        "filePath": "1",
        "id": 1,
        "studentId": "2016211032",
        "teachclass": "SJ00201A2031780003"
    }
]
```

### 

### 学生端

# CEO接口文档

### 5.1创建公司

URL：http://120.78.180.59:8089/student/createCompany

请求方式：POST

请求参数：

|    字段     |   说明   |  类型  | 备注 | 是否必填 |
| :---------: | :------: | :----: | :--: | :------: |
|  studentId  |  学生ID  | String |      |    是    |
| companyName |  公司名  | String |      |    是    |
|    type     | 公司类型 | String |      |    是    |

 #### 5.1.2返回结果

```
测试代码：
studentId:2016211032
companyName:第一贸易企业
type:贸易企业

成功
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": null,
    "error": null
}

如果ceo重复创建公司
第二次使用
studentId:2016211032
companyName:第一贸易企业
type:贸易企业

失败
{
    "flag": false,
    "page": 0,
    "message": "您已经创建了公司，不能重复创建",
    "data": null,
    "error": null
}
如果学生不是ceo：
studentId:201621103
companyName:第一贸易企业
type:贸易企业

失败
{
    "flag": false,
    "page": 0,
    "message": "该同学不是ceo，无法创建公司",
    "data": null,
    "error": null
}
```

### 5.2为ceo竞选投票

URL：http://120.78.180.59:8089/student/voteForCeo

请求方式：POST

请求参数：

|   字段    |       说明       |  类型  | 备注 | 是否必填 |
| :-------: | :--------------: | :----: | :--: | :------: |
|   ceoId   | 被投票的候选人ID | String |      |    是    |
| studentId |   投票同学的ID   | String |      |    是    |

####5.2.2返回结果

```
测试已经使用：
ceoId:2016211032
studentId:2017210955

成功
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": null,
    "error": null
}

第二次使用：

失败
已经投过票
{
    "flag": false,
    "page": 0,
    "message": "该同学投过票了，不能反复投票",
    "data": null
}

失败：
老师未开启投票
{
    "flag": false,
    "page": 0,
    "message": "老师未开启投票，无法投票",
    "data": null,
    "error": null
}

可以使用：
ceoId:2016211032
studentId:2016211032 2017210956 2017210957
```

### 5.3展示所有公司

URL：http://120.78.180.59:8089/student/showCompany

请求方式：POST

请求参数：

|    字段    |   说明   |  类型  | 备注 | 是否必填 |
| :--------: | :------: | :----: | :--: | :------: |
| teachclass | 教学班级 | String |      |    是    |

####5.3.2返回结果

```
会传给前端所有数据，前端自己分页，有总条数
这里已经把投票的排名处理好，排在前面的就是count多的公司

调用：
teachclass:SJ00201A2031780003
//studentId:2016211032 
currentPage:1

成功
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": {
        "studentId": null,
        "teacherId": null,
        "teachclass": null,
        "totalNumber": 1,
        "currentPage": 1,
        "totalPage": 1,
        "object": [
            {
                "companyID": 0,
                "type": "贸易企业",
                "companyName": "第一贸易企业",
                "ceo": "2016211032",
                "ceoName": "甘雅婷",
                "scoreTeacher": 0.0,
                "studentNum": 1,
                "creatTime": "2020-11-30",
                "teacherId": null,
                "teachclass": "SJ00201A2031780003",
                "ppt": null,
                "count": "0",
                "typeCode": 0,
                "companyScore": 0.0,
                "level": 0
            }
        ]
    },
    "error": null
}
```

### 5.4 参加ceo竞选

URL：http://120.78.180.59:8089/student/runForCeo

请求方式：POST

请求参数：

|   字段    |       说明       |  类型  | 备注 | 是否必填 |
| :-------: | :--------------: | :----: | :--: | :------: |
| studentId | 参加竞选的学生ID | String |      |    是    |

 #### 5.4.2返回结果

```
成功
{
    "flag": true,
    "page": 0,
    "message": "您成功加入了ceo的竞选行列",
    "data": null,
    "error": null
}
若是已经参加竞选
{
    "flag": false,
    "page": 0,
    "message": "您已经参与ceo的竞选",
    "data": null,
    "error": null
}

已经加入：
studentId:2016211032 2017210952

未加入（只能用一次）：2017210955 2017210956 2017210957
```

### 5.5 展示所有ceo竞选和投票情况

URL：http://120.78.180.59:8089/student/showCeoVote

请求方式：POST

请求参数：

|    字段    |   说明   |  类型  | 备注 | 是否必填 |
| :--------: | :------: | :----: | :--: | :------: |
| teachclass | 教学班级 | String |      |    是    |

 #### 5.5.2返回结果

```
调用：
currentPage:1
//teachclass:SJ00201A2031780003
studentId:2016211032 

成功
（这里只需要主要totalNumber，currentPage，totalPage，userName，count投票个数，state 若为0，展示为“未成为ceo”，为1则展示“已成为ceo”）
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": {
        "studentId": null,
        "teacherId": null,
        "teachclass": null,
        "totalNumber": 2,
        "currentPage": 1,
        "totalPage": 1,
        "object": [
            {
                "userId": null,
                "userName": "甘雅婷",
                "cls": null,
                "professional": null,
                "discipline": null,
                "academy": null,
                "grade": null,
                "teachclass": "SJ00201A2031780003",
                "sex": null,
                "type": null,
                "password": null,
                "phone": null,
                "securityQuestion": null,
                "answer": null,
                "registerDate": null,
                "id": 1,
                "teacherId": null,
                "studentId": "2016211032",
                "list": null,
                "state": 1,
                "count": 1,
                "position": null,
                "sign": 0,
                "addtime": null,
                "scoreSign": 0.0
            },
            {
                "userId": null,
                "userName": "刘石",
                "cls": null,
                "professional": null,
                "discipline": null,
                "academy": null,
                "grade": null,
                "teachclass": "SJ00201A2031780003",
                "sex": null,
                "type": null,
                "password": null,
                "phone": null,
                "securityQuestion": null,
                "answer": null,
                "registerDate": null,
                "id": 2,
                "teacherId": null,
                "studentId": "2017210952",
                "list": null,
                "state": 1,
                "count": 0,
                "position": null,
                "sign": 0,
                "addtime": null,
                "scoreSign": 0.0
            }
        ]
    },
    "error": null
}
```

### 5.6 同学向公司提交申请

URL：http://120.78.180.59:8089/application/addApplication

请求方式：POST

请求参数：

|    字段     |   说明   |  类型  | 备注 | 是否必填 |
| :---------: | :------: | :----: | :--: | :------: |
|  studentId  | 学生的ID | String |      |    是    |
| companyName | 公司名称 | String |      |    是    |
|    level    |   等级   | String |      |    是    |

 #### 5.6.2返回结果

```
调用：——传json数组
[{
    "studentId":"2017210966",
    "companyName":"第一贸易企业",
    "level":1
},{
    "studentId":"2017210966",
    "companyName":"第一家新闻机构",
    "level":2
}]

成功
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": null,
    "error": null
}

当多个申请申请了同一个公司
调用：
[{
    "studentId":"2017210966",
    "companyName":"第一贸易企业",
    "level":1
},{
    "studentId":"2017210966",
    "companyName":"第一贸易企业",
    "level":2
}]
失败
{
    "flag": false,
    "page": 0,
    "message": "一家公司只能投一个志愿",
    "data": null,
    "error": null
}

前端测代码请改一下studentId，一下提供，每个使用一次
2017210968
2017210969
2017210970

前端要控制一下一个学生只能写写6个申请，有个专门写申请的界面。
```

### 5.7 展示申请

URL：http://120.78.180.59:8089/application/showApplication

请求方式：POST

请求参数：

|    字段     |   说明   |  类型  | 备注 | 是否必填 |
| :---------: | :------: | :----: | :--: | :------: |
| currentPage | 当前页数 |  int   |      |          |
|  studentId  |  学生ID  | String |      |    是    |
| teachclass  | 教学班级 | String |      |    是    |

 #### 5.7.2返回结果

```
普通学生调用——查看自己的申请：
studentId:2017210959
currentPage:1

{
    "flag": true,
    "page": 0,
    "message": null,
    "data": {
        "studentId": null,
        "teachclass": null,
        "totalNumber": 1,
        "currentPage": 1,
        "totalPage": 1,
        "object": [
            {
                "id": 2,
                "studentId": "2017210959",
                "studentName": "魏雨欣",
                "companyName": "第一贸易企业",
                "level": 1,
                "creatTime": "2020-11-29T16:00:00.000+00:00",
                "teachclass": "SJ00201A2031780003",
                "ceoId": null,
                "teacherId": null,
                "academy": "信息管理与信息系统",
                "state": "已同意"
            }
        ]
    },
    "error": null
}

ceo调用——查看自己公司的申请(后台识别ceo)
studentId:2017210952
currentPage:1

{
    "flag": true,
    "page": 0,
    "message": null,
    "data": {
        "studentId": null,
        "teachclass": null,
        "totalNumber": 2,
        "currentPage": 1,
        "totalPage": 1,
        "object": [
            {
                "id": 5,
                "studentId": "2017210960",
                "studentName": "任飞燕",
                "companyName": "第一家新闻机构",
                "level": 2,
                "creatTime": "2020-11-29T16:00:00.000+00:00",
                "teachclass": "SJ00201A2031780003",
                "ceoId": null,
                "teacherId": null,
                "academy": "信息管理与信息系统",
                "state": "等待中"
            },
            {
                "id": 7,
                "studentId": "2017210966",
                "studentName": "杨练",
                "companyName": "第一家新闻机构",
                "level": 2,
                "creatTime": "2020-11-30T16:00:00.000+00:00",
                "teachclass": "SJ00201A2031780003",
                "ceoId": null,
                "teacherId": null,
                "academy": "信息管理与信息系统",
                "state": "等待中"
            }
        ]
    },
    "error": null
}

老师查询所有申请：
currentPage:1
teachclass:SJ00201A2031780003

{
    "flag": true,
    "page": 0,
    "message": null,
    "data": {
        "studentId": null,
        "teachclass": null,
        "totalNumber": 5,
        "currentPage": 1,
        "totalPage": 1,
        "object": [
            {
                "id": 2,
                "studentId": "2017210959",
                "studentName": "魏雨欣",
                "companyName": "第一贸易企业",
                "level": 1,
                "creatTime": "2020-11-29T16:00:00.000+00:00",
                "teachclass": "SJ00201A2031780003",
                "ceoId": null,
                "teacherId": null,
                "academy": "信息管理与信息系统",
                "state": "已同意"
            },
            {
                "id": 3,
                "studentId": "2017210960",
                "studentName": "任飞燕",
                "companyName": "第一贸易企业",
                "level": 1,
                "creatTime": "2020-11-29T16:00:00.000+00:00",
                "teachclass": "SJ00201A2031780003",
                "ceoId": null,
                "teacherId": null,
                "academy": "信息管理与信息系统",
                "state": "等待中"
            },
            {
                "id": 5,
                "studentId": "2017210960",
                "studentName": "任飞燕",
                "companyName": "第一家新闻机构",
                "level": 2,
                "creatTime": "2020-11-29T16:00:00.000+00:00",
                "teachclass": "SJ00201A2031780003",
                "ceoId": null,
                "teacherId": null,
                "academy": "信息管理与信息系统",
                "state": "等待中"
            },
            {
                "id": 6,
                "studentId": "2017210966",
                "studentName": "杨练",
                "companyName": "第一贸易企业",
                "level": 1,
                "creatTime": "2020-11-30T16:00:00.000+00:00",
                "teachclass": "SJ00201A2031780003",
                "ceoId": null,
                "teacherId": null,
                "academy": "信息管理与信息系统",
                "state": "等待中"
            },
            {
                "id": 7,
                "studentId": "2017210966",
                "studentName": "杨练",
                "companyName": "第一家新闻机构",
                "level": 2,
                "creatTime": "2020-11-30T16:00:00.000+00:00",
                "teachclass": "SJ00201A2031780003",
                "ceoId": null,
                "teacherId": null,
                "academy": "信息管理与信息系统",
                "state": "等待中"
            }
        ]
    },
    "error": null
}
```

### 5.8 ceo同意申请

URL：http://120.78.180.59:8089/application/agreeApplication

请求方式：POST

请求参数：

|    字段     |   说明   |  类型  | 备注 | 是否必填 |
| :---------: | :------: | :----: | :--: | :------: |
|    ceoId    | ceo的id  | String |      |    是    |
|  studentId  |  学生id  | String |      |    是    |
| companyName | 公司名称 | String |      |    是    |

#### 5.8.2返回结果

```
调用：
ceoId:2016211032
companyName:第一贸易企业
studentId:2017210959
成功
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": null,
    "error": null
}
失败
公司满员
{
    "flag": false,
    "page": 0,
    "message": "无法添加此成员，公司已满员",
    "data": null,
    "error": null
}
同学已经加入别的公司
{
    "flag": false,
    "page": 0,
    "message": "抱歉，该同学已经加入其它公司",
    "data": null,
    "error": null
}
此班级同学已经达到上限
{
    "flag": false,
    "page": 0,
    "message": "同一个班级只能添加指定数量同学",
    "data": null,
    "error": null
}
```

### 5.9 ceo设置职位

URL：http://120.78.180.59:8089/student/setPosition

请求方式：POST

请求参数：

|   字段    |   说明   |  类型  | 备注 | 是否必填 |
| :-------: | :------: | :----: | :--: | :------: |
|   ceoId   | ceo的ID  | String |      |    是    |
| studentId | 学生的ID | String |      |    是    |
| position  |   职位   | String |      |    是    |

#### 5.9.2 返回结果

```
成功
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": null,
    "error": null
}
失败
当ceo修改其他公司的员工
{
    "flag": false,
    "page": 0,
    "message": "只能操作自己公司成员职位",
    "data": null,
    "error": null
}
当ceo想修改自己的职位
{
    "flag": false,
    "page": 0,
    "message": "ceo不能改自己的职位",
    "data": null,
    "error": null
}
```

### 5.10 展示公司成员

URL：http://120.78.180.59:8089/student/showCompanyMember

请求方式：POST

请求参数：

|   字段    |   说明   |  类型  | 备注 | 是否必填 |
| :-------: | :------: | :----: | :--: | :------: |
| studentId | 学生的ID | String |      |    是    |

 #### 5.10.2返回结果

```
调用：
studentId:2017210959
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": [
        {
            "id": 985,
            "ceoId": 0,
            "userName": "甘雅婷",
            "studentId": "2016211032",
            "companyName": "第一贸易企业",
            "position": "ceo",
            "teacherId": "1",
            "personalScore": 10,
            "academy": "信息管理与信息系统"
        },
        {
            "id": 991,
            "ceoId": 0,
            "userName": "魏雨欣",
            "studentId": "2017210959",
            "companyName": "第一贸易企业",
            "position": null,
            "teacherId": "1",
            "personalScore": 10,
            "academy": "信息管理与信息系统"
        }
    ],
    "error": null
}

这个老师端用不了
```

### 5.11 为公司投票

URL：http://120.78.180.59:8089/student/voteForCompany

请求方式：POST

请求参数：

|   字段    |          说明           |  类型  | 备注 | 是否必填 |
| :-------: | :---------------------: | :----: | :--: | :------: |
| studentId |        学生的ID         | String |      |    是    |
|   ceoId   | 用ceo的id来准确定位公司 | String |      |    是    |

 #### 5.11.2返回结果

```
调用：
studentId:2016211032
ceoId:2017210952

成功
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": null,
    "error": null
}

再次调用
studentId:2016211032
ceo:2017210952

失败
{
    "flag": false,
    "page": 0,
    "message": "该同学投过票了，不能反复投票",
    "data": null,
    "error": null
}

失败 老师为开启投票
{
    "flag": false,
    "page": 0,
    "message": "老师未开启投票，无法投票",
    "data": null,
    "error": null
}

此时可使用（仅一次）
studentId:2016211032
ceo：2016211032

studentId：2017210952
ceo:2017210952
```

### 5.12添加公司改名的申请

URL：http://120.78.180.59:8089/student//changeCompanyName

请求方式：POST

请求参数：

|    字段     |   说明   |  类型  | 备注 | 是否必填 |
| :---------: | :------: | :----: | :--: | :------: |
|     ceo     | ceo的ID  | String |      |    是    |
| companyName | 改的名字 | String |      |    是    |

#### 5.12.2返回结果

```
调用：
ceo:2016211032
companyName:天下第一贸易
成功
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": null,
    "error": null
}

```

### 5.13展示配置

URL：http://120.78.180.59:8089/admin/showConfig

请求方式：POST

请求参数：

|    字段    |   说明   |  类型  | 备注 | 是否必填 |
| :--------: | :------: | :----: | :--: | :------: |
| teachclass | 教学班级 | String |      |    是    |

 #### 5.13.2返回结果

```
调用：
teachclass:SJ00201A2031780003
成功
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": {
        "id": 1652,
        "teachclass": "SJ00201A2031780003",
        "ceoScore": 0.3,
        "memberScore": 0.6,
        "signScore": 0.1,
        "companyScore": 0.5,
        "newsScore": 0.1,
        "bankScore": 0.1,
        "accountScore": 0.1,
        "tradeScore": 0.1,
        "revenueScore": 0.1,
        "agencyScore": 0.4,
        "fromCompanyScore": 0.6,
        "late": 5,
        "absence": 10,
        "sameClassMember": 3,
        "companyNum": 7
    },
    "error": null
}
```

### 5.14 修改配置 个人分数占比

URL：http://120.78.180.59:8089/admin/updateConfigMember

请求方式：POST

请求参数：

|    字段     |     说明     |  类型  | 备注 | 是否必填 |
| :---------: | :----------: | :----: | :--: | :------: |
|  ceoScore   | ceo打分占比  | float  |      |    是    |
| memberScore | 成员分数占比 | float  |      |    是    |
|  signScore  | 签到分数占比 | float  |      |    是    |
| teachclass  |   教学班级   | String |      |    是    |

 #### 5.14.2返回结果

```
调用：
ceoScore:1
memberScore:2
signScore:1
teachclass：SJ00201A2031780003

失败
{
    "flag": false,
    "page": 0,
    "message": "比例错误不允许修改配置",
    "data": null,
    "error": null
}

调用
ceoScore:0.1
memberScore:0.1
signScore:0.8
teachclass：SJ00201A2031780003
只有三个数和为1，才能成功（没事干别调用，因为执行时间要好几分钟，处理数据量比较大）
成功
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": {
        "id": 1652,
        "teachclass": "SJ00201A2031780003",
        "ceoScore": 0.1,
        "memberScore": 0.1,
        "signScore": 0.8,
        "companyScore": 0.5,
        "newsScore": 0.1,
        "bankScore": 0.1,
        "accountScore": 0.1,
        "tradeScore": 0.1,
        "revenueScore": 0.1,
        "agencyScore": 0.4,
        "fromCompanyScore": 0.6,
        "late": 5,
        "absence": 10,
        "sameClassMember": 3,
        "companyNum": 7
    },
    "error": null
}

```

### 5.15 修改配置 公司成绩占比

URL：http://120.78.180.59:8089/admin/updateConfigCompany

请求方式：POST

请求参数：

|       字段       |         说明         |  类型  | 备注 | 是否必填 |
| :--------------: | :------------------: | :----: | :--: | :------: |
|   companyScore   | 老师给公司打分的占比 | float  |      |    是    |
|     newScore     |   新闻机构打分占比   | float  |      |    是    |
|    bankScore     |     银行打分占比     | float  |      |    是    |
|   accountScore   |  会计事务所打分占比  | float  |      |    是    |
|    tradeScore    |    工商局打分占比    | float  |      |    是    |
|   revenueScore   |    税务局打分占比    | float  |      |    是    |
|   agencyScore    | 老师给机构的打分占比 | float  |      |    是    |
| fromCompanyScore | 公司给机构打分的占比 | float  |      |    是    |
|    teachclass    |       教学班级       | String |      |    是    |

 #### 5.15.2返回结果

```
前6项和为1，以及后两项和也为1，才能调用成功，
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": {
        "id": 1652,
        "teachclass": "SJ00201A2031780003",
        "ceoScore": 0.1,
        "memberScore": 0.1,
        "signScore": 0.8,
        "companyScore": 0.5,
        "newsScore": 0.1,
        "bankScore": 0.1,
        "accountScore": 0.1,
        "tradeScore": 0.1,
        "revenueScore": 0.1,
        "agencyScore": 0.4,
        "fromCompanyScore": 0.6,
        "late": 5,
        "absence": 10,
        "sameClassMember": 3,
        "companyNum": 7
    },
    "error": null
}
```

### 5.16 修改配置 其他占比

URL：http://120.78.180.59:8089/admin/updateConfigOther

请求方式：POST

请求参数：

|      字段       |        说明        |  类型  | 备注 | 是否必填 |
| :-------------: | :----------------: | :----: | :--: | :------: |
|      late       |      迟到扣分      |  int   |      |    是    |
|     absence     |      缺勤扣分      |  int   |      |    是    |
| sameClassMember | 允许同班级最大人数 |  int   |      |    是    |
|   companyNum    |  公司允许最大人数  |  int   |      |    是    |
|   teachclass    |      教学班级      | String |      |          |

 #### 5.16.2返回结果

```
{
    "flag": true,
    "page": 0,
    "message": null,
    "data": {
        "id": 1652,
        "teachclass": "SJ00201A2031780003",
        "ceoScore": 0.1,
        "memberScore": 0.1,
        "signScore": 0.8,
        "companyScore": 0.5,
        "newsScore": 0.1,
        "bankScore": 0.1,
        "accountScore": 0.1,
        "tradeScore": 0.1,
        "revenueScore": 0.1,
        "agencyScore": 0.4,
        "fromCompanyScore": 0.6,
        "late": 5,
        "absence": 10,
        "sameClassMember": 3,
        "companyNum": 7
    },
    "error": null
}
```

### 5.17 学生互评成绩

URL：http://120.78.180.59:8089/score/stuScore

请求方式：POST

请求参数：

|  字段  |     说明     |  类型  | 备注 | 是否必填 |
| :----: | :----------: | :----: | :--: | :------: |
| score  |     打分     | String |      |    是    |
| scored | 被打分人的ID | String |      |    是    |
| scorer |  打分人的ID  | String |      |    是    |

#### 5.17.2返回结果

```

```

### 5.18 ceo给其他公司打分

URL：http://120.78.180.59:8089/score/companyScore

请求方式：POST

请求参数：

|  字段  |     说明     |  类型  | 备注 | 是否必填 |
| :----: | :----------: | :----: | :--: | :------: |
| score  |     打分     | String |      |    是    |
| scored | 被打分人的ID | String |      |    是    |
| scorer |  打分人的ID  | String |      |    是    |

#### 5.18.2返回结果

```

```

### 5.19 显示成绩优秀良好人数

URL：http://120.78.180.59:8089/score/showScoreNum

请求方式：POST

请求参数：

|   字段    |   说明   |  类型  | 备注 | 是否必填 |
| :-------: | :------: | :----: | :--: | :------: |
| studentId | 学生的ID | String |      |    是    |

 ####5.19.2返回结果

```

```

### 5.20 查看自己公司信息

URL：http://120.78.180.59:8089/student/showCompanySelf

请求方式：POST

请求参数：

|   字段    |   说明   |  类型  | 备注 | 是否必填 |
| :-------: | :------: | :----: | :--: | :------: |
| studentId | 学生的ID | String |      |    是    |

#### 5.20.2返回结果

```

```

### 5.21 展示已打分同学信息

URL：http://120.78.180.59:8089/score/showScore

请求方式：POST

请求参数：

|   字段    |   说明   |  类型  | 备注 | 是否必填 |
| :-------: | :------: | :----: | :--: | :------: |
| studentId | 学生的ID | String |      |    是    |

 #### 5.21.2返回结果

```

```

### 5.22 查看自己公司信息

URL：http://120.78.180.59:8089/student/showNoCompanyStu

请求方式：POST

请求参数：

|    字段    |  说明  |  类型  | 备注 | 是否必填 |
| :--------: | :----: | :----: | :--: | :------: |
| teachclass | 教学班 | String |      |    是    |

 #### 5.22.2返回结果

```

```

### 5.23 取消ceo投票

URL：http://120.78.180.59:8089/student/cancelVoteForCeo

请求方式：POST

请求参数：

|   字段    |     说明      |  类型  | 备注 | 是否必填 |
| :-------: | :-----------: | :----: | :--: | :------: |
| studentId |   学生的ID    | String |      |    是    |
|   ceoId   | 已被投票的ceo | String |      |    是    |

#### 5.23.2 返回结果

```

```





## 参与项目成员以及项目负责人

成员：

 前端

1. 尹彦臻
2. 冉渝
3. 冯宇
4. 娄欣雨
5. 秦元浩(负责人)

 后端

1. 何科伟(负责人)
2. 陈瑞



## 项目上线时间

2021-1-12



## 代码的 GitHub 地址

 https://github.com/cqupt-geek-studio/cqupt-ceo 



## 项目的线上地址

 172.22.4.2 



## 项目部署服务器

重庆邮电大学实验室内部服务器
