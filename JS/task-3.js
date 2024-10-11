function generatePassword(length = 8) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

function checkPassword(password, confirmPassword) {
    return password === confirmPassword;
}

function generateAndCheckPassword(length = 8) {
    const password = generatePassword(length);
    
    if (confirm("Бажаєте побачити згенерований пароль?")) {
        alert(`Згенерований пароль: ${password}`);
    }
    
    const userPassword = prompt("Введіть пароль для перевірки:");
    
    if (checkPassword(password, userPassword)) {
        alert("Паролі співпадають!");
    } else {
        alert("Паролі не співпадають.");
    }
}

generateAndCheckPassword(8);
