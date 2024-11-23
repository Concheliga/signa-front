import axios from "axios";
import { baseURL } from "../../../constants/constants";
import { UserData } from "../../../interfaces/interfaces";
import { api } from "../../../api/index-api";

const fetchUserData = async (
    setUserData: React.Dispatch<React.SetStateAction<UserData | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
    ) => {
    try {
        //после user/ должен быть id usera
        const idResponse = await api.get<UserData>(`/get-user-id`);
        const response = await axios.get<UserData>(`${baseURL}/${idResponse.data}`);
        
        setUserData(response.data);
        setLoading(false);
    } catch (err) {
        setError('Ошибка при загрузке данных пользователя.');
        setLoading(false);
    }
};

export {fetchUserData};