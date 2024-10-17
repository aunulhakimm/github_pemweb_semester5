function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    
    document.getElementById('result').innerText = result;
}

function resetResult() {
    document.getElementById('result').innerText = '0';
}
