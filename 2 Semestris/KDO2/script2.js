function getResult() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    operator = document.getElementById("operator").value;
    result = document.getElementById("result");

    if (number1 == "" || !number1.match(/[0-9]/)) {
        alert("number1 is not correct");
        return; 
    }
    if (number2 == "" || !number2.match(/[0-9]/)) {
        alert("number2 is not correct");
        return; 
    }
    if (operator == "+") {
        result.innerHTML = parseInt(number1) + parseInt(number2);
        return;
    }
    if (operator == "-") {
        result.innerHTML = parseInt(number1) - parseInt(number2);
        return;
    }
    if (operator == "*") {
        result.innerHTML = parseInt(number1) * parseInt(number2);
        return;
    }
    if (operator == "/") {
        result.innerHTML = parseInt(number1) / parseInt(number2);
        return;
    }
}

