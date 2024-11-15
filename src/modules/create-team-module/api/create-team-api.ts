import { baseURL } from "../../../constants/constants";
import { SearchedUser, TeamData } from "../../../interfaces/interfaces";
import { api } from "../../../api/index-api";

const findUser = async (
    setUserData: React.Dispatch<React.SetStateAction<SearchedUser | null>>,
    searchMemberName: string
) => {
    const response = await api.get<SearchedUser>(`/search/prefix=${searchMemberName}`);
    console.log(response.data)
    setUserData(response.data);
};

const postTeamData = async (teamData: TeamData | null) => {
    try {
        const response = await api.post(`${baseURL}/teams`, teamData);
        console.log("Ответ сервера:", response);
    } catch (error) {
        console.error("Ошибка при отправке формы:", error);
        alert("Произошла ошибка при отправке формы.");
    }
}

export { findUser, postTeamData };