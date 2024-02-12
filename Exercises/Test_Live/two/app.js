var emails = [
    "ahamd@gmail.com",
    "waled@gmail.com",
    "hamode@gmail.com"
];

function CheckEmail() {
    let user_input = document.getElementById('email');
    let error = document.getElementById('error');
    let result = document.getElementById('result');
    error.innerHTML = '';
    result.innerHTML = '';
    if (user_input.value === '') {
        error.innerHTML = ' please add email';
        return;
    } else {

        if (!isValidEmail(user_input.value)) {
            error.innerHTML = `${user_input.value} is not a valid email address.`;
            return;
        } else {

            if (emails.includes(user_input.value)) {
                result.innerHTML = 'email are valid.';

            } else {
                error.innerHTML = ' email is not valid';
            }

        }
    }

    user_input.value = '';

}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


