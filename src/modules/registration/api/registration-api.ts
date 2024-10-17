import axios from "axios";
import { baseURL } from "../../../constants/constants";

interface FormData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
    link: string;
    password: string;
}

const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>, formData:FormData) => {
    e.preventDefault();

    try {
        const response = await axios.post(`${baseURL}/user`, formData);
        console.log("Ответ сервера:", response);
    } catch (error) {
        console.error("Ошибка при отправке формы:", error);
        alert("Произошла ошибка при отправке формы.");
    }
};

export {onFormSubmit}