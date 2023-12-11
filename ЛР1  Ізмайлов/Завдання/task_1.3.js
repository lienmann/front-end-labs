let day = parseInt(prompt("Введіть день:"));
let month = parseInt(prompt("Введіть місяць:"));
let year = parseInt(prompt("Введіть рік:"));

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
let daysInMonth = [31, (isLeapYear ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if (day > 0 && month > 0 && month <= 12 && year > 0) {
    let prevDay = day - 1;
    let prevMonth = month;
    let prevYear = year;

    if (prevDay === 0) {
        prevMonth -= 1;
        if (prevMonth === 0) {
            prevMonth = 12;
            prevYear -= 1;
        }
        prevDay = daysInMonth[prevMonth - 1];
    }

    let nextDay = day + 1;
    let nextMonth = month;
    let nextYear = year;

    if (nextDay > daysInMonth[month - 1]) {
        nextDay = 1;
        nextMonth += 1;
        if (nextMonth === 13) {
            nextMonth = 1;
            nextYear += 1;
        }
    }

    alert(`Попередня дата: ${prevDay}.${prevMonth}.${prevYear}. Наступна дата: ${nextDay}.${nextMonth}.${nextYear}`);
} else {
    alert("Введені значення невірні.");
}
