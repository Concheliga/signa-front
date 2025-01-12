import { baseURL } from "../../../constants/constants";
import { SearchedUser, PostTournamentData } from "../../../interfaces/interfaces";
import { api } from "../../../api/index-api";

const findUser = async (
    setUsers: React.Dispatch<React.SetStateAction<SearchedUser[]>>,
    searchMemberName: string
) => {
    const response = await api.get<SearchedUser[]>(`/search?prefix=${searchMemberName}`);
    setUsers(response.data);
};

const onFormSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    formData:PostTournamentData
    ) => {
    e.preventDefault();

    try {
        const response = await api.post(`${baseURL}/tournaments`, formData);
        console.log("Ответ сервера:", response);
    } catch (error) {
        console.error("Ошибка при отправке формы:", error);
        alert("Произошла ошибка при отправке формы.");
    }
};

export { findUser, onFormSubmit };
