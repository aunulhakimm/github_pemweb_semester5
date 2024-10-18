let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function append(value) {
    const operators = ['+', '-', '*', '/', '÷'];

    // Cek jika karakter terakhir adalah operator
    if (operators.includes(currentInput.slice(-1)) && operators.includes(value)) {
        // Ganti operator lama dengan yang baru
        currentInput = currentInput.slice(0, -1) + value;
        display.innerText = display.innerText.slice(0, -1) + value;
    } else {
        if (display.innerText === '0' && !operators.includes(value)) {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
        currentInput += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
    currentInput = '';
    previousInput = '';
}

function backspace() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
        currentInput = display.innerText;
    } else {
        display.innerText = '0';
        currentInput = '';
    }
}

function calculate() {
    try {
        currentInput = currentInput.replace(/÷/g, '/');
        if (currentInput.includes('^')) {
            let parts = currentInput.split('^');
            display.innerText = Math.pow(parseFloat(parts[0]), parseFloat(parts[1]));
        } else {
            display.innerText = eval(currentInput);
        }
        currentInput = display.innerText;
    } catch (error) {
        display.innerText = 'Error';
    }
}
