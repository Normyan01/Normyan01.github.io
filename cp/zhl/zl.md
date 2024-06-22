# *ZL*       
#### [返回主页](https://normyan01.github.io)
## 于2024.6.11创建
### 2024.6.12前 略（后续可能会更）
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Box Change Example</title>
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
        textarea {
            width: 100%;
            height: 200px;
        }
    </style>
</head>
<body>
    <div id="container">
        <input type="text" id="textBox">
    </div>

    <script>
        document.getElementById('textBox').addEventListener('input', function() {
            if (this.value === 'j101210080927414') {
                let container = document.getElementById('container');
                container.innerHTML = `
                    <textarea readonly>
2024.6.12 放学时（约17:27）遇到*Z*像篮球场方向走（*L*在），大抵可以推算出正常情况下17:31分钱能到门口，约17:46分时，*Z*被接走。按往常惯例，*Z*家车一般在她等3-10分钟左右来，而这天等了至少15分钟，说明存在*Z*去找*L*的可能性。
2024.6.13 比原来收敛很多，上课互相看的次数和说话次数明显减少（也有可能是专门找着没人的时候至少我没看见） 唯一两个较为有趣的是 
     1.*Z*上课回答问题，*L*听着偷笑 2.*L*经常看向她的方向笑
2024.6.14 *Z*相对主动，英语课上（第7节），*L*从讲台回座位，*Z*盯着，共连续看5次
2024.6.17 中午发物理卷子，*L*专门关注了*Z*的成绩，并高兴的告诉说她上了中位数 两人参加表彰大会（每个班只有8个人） *Z*盯着*L*很多次，并指了他一次
2024.6.18 一起说话至少3次，道法课*Z*被叫帮助*L*
2024.6.19 物理被一起点名，*L*大声说话，*Z*偷偷看了一眼，*L*跟别的女生打闹，*Z*苦笑
2024.6.20 两个人说话3次，体育课天热，*L*衣服湿了，*Z瞟了一眼她，*Z*梳头，*L*盯着看
2024.6.21互相看，说话，数学课*L*和同桌打闹，*Z*跟着笑
                    </textarea>
                `;
            }
        });
    </script>
</body>
</html>

# 仅本人知道密码
