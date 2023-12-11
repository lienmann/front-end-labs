function convertNumberTostr() {
    const ones = ["", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"];
    const tens = ["", "десять", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"];
    const specialNum = ["одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];

    const num = prompt("Введіть двозначне число:");

    if (num < 10 || num > 99 || isNaN(num)) {
        alert("Помилка: введіть двозначне число.");
        return;
    }
    let str = "";

    if (num > 10 && num < 20) {
        str = specialNum[num - 11];
    } else {
        const onesDigit = num % 10;
        const tensDigit = Math.floor(num / 10);

        if (tensDigit > 0) {
            str += tens[tensDigit];
            if (onesDigit > 0) {
                str += " ";
            }
        }

        if (onesDigit > 0) {
            str += ones[onesDigit];
        }
    }

    alert(str);
}

convertNumberTostr();
