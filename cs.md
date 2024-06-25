
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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>T-Rex Runner Bot</title>
</head>
<body>
    <script>
        function TrexRunnerBot() {
            const makeKeyArgs = (keyCode) => {
                const preventDefault = () => void 0;
                return { keyCode, preventDefault };
            };
            const upKeyArgs = makeKeyArgs(38);
            const downKeyArgs = makeKeyArgs(40);
            const startArgs = makeKeyArgs(32);
            if (!Runner().playing) {
                Runner().onKeyDown(startArgs);
                setTimeout(() => {
                    Runner().onKeyUp(startArgs);
                }, 500);
            }
            function conquerTheGame() {
                if (!Runner || !Runner().horizon.obstacles[0]) return;
                const obstacle = Runner().horizon.obstacles[0];
                if (obstacle.typeConfig && obstacle.typeConfig.type === 'SNACK') return;
                if (needsToTackle(obstacle) && closeEnoughToTackle(obstacle)) tackle(obstacle);
            }
            function needsToTackle(obstacle) {
                return obstacle.yPos !== 50;
            }
            function closeEnoughToTackle(obstacle) {
                return obstacle.xPos <= Runner().currentSpeed * 18;
            }
            function tackle(obstacle) {
                if (isDuckable(obstacle)) {
                    duck();
                } else {
                    jumpOver(obstacle);
                }
            }
            function isDuckable(obstacle) {
                return obstacle.yPos === 50;
            }
            function duck() {
                Runner().onKeyDown(downKeyArgs);
                setTimeout(() => {
                    Runner().onKeyUp(downKeyArgs);
                }, 500);
            }
            function jumpOver(obstacle) {
                if (isNextObstacleCloseTo(obstacle))
                    jumpFast();
                else
                    Runner().onKeyDown(upKeyArgs);
            }
            function isNextObstacleCloseTo(currentObstacle) {
                const nextObstacle = Runner().horizon.obstacles[1];

                return nextObstacle && nextObstacle.xPos - currentObstacle.xPos <= Runner().currentSpeed * 42;
            }
            function jumpFast() {
                Runner().onKeyDown(upKeyArgs);
                Runner().onKeyUp(upKeyArgs);
            }
            return { conquerTheGame: conquerTheGame };
        }
        let bot = TrexRunnerBot();
        let botInterval = setInterval(bot.conquerTheGame, 2);
    </script>
</body>
</html>
