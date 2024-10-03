import "./registration-styles/registration.css";
import Form from "./components/Form.tsx";


const RegistrationModule: React.FC = () => {
    return(
        <div className="container">
            <h1>Регистрация</h1>
            <Form action="/submit" method="post"></Form>
        </div>
    )
};

export default RegistrationModule;