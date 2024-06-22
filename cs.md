<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown to 2024-05-15 15:57:00</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            text-align: center;
        }
        #countdown {
            font-size: 2em;
        }
    </style>
</head>
<body>
    <div id="countdown"></div>

    <script>
        function updateCountdown() {
            const targetDate = new Date('2024-05-15T15:57:00');
            const now = new Date();
            const diff = targetDate - now;

            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                document.getElementById('countdown').textContent = 
                    `${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
            } else {
                document.getElementById('countdown').textContent = "目标时间已过";
            }
        }

        updateCountdown(); // initial call to display countdown immediately
        setInterval(updateCountdown, 1000); // update countdown every second
    </script>
</body>
</html>
