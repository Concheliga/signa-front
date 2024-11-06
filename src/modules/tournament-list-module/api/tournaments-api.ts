import axios from "axios";
import { baseURL } from "../../../constants/constants";
import { TournamentData } from "../../../interfaces/interfaces";

const fetchUserData = async (
    setTournamentsData: React.Dispatch<React.SetStateAction<TournamentData[] | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
) => {
    try {
        const response = await axios.get<TournamentData[]>(`${baseURL}/tournaments`);
        
        setTournamentsData(response.data);
        setLoading(false);
    } catch (err) {
        setError('Ошибка при загрузке данных о турнирах.');
        setLoading(false);
    }
};

export {fetchUserData};