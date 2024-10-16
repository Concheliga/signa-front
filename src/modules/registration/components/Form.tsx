import { Fragment, useState } from "react";
import Select from "../../../components/Select";
import Button from "../../../ui/Button";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import { addErrorMessage } from "../../../utils/error-message";
import {
    namePattern, groupPattern, linkPattern, passwordPattern,
    nameErrorMessage, linkErrorMessage, groupErrorMessage, passwordErrorMessage,
    stringPasswordPattern, stringNamePattern, stringGroupPattern, stringLinkPattern,
    emailPattern, emailErrorMessage, stringEmailPattern
} from "../constants/patterns";
import axios from "axios";

interface FormData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
    link: string;
    password: string;
}

const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({ ...props }) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        patronymic: "",
        gender: "",
        groupNumber: "",
        link: '',
        password: "",
    });
    const names: { name: string; value: string }[] = [
        { name: "firstName", value: "Имя:" },
        { name: "lastName", value: "Фамилия:" },
        { name: "patronymic", value: "Отчество:" }
    ];

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData(prevState => ({
            ...prevState,
            gender: e.target.value
        }));
    };

    const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://localhost:7127/user", formData);
            console.log("Ответ сервера:", response);
            console.log("Ответ сервера:", response.data);
        } catch (error) {
            console.error("Ошибка при отправке формы:", error);
            alert("Произошла ошибка при отправке формы.");
        }
    };

    return (
        <form onSubmit={onFormSubmit} {...props}>
            <Label htmlFor="email">Электронная почта:</Label>
            <Input onChange={(e) => {
                addErrorMessage(e, emailPattern, emailErrorMessage);
                onInputChange(e);
            }}
                type="email" id="email" name="email" pattern={stringEmailPattern} required />
            {names.map((name, index) => {
                return (
                    <Fragment key={index}>
                        <Label htmlFor={name.name} >{name.value}</Label>
                        <Input onChange={(e) => {
                            addErrorMessage(e, namePattern, nameErrorMessage);
                            onInputChange(e);
                        }}
                            type="text" className="names" id={name.name} name={name.name} pattern={stringNamePattern} required />
                    </Fragment>
                )
            })}
            <Label htmlFor="gender">Пол:</Label>
            <Select onChange={(e) => {
                onSelectChange(e);
            }} options={[{ value: "male", label: "Мужской" }, { value: "female", label: "Женский" }]} id="gender" name="gender" required />
            <Label htmlFor="group">Академическая группа:</Label>
            <Input onChange={(e) => {
                addErrorMessage(e, groupPattern, groupErrorMessage);
                onInputChange(e);
            }}
                type="text" id="group" name="group" pattern={stringGroupPattern} required />
            <Label htmlFor="link">Ссылка на ВК:</Label>
            <Input onChange={(e) => {
                addErrorMessage(e, linkPattern, linkErrorMessage);
                onInputChange(e);
            }}
                type="url" id="link" name="link" pattern={stringLinkPattern} required />
            <Label htmlFor="password">Пароль:</Label>
            <Input onChange={(e) => {
                addErrorMessage(e, passwordPattern, passwordErrorMessage);
                onInputChange(e);
            }}
                type="password" id="password" name="password" pattern={stringPasswordPattern} required />
            <Button type="submit">Зарегистрироваться</Button>
        </form>
    );
};

export default Form;