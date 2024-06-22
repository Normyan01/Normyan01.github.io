<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>自动显示文本</title>
    <script>
        function checkInput() {
            var inputField = document.getElementById('inputField');
            if (inputField.value === '123') {
                inputField.value = '456';
            }
        }
    </script>
</head>
<body>
    <input type="text" id="inputField" oninput="checkInput()">
</body>
</html>
