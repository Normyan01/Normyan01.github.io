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
<title>飞机射击游戏</title>
<style>
    body {
        margin: 0;
        overflow: hidden;
        background-color: #f0f0f0;
    }
    #gameArea {
        width: 100vw;
        height: 100vh;
        position: relative;
    }
    #player {
        width: 50px;
        height: 50px;
        background-color: blue;
        position: absolute;
        bottom: 20px;
        left: calc(50% - 25px);
    }
    .bullet {
        width: 5px;
        height: 10px;
        background-color: red;
        position: absolute;
    }
    .obstacle {
        width: 30px;
        height: 30px;
        background-color: green;
        position: absolute;
        top: -30px;
        animation: moveObstacle 3s linear infinite;
    }
    @keyframes moveObstacle {
        0% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(100vh);
        }
    }
</style>
</head>
<body>
<div id="gameArea">
    <div id="player"></div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const gameArea = document.getElementById('gameArea');
    const player = document.getElementById('player');
    let score = 0;

    // 监听鼠标移动事件，控制飞机位置
    gameArea.addEventListener('mousemove', function(event) {
        let x = event.clientX - gameArea.offsetLeft;
        player.style.left = x - player.clientWidth / 2 + 'px';
    });

    // 监听鼠标点击事件，发射子弹
    gameArea.addEventListener('click', function(event) {
        shootBullet();
    });

    // 定义发射子弹的函数
    function shootBullet() {
        let bullet = document.createElement('div');
        bullet.className = 'bullet';
        bullet.style.left = parseInt(player.style.left) + player.clientWidth / 2 - 2.5 + 'px';
        bullet.style.bottom = '50px';
        gameArea.appendChild(bullet);

        // 子弹移动动画
        let bulletInterval = setInterval(function() {
            let bullets = document.getElementsByClassName('bullet');
            for (let i = 0; i < bullets.length; i++) {
                let bullet = bullets[i];
                bullet.style.bottom = parseInt(bullet.style.bottom) + 10 + 'px';

                // 检测子弹是否击中障碍物
                let obstacles = document.getElementsByClassName('obstacle');
                for (let j = 0; j < obstacles.length; j++) {
                    let obstacle = obstacles[j];
                    if (isCollision(bullet, obstacle)) {
                        obstacle.remove();
                        bullet.remove();
                        score++;
                        document.getElementById('score').textContent = 'Score: ' + score;
                    }
                }

                // 子弹出界移除
                if (parseInt(bullet.style.bottom) > window.innerHeight) {
                    bullet.remove();
                }
            }
        }, 50);
    }

    // 碰撞检测函数
    function isCollision(obj1, obj2) {
        let rect1 = obj1.getBoundingClientRect();
        let rect2 = obj2.getBoundingClientRect();
        return !(rect1.right < rect2.left || 
                 rect1.left > rect2.right || 
                 rect1.bottom < rect2.top || 
                 rect1.top > rect2.bottom);
    }

    // 创建障碍物
    setInterval(function() {
        let obstacle = document.createElement('div');
        obstacle.className = 'obstacle';
        obstacle.style.left = Math.random() * (gameArea.clientWidth - 30) + 'px';
        gameArea.appendChild(obstacle);
    }, 2000);
});
</script>

<p id="score" style="position: fixed; top: 10px; right: 10px; font-size: 18px;">Score: 0</p>

</body>
</html>
