function addErrorMessage(element: React.ChangeEvent<HTMLInputElement>, pattern: RegExp, message: string): void{
    const input = element.target;
    
    if (!pattern.test(input.value)){
        if (input.value.length === 0){
            input.setCustomValidity("Заполните это поле");
        } else {
            input.setCustomValidity(message);
        }
    } else {
        input.setCustomValidity('');
    }

    input.reportValidity();
}

export {addErrorMessage}