import { NavigateFunction } from "react-router-dom";
import { FormValues } from "../../../interfaces/interfaces";
import Store from "../../../store/store";

const onFormSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    formData:FormValues,
    store: Store,
    navigate: NavigateFunction
    ) => {
    e.preventDefault();

    try {
        store.registration(formData);
        navigate('..');
    } catch (error) {
        console.error("Ошибка при отправке формы:", error);
        alert("Произошла ошибка при отправке формы.");
    }
};

export {onFormSubmit}