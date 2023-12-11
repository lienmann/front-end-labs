let S = prompt("Введіть число S:");
let K = prompt("Введіть цифру K:");
let secondDigit = S.toString()[1];
let result = Math.pow(parseInt(secondDigit), K);
alert(`Результат: ${result}`);
