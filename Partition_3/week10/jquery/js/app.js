$(document).ready(function () {
    $('#calc').on('click', function () {
        let firstNumber = parseFloat($('#firstNumber').val());
        let secondNumber = parseFloat($('#secondNumber').val());
        let operator = $('#operator').val();
        let resultElement = $('#result');

        if (isNaN(firstNumber) && isNaN(secondNumber)) {
            setColor('#result', false);
            resultElement.text('Please enter valid numbers.');
            return;
        }
        switch (operator) {
            case '+':
                setColor('#result', true);
                resultElement.text(firstNumber + secondNumber);
                break;
            case '*':
                setColor('#result', true);
                resultElement.text(firstNumber * secondNumber);
                break;
            case '-':
                setColor('#result', true);
                resultElement.text(firstNumber - secondNumber);
                break;
            case '/':

                if (secondNumber === 0) {
                    setColor('#result', false);
                    resultElement.text('Cannot divide by zero.');
                    return;
                } else if (firstNumber < secondNumber) {
                    setColor('#result', false);
                    resultElement.text('Please ensure firstNumber is greater than secondNumber.');
                    return;
                } else {
                    setColor('#result', true);
                    resultElement.text(firstNumber / secondNumber);
                } 
                break;
            default:
                break;
        }
        resultElement.text(`Operation: ${firstNumber} ${operator} ${secondNumber} = ${resultElement.text()}`);

    });
});

function setColor(result, checkResult) {
    $(result).css({
        'color': checkResult ? 'green' : 'red',
        'text-align': 'center',
        'font-size': '25px'
    });
    console.error('setColor : ', checkResult);
}