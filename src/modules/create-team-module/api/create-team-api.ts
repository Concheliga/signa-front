import { baseURL } from "../../../constants/constants";
import { SearchedUser, TeamData } from "../../../interfaces/interfaces";
import { api } from "../../../api/index-api";

const findUser = async (
    setUsers: React.Dispatch<React.SetStateAction<SearchedUser[]>>,
    searchMemberName: string
) => {
    const response = await api.get<SearchedUser[]>(`/search?prefix=${searchMemberName}`);
    setUsers(response.data);
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