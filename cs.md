<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Time Difference</title>
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
    </style>
</head>
<body>
    <div>
        <h1>Time until 2024-05-15 15:57:00</h1>
        <p id="timeDifference"></p>
    </div>

    <script>
        function updateTimeDifference() {
            const targetDate = new Date('2024-05-15T15:57:00');
            const now = new Date();
            const diff = targetDate - now;

            if (diff <= 0) {
                document.getElementById('timeDifference').innerText = 'The target date has passed.';
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('timeDifference').innerText = 
                `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        }

        updateTimeDifference();
        setInterval(updateTimeDifference, 1000);
    </script>
</body>
</html>
