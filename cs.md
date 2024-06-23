<!DOCTYPE html>
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
            text-align: center;
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
                `本站以运行 ${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
        }

        // Update the time duration every second
        setInterval(updateTimeDuration, 1000);
    </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Number Generator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <input type="text" id="input1" readonly>
        <input type="text" id="input2" readonly>
        <div id="generateButton" class="button">生成</div>
    </div>
    <div id="successMessage" class="hidden">成功</div>
    <script src="script.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Number Generator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f0f0f0;
        }
        .container {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .black-box {
            background-color: black;
            color: white;
            padding: 10px 20px;
            cursor: pointer;
        }
        .success-message {
            margin-top: 10px;
            font-size: 16px;
            color: green;
        }
    </style>
</head>
<body>
    <div class="container">
        <input type="text" id="textbox1" readonly>
        <input type="text" id="textbox2" readonly>
        <div class="black-box" onclick="generateNumbers()">生成</div>
    </div>
    <div class="success-message" id="successMessage"></div>

    <script>
        function generateNumbers() {
            const textbox1 = document.getElementById("textbox1");
            const textbox2 = document.getElementById("textbox2");
            const successMessage = document.getElementById("successMessage");

            let num1, num2;
            do {
                num1 = Math.floor(Math.random() * 40) + 1;
                num2 = Math.floor(Math.random() * 40) + 1;
            } while (num1 === num2);

            textbox1.value = num1;
            textbox2.value = num2;

            if ((num1 === 13 && num2 === 23) || (num1 === 23 && num2 === 13)) {
                successMessage.innerText = "成功";
            } else {
                successMessage.innerText = "";
            }
        }
    </script>
</body>
</html>
