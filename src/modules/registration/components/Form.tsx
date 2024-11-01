import { useContext, useState } from "react";
import Select from "../../../components/Select";
import { addErrorMessage } from "../../../utils/error-message";
import {
    groupPattern, linkPattern, passwordPattern, linkErrorMessage, groupErrorMessage, 
    passwordErrorMessage, stringPasswordPattern, stringGroupPattern, stringLinkPattern,
    emailPattern, emailErrorMessage, stringEmailPattern
} from "../constants/patterns";
import { onInputChange, onSelectChange } from "../utils/registration-utils";
import { onFormSubmit } from "../api/registration-api";
import Names from "./Names";
import styles from "../registration-styles/registration.module.css";
import { FormValues } from "../../../interfaces/interfaces";
import { Context } from "../../../main";

const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({ ...props }) => {
    const [formData, setFormData] = useState<FormValues>({
        firstName: "",
        lastName: "",
        patronymic: "",
        gender: "male",
        groupNumber: "",
        link: '',
        password: "",
        email: ""
    });
    const names: { name: string; value: string }[] = [
        { name: "firstName", value: "Имя:" },
        { name: "lastName", value: "Фамилия:" },
        { name: "patronymic", value: "Отчество:" }
    ];
    const {store} = useContext(Context);

    return (
        <form onSubmit={(e) => onFormSubmit(e, formData, store)} {...props}>
            <label className={styles.label} htmlFor="email">Электронная почта:</label>
            <input onChange={(e) => {
                addErrorMessage(e, emailPattern, emailErrorMessage);
                onInputChange(e, setFormData);
            }}
                className = {styles.input} type="email" id="email" name="email" pattern={stringEmailPattern} required />
            <Names names={names} setFormData={setFormData} type="text" className={styles.input} />
            <label className={styles.label} htmlFor="gender">Пол:</label>
            <Select onChange={(e) => {
                onSelectChange(e, setFormData);
            }} className={styles.select} options={[{ value: "male", label: "Мужской" }, { value: "female", label: "Женский" }]} id="gender" name="gender" required />
            <label className={styles.label} htmlFor="groupNumber">Академическая группа:</label>
            <input onChange={(e) => {
                addErrorMessage(e, groupPattern, groupErrorMessage);
                onInputChange(e, setFormData);
            }}
            className = {styles.input} type="text" id="groupNumber" name="groupNumber" pattern={stringGroupPattern} required />
            <label className={styles.label} htmlFor="link">Ссылка на ВК:</label>
            <input onChange={(e) => {
                addErrorMessage(e, linkPattern, linkErrorMessage);
                onInputChange(e, setFormData);
            }}
            className = {styles.input} type="url" id="link" name="link" pattern={stringLinkPattern} required />
            <label className={styles.label} htmlFor="password">Пароль:</label>
            <input onChange={(e) => {
                addErrorMessage(e, passwordPattern, passwordErrorMessage);
                onInputChange(e, setFormData);
            }}
            className = {styles.input} type="password" id="password" name="password" pattern={stringPasswordPattern} required />
            <button className={styles.button} type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default Form;