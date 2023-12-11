let num = prompt("Введіть п'ятизначне число:");
let lastNum = num[num.length - 1];
let newNum = lastNum + num.slice(0, num.length - 1);
alert(newNum);

