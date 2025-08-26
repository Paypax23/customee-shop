export function toPersianDigitsWithLocale(number) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    // Format number with locale separators (default to 'en-US' for comma)
    const formattedNumber = number.toLocaleString('en-US');

    // Replace English digits with Persian digits
    return formattedNumber.replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}

export function toPersianDigits(number) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const str = typeof number === 'number' ? number.toString() : number;
    return str.replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
}