import { Fragment } from "react";
import { onInputChange } from "../utils/registration-utils";
import { addErrorMessage } from "../../../utils/error-message";
import { namePattern, nameErrorMessage, stringNamePattern } from "../constants/patterns";
import styles from "../registration-styles/registration.module.css"
import { NamesProps } from "../../../interfaces/interfaces";

const Names: React.FC<NamesProps> = ({ names, setFormData, ...props }) => {
    return (
        <>
            {
                names.map((name, index) => {
                    return (
                        <Fragment key={index}>
                            <label className={styles.label} htmlFor={name.name} >{name.value}</label>
                            <input onChange={(e) => {
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