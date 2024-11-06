import styles from "./registration-styles/registration.module.css";
import Form from "./components/Form.tsx";

const RegistrationModule: React.FC = () => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <h1 className={styles.title}>Регистрация</h1>
                <Form action="/submit" method="post" className={styles.form}></Form>
            </div>
        </div>

    )
};

export default RegistrationModule;