import axios from "axios";
import { baseURL } from "../../../constants/constants";
import { UserData, TeamData } from "../../../interfaces/interfaces";

const fetchUserData = async (
    setUserData: React.Dispatch<React.SetStateAction<UserData | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
    ) => {
    try {
        //после user/ должен быть id usera
        const response = await axios.get<UserData>(`${baseURL}/user/5c691513-3fa1-4f07-b37c-b3a86cbeecca`);
        setUserData(response.data);
        setLoading(false);
    } catch (err) {
        setError('Ошибка при загрузке данных пользователя.');
        setLoading(false);
    }
};

const postTeamData = async (teamData: TeamData | null) => {
    try {
        const response = await axios.post(`${baseURL}/teams/create-team`, teamData);
        console.log("Ответ сервера:", response);
    } catch (error) {
        console.error("Ошибка при отправке формы:", error);
        alert("Произошла ошибка при отправке формы.");
    }
}

export {fetchUserData, postTeamData};