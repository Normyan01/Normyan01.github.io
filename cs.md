<!DOCTYPE html>
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
    </style>
</head>
<body>
    <div id="container">
        <input type="text" id="textBox" placeholder="Enter '123'">
    </div>

    <script>
        document.getElementById('textBox').addEventListener('input', function() {
            if (this.value === '123') {
                let container = document.getElementById('container');
                container.innerHTML = '<input type="text" value="456" readonly>';
            }
        });
    </script>
</body>
</html>

