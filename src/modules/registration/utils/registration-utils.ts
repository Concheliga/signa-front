import User from "../../user/user";

function getFormData(e: React.FormEvent<HTMLFormElement>): void{
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const resultData: { [key: string]: string } = {};

    formData.forEach((value, key) => {
        resultData[key] = value.toString();
    });
    const user = new User(resultData);
    console.log(user); 
}

export {getFormData};