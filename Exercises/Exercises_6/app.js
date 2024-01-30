

function Calculation() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let op = document.getElementById("op").value;
    let num2 = parseFloat(document.getElementById("num2").value);
    // let num2 = parseFloat(num2Input.value);
    let error = document.getElementById("error");
    let result = document.getElementById("result");

    error.innerHTML = '';
    result.innerHTML = '';

    if (isNaN(num1) || isNaN(num2)) {
        error.innerHTML = 'Please enter valid numbers.';
        return;
    }

    switch (op) {
        case '+':
            result.innerHTML = num1 + num2;
            break;
        case '*':
            result.innerHTML = num1 * num2;
            break;
        case '-':
            result.innerHTML = num1 - num2;
            break;
        case '/':
            if (num1 < num2) {
                error.innerHTML = 'Please make sure num1 is greater than num2.';

            } else if (num2 !== 0) {

                result.innerHTML = num1 / num2;

            } else {
                error.innerHTML = 'Cannot divide by zero.';

            }
            break;

        default:
            error.innerHTML = 'Invalid operator. Use + ,*,-,/';
            break;
    }
    result.innerHTML != '' ? result.innerHTML = 'Operation: ' + num1 + ' ' + op + ' ' + num2 + ' = ' + result.innerHTML : '';

    // Reset input fields to an empty 
    document.getElementById("num1").value = "";
    document.getElementById("op").value = "";
    document.getElementById("num2").value = "";

}
