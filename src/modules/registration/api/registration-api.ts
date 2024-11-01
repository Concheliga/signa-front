import axios from "axios";
import { baseURL } from "../../../constants/constants";
import { FormValues } from "../../../interfaces/interfaces";
import Store from "../../../store/store";

const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>, formData:FormValues, store: Store) => {
    e.preventDefault();

    store.registration(formData.email, formData.password);
    try {
        const response = await axios.post(`${baseURL}/user`, formData);
        console.log("Ответ сервера:", response);
    } catch (error) {
        console.error("Ошибка при отправке формы:", error);
        alert("Произошла ошибка при отправке формы.");
    }
};

export {onFormSubmit}