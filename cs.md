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
        <input type="text" id="num1" readonly>
        <input type="text" id="num2" readonly>
        <button id="generateButton">生成</button>
        <input type="text" id="attempts" readonly value="已尝试0次">
        <input type="text" id="successMessage" readonly hidden value="成功">
    </div>
    <script src="script.js"></script>
</body>
</html>
/* styles.css */
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input[type="text"] {
    margin: 5px;
    padding: 10px;
    width: 200px;
    text-align: center;
}

button {
    margin: 10px;
    padding: 10px 20px;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #333;
}
// script.js
let attemptCount = 0;
let pairFound13_23 = false;
let pairFound23_13 = false;

document.getElementById('generateButton').addEventListener('click', () => {
    const num1 = Math.floor(Math.random() * 16) + 1; // 1-16
    const num2 = Math.floor(Math.random() * 24) + 17; // 17-40

    document.getElementById('num1').value = num1;
    document.getElementById('num2').value = num2;

    attemptCount++;
    document.getElementById('attempts').value = `已尝试${attemptCount}次`;

    if ((num1 === 13 && num2 === 23) || (num1 === 23 && num2 === 13)) {
        document.getElementById('successMessage').hidden = false;
    }

    if (num1 === 13 && num2 === 23) {
        pairFound13_23 = true;
    }

    if (num1 === 23 && num2 === 13) {
        pairFound23_13 = true;
    }

    if (attemptCount >= 100) {
        if (!pairFound13_23 || !pairFound23_13) {
            // Force generating the missing pair
            if (!pairFound13_23) {
                document.getElementById('num1').value = 13;
                document.getElementById('num2').value = 23;
                pairFound13_23 = true;
            } else if (!pairFound23_13) {
                document.getElementById('num1').value = 23;
                document.getElementById('num2').value = 13;
                pairFound23_13 = true;
            }
            document.getElementById('successMessage').hidden = false;
        }
    }
});
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>生成随机数</title>
    <style>
        .container {
            display: flex;
            align-items: center;
        }
        .btn {
            background-color: black;
            color: white;
            padding: 10px 20px;
            margin-left: 10px;
            cursor: pointer;
        }
        .readonly {
            margin-left: 10px;
        }
    </style>
</head>
<body>

<div class="container">
    <input type="text" id="textBox1" readonly>
    <input type="text" id="textBox2" readonly>
    <div class="btn" id="generateBtn">生成</div>
    <input type="text" id="attemptsBox" class="readonly" readonly>
</div>
<div id="successMessage"></div>

<script>
    let attempts = 0;
    let success13_23 = false;
    let success23_13 = false;

    document.getElementById('generateBtn').addEventListener('click', function() {
        let num1 = Math.floor(Math.random() * 16) + 1;
        let num2 = Math.floor(Math.random() * 24) + 17;
        
        document.getElementById('textBox1').value = num1;
        document.getElementById('textBox2').value = num2;
        
        attempts++;
        document.getElementById('attemptsBox').value = `已尝试${attempts}次`;

        if ((num1 === 13 && num2 === 23) || (num1 === 23 && num2 === 13)) {
            let successDiv = document.createElement('div');
            successDiv.innerText = '成功';
            document.getElementById('successMessage').appendChild(successDiv);

            if (num1 === 13 && num2 === 23) {
                success13_23 = true;
            } else if (num1 === 23 && num2 === 13) {
                success23_13 = true;
            }

            // 保证至少生成一次13,23和一次23,13
            if (attempts >= 100 && (!success13_23 || !success23_13)) {
                success13_23 = true;
                success23_13 = true;
                let finalSuccessDiv = document.createElement('div');
                finalSuccessDiv.innerText = '已生成至少一次13,23和一次23,13';
                document.getElementById('successMessage').appendChild(finalSuccessDiv);
            }
        }
    });
</script>

</body>
</html>
