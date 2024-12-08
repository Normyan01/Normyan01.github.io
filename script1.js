function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if ((username === 'Normyan' && password === 'Normyan.0809') ||
        (username === 'Ceshi' && password === 'Ceshiceshi')) {
        message.style.color = 'green';
        message.textContent = '登录成功！';
        
        // Redirect to the desired URL after 1 second
        setTimeout(() => {
            window.location.href = 'https://normyan01.github.io';
        }, 1000);
        
    } else {
        message.style.color = 'red';
        message.textContent = '账号或密码错误！';
    }
}
