<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Number Generator</title>
    <style>
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
        }
        .row {
            display: flex;
            justify-content: center;
            margin: 10px 0;
        }
        input {
            width: 100px;
            margin-right: 10px;
            text-align: center;
        }
        button {
            background-color: black;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }
        .success, .attempts {
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="row">
        <input type="text" id="textbox1" readonly>
        <input type="text" id="textbox2" readonly>
    </div>
    <div class="row">
        <button id="generateBtn">生成</button>
    </div>
    <div id="messageContainer"></div>
</div>

<script>
    let attemptCount = 0;

    document.getElementById('generateBtn').addEventListener('click', function() {
        attemptCount++;

        const randomNumber1 = Math.floor(Math.random() * 16) + 1;
        const randomNumber2 = Math.floor(Math.random() * 24) + 17;

        const textbox1 = document.getElementById('textbox1');
        const textbox2 = document.getElementById('textbox2');

        textbox1.value = randomNumber1;
        textbox2.value = randomNumber2;

        const messageContainer = document.getElementById('messageContainer');
        messageContainer.innerHTML = '';

        if ((randomNumber1 === 13 && randomNumber2 === 23) || (randomNumber1 === 23 && randomNumber2 === 13)) {
            const successMessage = document.createElement('div');
            successMessage.className = 'success';
            successMessage.textContent = '成功';

            const attemptMessage = document.createElement('div');
            attemptMessage.className = 'attempts';
            attemptMessage.textContent = `已尝试${attemptCount}次`;
            attemptMessage.style.border = '1px solid black';
            attemptMessage.style.padding = '10px';
            attemptMessage.style.width = '150px';
            attemptMessage.style.backgroundColor = '#f0f0f0';

            messageContainer.appendChild(successMessage);
            messageContainer.appendChild(attemptMessage);
        }
    });
</script>

</body>
</html>
