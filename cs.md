<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>小恐龙游戏</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
        }
        #dino {
            position: absolute;
            bottom: 0;
            left: 50px;
            width: 40px;
            height: 40px;
            background-color: #333;
        }
    </style>
</head>
<body>
    <div id="dino"></div>
    <script>
        const dino = document.getElementById('dino');
        let isJumping = false;

        function jump() {
            if (!isJumping) {
                isJumping = true;
                let position = 0;
                const jumpInterval = setInterval(() => {
                    if (position >= 150) {
                        clearInterval(jumpInterval);
                        const fallInterval = setInterval(() => {
                            if (position <= 0) {
                                clearInterval(fallInterval);
                                isJumping = false;
                            } else {
                                position -= 5;
                                dino.style.bottom = position + 'px';
                            }
                        }, 20);
                    } else {
                        position += 5;
                        dino.style.bottom = position + 'px';
                    }
                }, 20);
            }
        }

        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 32) {
                jump();
            }
        });
    </script>
</body>
</html>
