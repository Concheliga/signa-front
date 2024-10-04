const namePattern: RegExp = /^[А-Яа-яЁё]+$/;
const groupPattern: RegExp = /^[А-Яа-я]{2}-\d{6}$/;
const linkPattern: RegExp = /^https:\/\/vk\.com\/.*/;
const passwordPattern: RegExp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;
const nameErrorMessage: string = 'Имя должно содержать только буквы русского алфавита';
const linkErrorMessage: string = 'Ссылка должна начинаться с https://vk.com/';
const groupErrorMessage: string = 'Академическая группа должна иметь формат АА-000000';
const stringNamePattern: string = namePattern.source;
const stringGroupPattern: string = groupPattern.source;
const stringLinkPattern: string = linkPattern.source;
const stringPasswordPattern: string = passwordPattern.source;

export {passwordPattern, namePattern, groupPattern, linkPattern, nameErrorMessage, linkErrorMessage, groupErrorMessage,
    stringNamePattern, stringGroupPattern, stringLinkPattern, stringPasswordPattern}
