import axios from "axios";
import { baseURL } from "../../../constants/constants";
import { TournamentFromTournaments } from "../../../interfaces/interfaces";
import Store from "../../../store/store";

const fetchUserData = async (
    setTournamentsData: React.Dispatch<React.SetStateAction<TournamentFromTournaments[] | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>,
    store: Store
) => {
    try {
        const response = await axios.get<TournamentFromTournaments[]>(`${baseURL}/tournaments`);
        
        setTournamentsData(response.data);
        setLoading(false);
    } catch (err) {
        setError('Ошибка при загрузке данных о турнирах.');
        setLoading(false);
    }
};

export {fetchUserData};