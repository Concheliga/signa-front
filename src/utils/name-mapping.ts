const genderMapping = (inputGender: string | undefined) => {
    switch (inputGender) {
        case 'male':
            return 'Муж';
            break;
        case 'female':
            return 'Жен';
            break;
        case 'mixed':
            return 'Смеш';
            break;
        default:
            return '';
            break;
    }
}

const regStateMapping = (inputState: string) => {
    switch (inputState) {
        case 'registration':
            return 'Регистрация';
            break;
        case 'registration_is_closed':
            return 'Регистрация закрыта';
            break;
        case 'going_on':
            return 'Идет';
            break;
        case 'is_over':
            return 'Закончен';
            break;
        default:
            return '';
            break;
    }
}

export { genderMapping, regStateMapping };
