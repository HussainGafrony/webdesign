
let increase = document.getElementById('increase');
let number_type = document.getElementById('type');

increase.addEventListener('input', () => {
    if (increase.value != 1) {
        number_type.style.display = 'none';
    } else {
        number_type.style.display = 'inline-block';
    }
});


function AddNumber() {
    let start = parseInt(document.getElementById('start').value);
    let end = parseInt(document.getElementById('end').value);
    let increase = parseInt(increase.value);
    let number_type = number_type.value;
    let error = document.getElementById('error');
    let result = document.getElementById('result');
    result.innerHTML = '';
    if (isNaN(start) && isNaN(end) && isNaN(increase)) {
        error.innerHTML = 'please add number';
        return;
    } else {
        error.innerHTML = '';
    }

    for (let i = start; i <= end; i += increase) {

        if (number_type == 'even') {
            if (i % 2 === 0) {
                result.innerHTML += i + '\n';
            }
        } else if (number_type == 'odd') {
            if (i % 2 !== 0) {
                result.innerHTML += i + '\n';
            }
        } else {
            result.innerHTML += i + '\n';

        }

    }

    document.getElementById('start').value = '';
    document.getElementById('end').value = '';
}
// var users = [
//     {
//         name: "ahmad",
//         email: "ahamd@gmail.com",
//         password: "123456",
//         tall: 170,
//         weight: 60
//     },
//     {
//         name: "samer",
//         email: "samer@gmail.com",
//         password: "123456",
//         tall: 170,
//         weight: 60
//     },
//     {
//         name: "waled",
//         email: "waled@gmail.com",
//         password: "123456",
//         tall: 170,
//         weight: 60
//     }
// ];

// for (let i = 0; i < users.length; i++) {
//     document.getElementById('result').innerHTML +=  users[i].name + '\n';

//     // console.log(users[i].name);
// }