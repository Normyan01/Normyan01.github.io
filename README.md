<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .login-container {
            text-align: center;
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
        input {
            display: block;
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            font-size: 18px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            width: 100%;
            padding: 10px;
            font-size: 18px;
            background-color: #5cb85c;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        button:hover {
            background-color: #4cae4c;
        }
        .message {
            font-size: 20px;
            margin-top: 20px;
        }
    </style>
</head>
<body>

    <div class="login-container">
        <h1>Login</h1>
        <input type="text" id="username" placeholder="账号" />
        <input type="password" id="password" placeholder="密码" />
        <button onclick="validateLogin()">登录</button>
        <div class="message" id="message"></div>
    </div>

    <!-- Link to external JavaScript file -->
    <script src="script1.js"></script>

</body>
</html>

## [点击此处](https://ddkg.top)**访问院长网站！！！**    
## [点击此处](https://bjjh201703.com)一个不太好的东西

### [点击此处](https://normyan01.github.io/极域毁灭者.bat) 下载极域毁灭者
### [点击此处](https://normyan01.github.io/wp) 网盘
### [点击此处](https://normyan01.github.io/js) 一些事
### [点击此处](https://normyan01.github.io/bd)测显卡

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Time Duration Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        #container {
            text-align: left;
            width: 80%;
        }
    </style>
</head>
<body>
    <div id="container">
        <p id="timeDuration"></p>
    </div>

    <script>
        function updateTimeDuration() {
            const targetDate = new Date('2024-05-15T15:57:00');
            const now = new Date();
            const duration = Math.floor((now - targetDate) / 1000); // Duration in seconds
            
            const days = Math.floor(duration / (24 * 3600));
            const hours = Math.floor((duration % (24 * 3600)) / 3600);
            const minutes = Math.floor((duration % 3600) / 60);
            const seconds = duration % 60;
            
            document.getElementById('timeDuration').innerText =
                `本站已运行 ${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
        }

        // Update the time duration every second
        setInterval(updateTimeDuration, 1000);
    </script>
</body>
</html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: #333; /* 设置背景颜色 */
            color: white; /* 设置文本颜色 */
            text-align: center; /* 居中文本 */
            padding: 10px; /* 添加一些内边距 */
        }
        .footer span:first-child {
            font-family: cursive; /* 使用 cursive 字体样式 */
        }
        .footer span:last-child {
            font-family: serif; /* 使用 serif 字体样式 */
            margin-right: 30px; /* 距离最右侧的间距 */
        }
    </style>
</head>
<body>
    <!-- 页面内容 -->
    <div class="footer">
        <span>by Charlie Normyan</span> <!-- 最左侧文本 -->
        <span style="float: right;">V1.0</span> <!-- 最右侧文本 -->
    </div>
</body>
</html>
