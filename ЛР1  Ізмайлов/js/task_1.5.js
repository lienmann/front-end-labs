do {
    let num1 = parseInt(prompt("Введіть перше число:"));
    let num2 = parseInt(prompt("Введіть друге число:"));
    let operator = prompt("Введіть знак (+, -, *, /):");
    let result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            alert("Неправильний знак!");
    }
    alert(`Всього: ${result}`);
} while (confirm("Продовжити?"));
