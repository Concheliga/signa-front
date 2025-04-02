const namePattern: RegExp = /^[А-Яа-яЁё]+$/;
const groupPattern: RegExp = /^(РИ|НМТ|ФО|МЕН|СТ|УГИ|ЭУ|ФК|ФТ|Х|ПШ|ЭН|РИМ|НМТМ|ФОМ|МЕНМ|СТМ|УГИМ|ЭУМ|ФКМ|ФТМ|ХМ|ПШМ|ЭНМ|ри|нмт|фо|мен|ст|уги|эу|фк|фт|х|пш|эн|рим|нмтм|фом|менм|стм|угим|эум|фкм|фтм|хм|пшм|энм)-\d{6}$/i;
const linkPattern: RegExp = /^https:\/\/vk\.com\/.*/;
const passwordPattern: RegExp = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/;
const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
const maxSymbolsPattern: RegExp = /^.{0,64}$/;
const positiveNumberPattern: RegExp = /^[1-9]\d*$/;
const noNegativeNumberPattern: RegExp = /^(0|[1-9]\d*)$/;
const filesPattern: RegExp = /\.(doc|docx|txt|pdf)$/i;
const allLinkPattern: RegExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
const nameErrorMessage: string = 'Имя должно содержать только буквы русского алфавита';
const linkErrorMessage: string = 'Ссылка должна начинаться с https://vk.com/';
const groupErrorMessage: string = 'Академическая группа должна иметь формат АА-000000';
const passwordErrorMessage: string = 'Пароль должен быть не короче 8 символов, иметь цифры, заглавные и строчные буквы латинского алфавита'
const emailErrorMessage: string = 'Email должен быть формата abc@abc.abc';
const maxSymbolsError: string = 'Максимальное допустимое число символов: 64';
const positiveNumberError: string = 'Число должно быть натуральным';
const noNegativeNumberError: string = 'Число должно быть целым и неотрицательным';
const filesError: string = 'Файл должен иметь одно из расширений: doc, docx, txt, pdf';
const allLinkError: string = 'Здесь должна быть ссылка';
const stringNamePattern: string = namePattern.source;
const stringGroupPattern: string = groupPattern.source;
const stringLinkPattern: string = linkPattern.source;
const stringPasswordPattern: string = passwordPattern.source;
const stringEmailPattern: string = emailPattern.source;
const stringMaxSymbolsPattern: string = maxSymbolsPattern.source;
const stringPositiveNumberPattern: string = positiveNumberPattern.source;
const stringNoNegativeNumberPattern: string = noNegativeNumberPattern.source;
const stringFilesPattern: string = filesPattern.source;
const stringAllLinkPattern: string = allLinkPattern.source;

export {
    passwordPattern, namePattern, groupPattern, linkPattern, nameErrorMessage, linkErrorMessage, passwordErrorMessage,
    groupErrorMessage, stringNamePattern, stringGroupPattern, stringLinkPattern, stringPasswordPattern, emailPattern,
    emailErrorMessage, stringEmailPattern, maxSymbolsPattern, positiveNumberPattern, noNegativeNumberPattern, filesPattern, allLinkPattern, stringMaxSymbolsPattern,
    stringPositiveNumberPattern, stringNoNegativeNumberPattern, stringFilesPattern, stringAllLinkPattern, maxSymbolsError, positiveNumberError,
    noNegativeNumberError, filesError, allLinkError
    }
/*Валидация:
регистрация: группа во второй строчке
название турнира: 64 символа макс+
максимальное количество участников: положительно целое число+
минимальное количество участников: необязательный, целое неотрицательное число(по дефолту 0)+
максимальное количесвто команд: необязательное, натуральное число+
миниманимальное количесвто мужчин в команде: необязательное, должно быть в сумме с минимальными женщинами меньше максимального количества участников и равно общему минимальному количеству участников(по дефолту 0)
миниманимальное количесвто жещин в команде: необязательное, должно быть в сумме с минимальными мужчинами меньше максимального количества участников и равно общему минимальному количеству участников(по дефолту 0)
регламент: doc, docx, txt, pdf+
ссылка на чат: необязательный, ссылка+
место проведения: 64 символа макс+
дата и время проведения: в будущем, конечная дата не раньше начальной
дата конца регистрации на турнир: не позже начала турнира
организаторы: необязательное, id типа*/