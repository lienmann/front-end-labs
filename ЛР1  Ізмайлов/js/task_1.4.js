let age = parseInt(prompt("Введіть свій вік:"));
let ageString = '';

if (age < 20) {
    switch (age) {
        case 1:
            ageString = 'один';
            break;
        case 2:
            ageString = 'два';
            break;
        case 3:
            ageString = 'три';
            break;
        case 4:
            ageString = 'чотири';
            break;
        case 5:
            ageString = 'п\'ять';
            break;
        case 6:
            ageString = 'шість';
            break;
        case 7:
            ageString = 'сім';
            break;
        case 8:
            ageString = 'вісім';
            break;
        case 9:
            ageString = 'дев\'ять';
            break;
        case 10:
            ageString = 'десять';
            break;
        case 11:
            ageString = 'одинадцять';
            break;
        case 12:
            ageString = 'дванадцять';
            break;
        case 13:
            ageString = 'тринадцять';
            break;
        case 14:
            ageString = 'чотирнадцять';
            break;
        case 15:
            ageString = 'п\'ятнадцять';
            break;
        case 16:
            ageString = 'шістнадцять';
            break;
        case 17:
            ageString = 'сімнадцять';
            break;
        case 18:
            ageString = 'вісімнадцять';
            break;
        case 19:
            ageString = 'дев\'ятнадцять';
            break;
    }
} else {
    switch (Math.floor(age / 10)) {
        case 2:
            ageString = 'двадцять';
            break;
        case 3:
            ageString = 'тридцять';
            break;
        case 4:
            ageString = 'сорок';
            break;
        case 5:
            ageString = 'п\'ятдесят';
            break;
        case 6:
            ageString = 'шістдесят';
            break;
    }

    if (age % 10 !== 0) {
        ageString += ' ';
        switch (age % 10) {
            case 1:
                ageString += 'один';
                break;
            case 2:
                ageString += 'два';
                break;
            case 3:
                ageString += 'три';
                break;
            case 4:
                ageString += 'чотири';
                break;
            case 5:
                ageString += 'п\'ять';
                break;
            case 6:
                ageString += 'шість';
                break;
            case 7:
                ageString += 'сім';
                break;
            case 8:
                ageString += 'вісім';
                break;
            case 9:
                ageString += 'дев\'ять';
                break;
        }
    }
}

let ageWord;

if (age >= 11 && age <= 14) {
    switch (age) {
        case 11:
        case 12:
        case 13:
        case 14:
            ageWord = "років";
            break;
    }
} else {
    let lastNum = age % 10;

    switch (lastNum) {
        case 1:
            ageWord = "рік";
            break;
        case 2:
        case 3:
        case 4:
            ageWord = "роки";
            break;
        default:
            ageWord = "років";
            break;
    }

}

alert(`${ageString} ${ageWord}`);
