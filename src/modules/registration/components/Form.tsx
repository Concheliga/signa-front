import { useState } from "react";
import Select from "../../../components/Select";
import Button from "../../../ui/Button";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import { addErrorMessage } from "../../../utils/error-message";
import {
    groupPattern, linkPattern, passwordPattern, linkErrorMessage, groupErrorMessage, 
    passwordErrorMessage, stringPasswordPattern, stringGroupPattern, stringLinkPattern,
    emailPattern, emailErrorMessage, stringEmailPattern
} from "../constants/patterns";
import { onInputChange, onSelectChange } from "../utils/registration-utils";
import { onFormSubmit } from "../api/registration-api";
import Names from "./Names";

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
        gender: "male",
        groupNumber: "",
        link: '',
        password: "",
    });
    const names: { name: string; value: string }[] = [
        { name: "firstName", value: "Имя:" },
        { name: "lastName", value: "Фамилия:" },
        { name: "patronymic", value: "Отчество:" }
    ];

    return (
        <form onSubmit={(e) => onFormSubmit(e, formData)} {...props}>
            <Label htmlFor="email">Электронная почта:</Label>
            <Input onChange={(e) => {
                addErrorMessage(e, emailPattern, emailErrorMessage);
                onInputChange(e, setFormData);
            }}
                type="email" id="email" name="email" pattern={stringEmailPattern} required />
            <Names names={names} setFormData={setFormData} type="text" className="names" />
            <Label htmlFor="gender">Пол:</Label>
            <Select onChange={(e) => {
                onSelectChange(e, setFormData);
            }} options={[{ value: "male", label: "Мужской" }, { value: "female", label: "Женский" }]} id="gender" name="gender" required />
            <Label htmlFor="groupNumber">Академическая группа:</Label>
            <Input onChange={(e) => {
                addErrorMessage(e, groupPattern, groupErrorMessage);
                onInputChange(e, setFormData);
            }}
                type="text" id="groupNumber" name="groupNumber" pattern={stringGroupPattern} required />
            <Label htmlFor="link">Ссылка на ВК:</Label>
            <Input onChange={(e) => {
                addErrorMessage(e, linkPattern, linkErrorMessage);
                onInputChange(e, setFormData);
            }}
                type="url" id="link" name="link" pattern={stringLinkPattern} required />
            <Label htmlFor="password">Пароль:</Label>
            <Input onChange={(e) => {
                addErrorMessage(e, passwordPattern, passwordErrorMessage);
                onInputChange(e, setFormData);
            }}
                type="password" id="password" name="password" pattern={stringPasswordPattern} required />
            <Button type="submit">Зарегистрироваться</Button>
        </form>
    );
};

export default Form;