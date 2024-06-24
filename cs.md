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
    let isShooting = false;

    // 监听鼠标移动事件，控制飞机位置和子弹发射点
    gameArea.addEventListener('mousemove', function(event) {
        let x = event.clientX - gameArea.offsetLeft;
        player.style.left = x - player.clientWidth / 2 + 'px';
    });

    // 监听鼠标按下和松开事件，控制连续发射
    gameArea.addEventListener('mousedown', function(event) {
        isShooting = true;
        shootBullets();
    });

    gameArea.addEventListener('mouseup', function(event) {
        isShooting = false;
    });

    // 发射子弹
    function shootBullets() {
        if (!isShooting) return;

        let bullet = document.createElement('div');
        bullet.className = 'bullet';
        let playerRect = player.getBoundingClientRect();
        bullet.style.left = playerRect.left + player.clientWidth / 2 - 2.5 + 'px';
        bullet.style.bottom = playerRect.bottom + 'px';
        gameArea.appendChild(bullet);

        // 子弹移动动画
        let bulletInterval = setInterval(function() {
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
        }, 50);

        // 继续发射子弹
        setTimeout(shootBullets, 150);
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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Surfing Game</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
            background-color: #87CEEB; /* 海洋蓝 */
        }
        canvas {
            display: block;
            margin: 0 auto;
            background-color: #FFE4B5; /* 沙滩黄 */
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas" width="800" height="600"></canvas>
    <script>
        // 获取画布和上下文
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        // 游戏状态
        let score = 0;
        let gameSpeed = 1;
        let gameOver = false;

        // 角色属性
        const surfer = {
            x: 100,
            y: canvas.height - 100,
            width: 50,
            height: 50,
            color: '#FF6347' // 火红色
        };

        // 障碍物数组
        const obstacles = [];

        // 障碍物类型
        const obstacleTypes = [
            { color: '#8B4513', width: 50, height: 50, speed: 1.5 }, // 棕色
            { color: '#696969', width: 80, height: 30, speed: 1 },   // 深灰色
            { color: '#2E8B57', width: 40, height: 60, speed: 2 }    // 绿色
        ];

        // 绘制角色
        function drawSurfer() {
            ctx.fillStyle = surfer.color;
            ctx.fillRect(surfer.x, surfer.y, surfer.width, surfer.height);
        }

        // 绘制障碍物
        function drawObstacles() {
            obstacles.forEach(obstacle => {
                ctx.fillStyle = obstacle.color;
                ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
            });
        }

        // 更新游戏状态
        function update() {
            // 清除画布
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 绘制背景和角色
            ctx.fillStyle = '#87CEEB';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            drawSurfer();

            // 移动和检测碰撞
            obstacles.forEach((obstacle, index) => {
                obstacle.y += obstacle.speed * gameSpeed;

                // 碰撞检测
                if (checkCollision(surfer, obstacle)) {
                    gameOver = true;
                }

                // 移除超出画布的障碍物
                if (obstacle.y > canvas.height) {
                    score++;
                    obstacles.splice(index, 1);
                }
            });

            // 绘制障碍物
            drawObstacles();

            // 绘制分数
            ctx.fillStyle = '#000000';
            ctx.font = '24px Arial';
            ctx.fillText(`Score: ${score}`, 10, 30);

            // 游戏结束处理
            if (!gameOver) {
                requestAnimationFrame(update);
            } else {
                ctx.fillText('Game Over!', canvas.width / 2 - 80, canvas.height / 2);
            }
        }

        // 生成障碍物
        function generateObstacles() {
            const obstacleType = obstacleTypes[Math.floor(Math.random() * obstacleTypes.length)];
            const obstacle = {
                x: Math.random() * (canvas.width - obstacleType.width),
                y: -obstacleType.height,
                width: obstacleType.width,
                height: obstacleType.height,
                color: obstacleType.color,
                speed: obstacleType.speed
            };
            obstacles.push(obstacle);
        }

        // 每隔一段时间生成障碍物
        setInterval(generateObstacles, 1500);

        // 碰撞检测
        function checkCollision(rect1, rect2) {
            return rect1.x < rect2.x + rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.y + rect1.height > rect2.y;
        }

        // 监听键盘事件
        window.addEventListener('keydown', function (e) {
            if (e.key === 'ArrowLeft' && surfer.x > 0) {
                surfer.x -= 10;
            }
            if (e.key === 'ArrowRight' && surfer.x < canvas.width - surfer.width) {
                surfer.x += 10;
            }
        });

        // 启动游戏
        update();

    </script>
</body>
</html>
