const genderMapping = (inputGender: string | undefined) => {
    switch (inputGender) {
        case 'male':
            return 'Муж';
            break;
        case 'female':
            return 'Жен';
            break;
        default:
            return '';
            break;
    }
}

export {genderMapping};
