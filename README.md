# Normyan01.github.io  ![image](https://github.com/Normyan01/Normyan01.github.io/assets/169884063/2b1907ef-d9ed-4f97-8dba-4e2b7f1aa811)
<html>
    <body>
        <p style="color:red;">请勿传播！！！</p>
    </body>
</html>       

## [点击此处](https://ddkg.top)**访问院长网站！！！**    
## [点击此处](https://bjjh201703.com)一个不太好的东西

### [点击此处](https://normyan01.github.io/极域毁灭者.bat) 下载极域毁灭者
### [点击此处](https://normyan01.github.io/mjh) 孟姜黄牌手杖折叠椅
### [点击此处](https://normyan01.github.io/cp) 一些有趣的
### [点击此处](https://normyan01.github.io/wp) 网盘

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
