function addErrorMessage(object, pattern, message) {
    if (!pattern.test(object.value)) {
        object.setCustomValidity(message);
    }
}

function resetErrorMessage(object, pattern) {
    if (pattern.test(object.value)) {
        object.setCustomValidity('');
    }
}


const linkInput = document.getElementById('link');
const namesInput = document.querySelectorAll('.names');
const groupInput = document.getElementById('group');
const namePattern = /^[А-Яа-яЁё]+$/;
const groupPattern = /^[А-Яа-я]{2}-\d{6}$/;
const linkPattern = /^https:\/\/vk\.com\/.*/;
const nameErrorMessage = 'Имя должно содержать только буквы русского алфавита';
const linkErrorMessage = 'Ссылка должна начинаться с https://vk.com/';
const groupErrorMessage = 'Академическая группа должна иметь формат АА-000000';

namesInput.forEach(nameInput=>{
    nameInput.addEventListener('invalid', () => addErrorMessage(nameInput, namePattern, nameErrorMessage));
    nameInput.addEventListener('input', () => resetErrorMessage(nameInput, namePattern));
})

linkInput.addEventListener('invalid', () => addErrorMessage(linkInput, linkPattern, linkErrorMessage));
linkInput.addEventListener('input', () => resetErrorMessage(linkInput, linkPattern));
groupInput.addEventListener('invalid', () => addErrorMessage(groupInput, groupPattern, groupErrorMessage));
groupInput.addEventListener('input', () => resetErrorMessage(groupInput, groupPattern));