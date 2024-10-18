import dayjs from "dayjs";

interface TournamentData {
    title: string;
    location: string;
    sportType: string;
    gender: string;
    startedAt: string;
    state: string;
}

interface TournamentsData {
    tournamentsData: TournamentData[] | null;
}

const Tournaments: React.FC<TournamentsData> = ({tournamentsData}) => {
    if (tournamentsData){
        return(
            tournamentsData.map((tournamentData, id) => {
            return (
                <tr key={id}>
                    <td>{tournamentData.sportType}</td>
                    <td>{tournamentData.title}</td>
                    <td>{dayjs(tournamentData.startedAt).format('DD.MM.YYYY')}</td>
                    <td>{tournamentData.location}</td>
                    <td>{tournamentData.gender}</td>
                    <td>{tournamentData.state}</td>
                    {tournamentData.state === 'Идет регистрация'? <td><button>Регистрация</button></td>: null}
                </tr>
            )
        })
        )
    }
}

export default Tournaments;