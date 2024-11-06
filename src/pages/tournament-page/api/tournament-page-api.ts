import axios from "axios";
import { baseURL } from "../../../constants/constants";
import { TournamentData } from "../../../interfaces/interfaces";

const fetchUserData = async (
    setTournamentData: React.Dispatch<React.SetStateAction<TournamentData | null>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<string | null>>
    ) => {
    try {
        //после tournament/ должен быть id tournamenta
        const response = await axios.get<TournamentData>(`${baseURL}/tournament/fb7ade12-684a-4c36-b1a0-aeb2b5c30cd8`);

        setTournamentData(response.data);
        setLoading(false);
    } catch (err) {
        setError('Ошибка при загрузке данных турнира.');
        setLoading(false);
    }
};

export {fetchUserData};