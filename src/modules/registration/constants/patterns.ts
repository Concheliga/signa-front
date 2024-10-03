const namePattern: RegExp = /^[А-Яа-яЁё]+$/;
const groupPattern: RegExp = /^[А-Яа-я]{2}-\d{6}$/;
const linkPattern: RegExp = /^https:\/\/vk\.com\/.*/;
const nameErrorMessage: string = 'Имя должно содержать только буквы русского алфавита';
const linkErrorMessage: string = 'Ссылка должна начинаться с https://vk.com/';
const groupErrorMessage: string = 'Академическая группа должна иметь формат АА-000000';

export {namePattern, groupPattern, linkPattern, nameErrorMessage, linkErrorMessage, groupErrorMessage}
