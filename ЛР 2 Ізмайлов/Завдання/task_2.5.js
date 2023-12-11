function formatDate(text) {
    const parts = text.split(' ');
    const result = [];
    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (part.includes('/')) {
            const dateParts = part.split('/');
            if (dateParts.length === 3) {
                const year = dateParts[0];
                const month = dateParts[1];
                const day = dateParts[2];
                result.push(`${day}.${month}.${year}`);
            } else {
                result.push(part);
            }
        } else {
            result.push(part);
        }
    }
    return result.join(' ');
}

const inputText = prompt('Введіть текст:');
const formattedText = formatDate(inputText);

alert(formattedText);
