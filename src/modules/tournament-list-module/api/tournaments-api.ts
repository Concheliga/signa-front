import axios from "axios";
import { baseURL } from "../../../constants/constants";

interface TournamentData {
    title: string;
    location: string;
    sportType: string;
    gender: string;
    startedAt: string;
    state: string;
}

const fetchUserData = async (
    setTournamentsData: React.Dispatch<React.SetStateAction<TournamentData[] | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
    try {
        const response = await axios.get<TournamentData[]>(`${baseURL}/tournament`);
        
        setTournamentsData(response.data);
        setLoading(false);
    } catch (err) {
        setError('Ошибка при загрузке данных пользователя.');
        setLoading(false);
    }
};

export {fetchUserData};