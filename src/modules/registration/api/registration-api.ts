import axios from "axios";
import { baseURL } from "../../../constants/constants";
import { FormValues } from "../../../interfaces/interfaces";

const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>, formData:FormValues) => {
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