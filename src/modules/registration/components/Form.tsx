import { Fragment } from "react/jsx-runtime";
import Select from "../../../components/Select";
import Button from "../../../ui/Button";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import { addErrorMessage } from "../../../utils/error-message";
import {
    namePattern, groupPattern, linkPattern, passwordPattern,
    nameErrorMessage, linkErrorMessage, groupErrorMessage, passwordErrorMessage,
    stringPasswordPattern, stringNamePattern, stringGroupPattern, stringLinkPattern
} from "../constants/patterns";

const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({ ...props }) => {
    const names: { name: string; value: string }[] = [
        {name:"firstName", value:"Имя:"}, 
        {name:"lastName", value:"Фамилия:"},
        {name:"patronymic", value:"Отчество:"}
    ];

    return (
        <form {...props}>
            {names.map((name, index) => {
                return(
                <Fragment key={index}>
                    <Label htmlFor={name.name} >{name.value}</Label>
                    <Input onChange={(e)=>addErrorMessage(e, namePattern, nameErrorMessage)} type="text" className="names" id={name.name} name={name.name} pattern={stringNamePattern} required />
                </Fragment>
                )   
            })}
            <Label htmlFor="gender">Пол:</Label>
            <Select options={[{value:"male", label:"Мужской"}, {value:"female", label:"Женский"}]} id="gender" name="gender" required />
            <Label htmlFor="group">Академическая группа:</Label>
            <Input onChange={(e)=>addErrorMessage(e, groupPattern, groupErrorMessage)} type="text" id="group" name="group" pattern={stringGroupPattern} required />
            <Label htmlFor="link">Ссылка на ВК:</Label>
            <Input onChange={(e)=>addErrorMessage(e, linkPattern, linkErrorMessage)} type="url" id="link" name="link" pattern={stringLinkPattern} required />
            <Label htmlFor="password">Пароль:</Label>
            <Input onChange={(e)=>addErrorMessage(e, passwordPattern, passwordErrorMessage)} type="password" id="password" name="password" pattern={stringPasswordPattern} required />
            <Button type="submit">Зарегистрироваться</Button>
        </form>
    );
};

export default Form;