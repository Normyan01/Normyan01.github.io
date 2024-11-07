# Normyan01.github.io 

<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>倒计时</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            font-size: 20px;
            margin-top: 20px;
            text-align: center;
        }

        #time-display {
            font-size: 50px;   /* 大号字体 */
            color: red;        /* 红色文字 */
        }
    </style>
</head>
<body>

    <p>距离发成绩还有 <span id="time-display">加载中...</span></p>

    <script>
        function updateCountdown() {
            // 设置目标时间（2024年11月8日8:50 UTC+8）
            const targetDate = new Date('2024-11-08T08:50:00+08:00');
            
            // 获取当前时间
            const now = new Date();
            
            // 计算时间差（毫秒）
            const timeDifference = targetDate - now;
            
            // 将毫秒转换为秒和毫秒
            const seconds = Math.floor(timeDifference / 1000);
            const milliseconds = timeDifference % 1000;

            // 更新页面显示
            const timeDisplay = document.getElementById('time-display');
            timeDisplay.textContent = `${seconds}秒 ${milliseconds}毫秒`;
        }

        // 每100毫秒更新一次
        setInterval(updateCountdown, 100);
    </script>

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
