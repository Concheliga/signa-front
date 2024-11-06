import { FormValues } from "../../../interfaces/interfaces";
import Store from "../../../store/store";

const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>, formData:FormValues, store: Store) => {
    e.preventDefault();

    try {
        store.registration(formData);
    } catch (error) {
        console.error("Ошибка при отправке формы:", error);
        alert("Произошла ошибка при отправке формы.");
    }
};

export {onFormSubmit}