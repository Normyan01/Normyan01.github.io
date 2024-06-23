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

document.addEventListener("DOMContentLoaded", function() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const generateButton = document.getElementById("generateButton");
    const successMessage = document.getElementById("successMessage");

    function getRandomNumber(exclude) {
        let number;
        do {
            number = Math.floor(Math.random() * 40) + 1;
        } while (number === exclude);
        return number;
    }

    generateButton.addEventListener("click", function() {
        const num1 = getRandomNumber(null);
        const num2 = getRandomNumber(num1);

        input1.value = num1;
        input2.value = num2;

        if ((num1 === 13 && num2 === 23) || (num1 === 23 && num2 === 13)) {
            successMessage.classList.remove("hidden");
        } else {
            successMessage.classList.add("hidden");
        }
    });
});
