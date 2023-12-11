function toCamelCase() {
    const cssStyleName = prompt("Назва css-стилю:");

    const words = cssStyleName.split("-");

    const capitalizedWords = words.map(function (word, index) {
        if (index > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word;
        }
    });

    const camelCaseName = capitalizedWords.join("");

    alert("Стиль camelCase: " + camelCaseName);
}

toCamelCase();
