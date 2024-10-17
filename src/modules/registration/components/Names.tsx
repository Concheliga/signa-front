import { Fragment } from "react";
import Label from "../../../ui/Label";
import Input from "../../../ui/Input";
import { onInputChange } from "../utils/registration-utils";
import { addErrorMessage } from "../../../utils/error-message";
import { namePattern, nameErrorMessage, stringNamePattern } from "../constants/patterns";

interface FormData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
    link: string;
    password: string;
}

interface Names extends React.InputHTMLAttributes<HTMLInputElement> {
    names: { name: string; value: string }[];
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const Names: React.FC<Names> = ({ names, setFormData, ...props }) => {
    return (
        <>
            {
                names.map((name, index) => {
                    return (
                        <Fragment key={index}>
                            <Label htmlFor={name.name} >{name.value}</Label>
                            <Input onChange={(e) => {
                                addErrorMessage(e, namePattern, nameErrorMessage);
                                onInputChange(e, setFormData);
                            }}
                                type={props.type} className={props.className} id={name.name} name={name.name} pattern={stringNamePattern} required />
                        </Fragment>
                    )
                })
            }
        </>
    )

}

export default Names;