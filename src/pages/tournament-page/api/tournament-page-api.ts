import axios from "axios";
import { baseURL } from "../../../constants/constants";
import { TournamentData } from "../../../interfaces/interfaces";
import Store from "../../../store/store";

const fetchUserData = async (
    setTournamentData: React.Dispatch<React.SetStateAction<TournamentData | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>,
    store: Store,
    tournamentId: string | undefined
    ) => {
    try {
        //после tournament/ должен быть id tournamenta
        const response = await axios.get<TournamentData>(`${baseURL}/tournaments/${tournamentId}`);
        
        store.setTournament(response.data);
        setTournamentData(response.data);
        setLoading(false);
    } catch (err) {
        setError('Ошибка при загрузке данных турнира.');
        setLoading(false);
    }
};

export {fetchUserData};