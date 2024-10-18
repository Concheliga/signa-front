interface FormData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
    link: string;
    password: string;
}

function getFormData(e: React.FormEvent<HTMLFormElement>): void{
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const resultData: { [key: string]: string } = {};

    formData.forEach((value, key) => {
        resultData[key] = value.toString();
    });
}

const onInputChange = (e: React.ChangeEvent<HTMLInputElement>, setFormData: React.Dispatch<React.SetStateAction<FormData>>) => {
    const { name, value } = e.target;
    
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>, setFormData: React.Dispatch<React.SetStateAction<FormData>>) => {
    setFormData(prevState => ({
        ...prevState,
        gender: e.target.value
    }));
};

export {getFormData, onInputChange, onSelectChange};