// var emails = [
//     {
//         email: "ahamd@gmail.com",
//         password: "123"
//     },
//     {
//         email: "waled@gmail.com",
//         password: "123"
//     }
// ];



// function checkEmail() {
//     let email = document.getElementById('email');
//     let password = document.getElementById('password');
//     let error = document.getElementById('error');
//     let result = document.getElementById('result');
//     error.innerHTML = '';
//     result.innerHTML = '';
//     if (email.value === '' || password.value === '') {
//         error.innerHTML = 'Please enter both email and password.';
//         return;
//     }
//     if (!isValidEmail(email.value)) {
//         error.innerHTML = 'email not valid';
//         return;

//     }
//     let user = emails.find(user => user.email === email.value);

//     if (user) {

//         if (user.password === password.value) {
//             result.innerHTML = 'welcome';
//         } else {
//             error.innerHTML = 'Invalid password.';

//         }
//     } else {
//         error.innerHTML = 'Email not found.';
//     }

// }

// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

// function CheckVolt() {
//     let button = document.getElementById('button');
//     let img = document.getElementById('img');

//     if (img.src.includes('/img/off.jpeg')) {
//         img.src = '/img/on.jpeg';
//         button.innerText = 'ON';
//     } else {
//         img.src = '/img/off.jpeg';
//         button.innerText = 'OFF';
//     }
// }

function changeColor(color) {
    let res = document.getElementById('color');
    res.style.color = color;
}
