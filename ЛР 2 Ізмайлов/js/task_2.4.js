function calculate(expression) {
    const operators = ['+', '-', '*', '/'];
    let operator = '';
    let leftOperand = '';
    let rightOperand = '';
    let currentOperand = '';

    for (let i = 0; i < expression.length; i++) {
        const char = expression.charAt(i);

        if (operators.includes(char)) {
            operator = char;
            leftOperand = parseFloat(currentOperand);
            currentOperand = '';
        } else {
            currentOperand += char;
        }
    }

    rightOperand = parseFloat(currentOperand);

    switch (operator) {
        case '+':
            return leftOperand + rightOperand;
        case '-':
            return leftOperand - rightOperand;
        case '*':
            return leftOperand * rightOperand;
        case '/':
            return leftOperand / rightOperand;
        default:
            return null;
    }
}

const expression = prompt("Введіть приклад:");
const result = calculate(expression);

alert(result);
