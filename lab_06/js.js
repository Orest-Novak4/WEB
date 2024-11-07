let result = document.getElementById('result');
let buttons = document.querySelectorAll('.button');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let value = button.textContent;

        if (value === 'C') {
            currentInput = '';
            result.value = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput).toString();
                result.value = currentInput;
            } catch {
                result.value = 'Ошибка';
                currentInput = '';
            }
        } else {
            currentInput += value;
            result.value = currentInput;
        }
    });
});
