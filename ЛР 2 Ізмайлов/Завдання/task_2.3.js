function toKebabCase() {
    const camelCase = prompt("Назва camelCase:");

    let kebabCase = '';
    for (let i = 0; i < camelCase.length; i++) {
        const char = camelCase[i];
        if (char === char.toUpperCase()) {
            kebabCase += '-' + char.toLowerCase();
        } else {
            kebabCase += char;
        }
    }

    alert("Стиль kebab-case: " + kebabCase);
}

toKebabCase();
