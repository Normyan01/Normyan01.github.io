<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>高级计时器</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            margin: 0;
        }
        .timer-container {
            text-align: center;
        }
        .display {
            font-size: 48px;
            margin-bottom: 20px;
        }
        .buttons, .laps {
            margin-bottom: 20px;
        }
        button {
            font-size: 18px;
            padding: 10px 20px;
            margin: 5px;
        }
        .laps {
            max-height: 200px;
            overflow-y: auto;
            background-color: #fff;
            border: 1px solid #ccc;
            padding: 10px;
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="timer-container">
        <div class="display" id="display">00:00:00.000</div>
        <div class="buttons">
            <button id="startStopBtn">开始</button>
            <button id="resetBtn">复原</button>
            <button id="lapBtn">计次</button>
        </div>
        <div class="laps" id="laps"></div>
    </div>

    <script>
        let startTime = 0;
        let elapsedTime = 0;
        let timerInterval;
        let running = false;

        const display = document.getElementById('display');
        const startStopBtn = document.getElementById('startStopBtn');
        const resetBtn = document.getElementById('resetBtn');
        const lapBtn = document.getElementById('lapBtn');
        const laps = document.getElementById('laps');

        startStopBtn.addEventListener('click', () => {
            if (!running) {
                startTime = Date.now() - elapsedTime;
                timerInterval = setInterval(updateDisplay, 1);
                startStopBtn.textContent = '停止';
                running = true;
            } else {
                clearInterval(timerInterval);
                elapsedTime = Date.now() - startTime;
                startStopBtn.textContent = '开始';
                running = false;
            }
        });

        resetBtn.addEventListener('click', () => {
            clearInterval(timerInterval);
            startTime = 0;
            elapsedTime = 0;
            running = false;
            startStopBtn.textContent = '开始';
            display.textContent = '00:00:00.000';
            laps.innerHTML = '';
        });

        lapBtn.addEventListener('click', () => {
            if (running) {
                const lapTime = document.createElement('div');
                lapTime.textContent = display.textContent;
                laps.appendChild(lapTime);
            }
        });

        function updateDisplay() {
            elapsedTime = Date.now() - startTime;
            const time = new Date(elapsedTime);

            const minutes = String(time.getUTCMinutes()).padStart(2, '0');
            const seconds = String(time.getUTCSeconds()).padStart(2, '0');
            const milliseconds = String(time.getUTCMilliseconds()).padStart(3, '0');

            display.textContent = `${minutes}:${seconds}.${milliseconds}`;
        }
    </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>恐龙游戏</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f0f0f0;
            margin: 0;
        }
        .game-container {
            position: relative;
            width: 800px;
            height: 200px;
            background-color: #fff;
            border: 2px solid #000;
            overflow: hidden;
        }
        .dino {
            position: absolute;
            bottom: 0;
            left: 50px;
            width: 40px;
            height: 40px;
            background-color: green;
        }
        .obstacle {
            position: absolute;
            bottom: 0;
            width: 20px;
            height: 40px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="game-container">
        <div class="dino" id="dino"></div>
    </div>

    <script>
        const dino = document.getElementById('dino');
        const gameContainer = document.querySelector('.game-container');
        let isJumping = false;
        let gravity = 0.9;
        let position = 0;

        function control(e) {
            if (e.keyCode === 32) { // Space key
                if (!isJumping) {
                    isJumping = true;
                    jump();
                }
            }
        }

        document.addEventListener('keydown', control);

        function jump() {
            let count = 0;
            let upInterval = setInterval(() => {
                if (count === 15) {
                    clearInterval(upInterval);
                    let downInterval = setInterval(() => {
                        if (count === 0) {
                            clearInterval(downInterval);
                            isJumping = false;
                        }
                        position -= 5;
                        count--;
                        position = position * gravity;
                        dino.style.bottom = position + 'px';
                    }, 20);
                }
                position += 30;
                count++;
                position = position * gravity;
                dino.style.bottom = position + 'px';
            }, 20);
        }

        function generateObstacle() {
            let obstaclePosition = 800;
            const obstacle = document.createElement('div');
            obstacle.classList.add('obstacle');
            gameContainer.appendChild(obstacle);
            obstacle.style.left = obstaclePosition + 'px';

            let timerId = setInterval(() => {
                if (obstaclePosition > 0 && obstaclePosition < 70 && position < 40) {
                    clearInterval(timerId);
                    alert('Game Over');
                    while (gameContainer.firstChild) {
                        gameContainer.removeChild(gameContainer.firstChild);
                    }
                }
                obstaclePosition -= 10;
                obstacle.style.left = obstaclePosition + 'px';
            }, 20);

            setTimeout(generateObstacle, Math.random() * 4000);
        }

        generateObstacle();
    </script>
</body>
</html>
