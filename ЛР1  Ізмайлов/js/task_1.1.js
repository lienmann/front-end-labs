let money = prompt("Скылькиу вас грошей:");
let price = prompt("Ціна одного бургера:");
let burgerNum = Math.floor(money / price);
let rest = money - burgerNum * price;
let burgerWord = burgerNum % 10;
let lastWord;
switch (burgerWord) {
    case 1:
        lastWord = "бургер";
        break;
    case 2:
    case 3:
    case 4:
        lastWord = "бургери";
        break;
    default:
        lastWord = "бургерів";
        break;
}
alert(`Ви можете купити ${burgerNum} ${lastWord} і ваша решта складатиме ${rest} грн.`);
