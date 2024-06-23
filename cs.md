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

function TrexRunnerBot() {
  const makeKeyArgs = (keyCode) => {
    const preventDefault = () => void 0;
    return {keyCode, preventDefault};
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
  return {conquerTheGame: conquerTheGame};
}
let bot = TrexRunnerBot();
let botInterval = setInterval(bot.conquerTheGame, 2);
