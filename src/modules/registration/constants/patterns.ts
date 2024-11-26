const namePattern: RegExp = /^[А-Яа-яЁё]+$/;
const groupPattern: RegExp = /^[А-Я]{2}-\d{6}$/;
const linkPattern: RegExp = /^https:\/\/vk\.com\/.*/;
const passwordPattern: RegExp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;
const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
const nameErrorMessage: string = 'Имя должно содержать только буквы русского алфавита';
const linkErrorMessage: string = 'Ссылка должна начинаться с https://vk.com/';
const groupErrorMessage: string = 'Академическая группа должна иметь формат АА-000000';
const passwordErrorMessage: string = 'Пароль должен быть не короче 8 символов, иметь цифры, заглавные и строчные буквы латинского алфавита'
const emailErrorMessage: string = 'Email должен быть формата abc@abc.abc';
const stringNamePattern: string = namePattern.source;
const stringGroupPattern: string = groupPattern.source;
const stringLinkPattern: string = linkPattern.source;
const stringPasswordPattern: string = passwordPattern.source;
const stringEmailPattern: string = emailPattern.source;

export {
    passwordPattern, namePattern, groupPattern, linkPattern, nameErrorMessage, linkErrorMessage, passwordErrorMessage,
    groupErrorMessage, stringNamePattern, stringGroupPattern, stringLinkPattern, stringPasswordPattern, emailPattern,
    emailErrorMessage, stringEmailPattern
    }
