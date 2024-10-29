import axios from "axios";
import { baseURL } from "../../../constants/constants";
import { UserData } from "../../../interfaces/interfaces";

const fetchUserData = async (
    setUserData: React.Dispatch<React.SetStateAction<UserData | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
    ) => {
    try {
        //после user/ должен быть id usera
        const response = await axios.get<UserData>(`${baseURL}/user/67ec6509-8ed2-4040-a70b-e0d5ba1085c6`);
        setUserData(response.data);
        setLoading(false);
    } catch (err) {
        setError('Ошибка при загрузке данных пользователя.');
        setLoading(false);
    }
};

export {fetchUserData};