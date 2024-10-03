import Select from "./Select";
import Button from "../../../ui/Button";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";

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
                <div key={index}>
                    <Label htmlFor={name.name} key={index}>{name.value}</Label>
                    <Input type="text" className="names" id={name.name} name={name.name} pattern="^[А-Яа-яЁё]+$" required />
                </div>
                )   
            })}
            <Label htmlFor="gender">Пол:</Label>
            <Select options={[{value:"male", label:"Мужской"}, {value:"female", label:"Женский"}]} id="gender" name="gender" required />
            <Label htmlFor="group">Академическая группа:</Label>
            <Input type="text" id="group" name="group" pattern="[А-Яа-я]{2}-\d{6}" required />
            <Label htmlFor="link">Ссылка на ВК:</Label>
            <Input type="url" id="link" name="link" pattern="https://vk\.com/.*" required />
            <Button type="submit">Зарегистрироваться</Button>
        </form>
    );
};

export default Form;