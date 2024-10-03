function addErrorMessage(object: HTMLInputElement, pattern: RegExp, message: string): void{
    if (!pattern.test(object.value)){
        object.setCustomValidity(message);
    }
}

function resetErrorMessage(object: HTMLInputElement, pattern: RegExp): void{
    if (!pattern.test(object.value)){
        object.setCustomValidity('');
    }
}

export {addErrorMessage, resetErrorMessage}