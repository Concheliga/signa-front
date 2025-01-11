import { SearchedUser } from "../../../interfaces/interfaces";
import { api } from "../../../api/index-api";

const findUser = async (
    setUsers: React.Dispatch<React.SetStateAction<SearchedUser[]>>,
    searchMemberName: string
) => {
    const response = await api.get<SearchedUser[]>(`/search?prefix=${searchMemberName}`);
    setUsers(response.data);
};

export { findUser };
