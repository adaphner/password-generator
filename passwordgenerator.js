// password generator
const generateRandomInt = (max, min) => Math.round(Math.random() * (max - min + 1)) + min;
function passwordGenerator() {
    let passwordLength = generateRandomInt(10, 15);
    let password = '';
    const characters = 'abcdefghijklmNOPQRSTUVWXYZ0123456789~!@#$%^&*()ABCDEFGHIJKLMnopqrstuvwxyz';
    for (let i = 0; i < passwordLength; i++) {
        const random = Math.round(Math.random() * characters.length);
        password += characters.charAt(random);
    }
    return password;
}

function displayPassword() {
    const genPassBtn = document.getElementById('btn-password');
    genPassBtn.addEventListener('click', () => {
        let password = passwordGenerator();
        const passText = document.getElementById('pass-text');
        const passLen = document.getElementById('pass-len');
        passText.innerText = password;
        passLen.innerText = password.length;

    });
}
displayPassword();

// Thank you for visiting my github page.