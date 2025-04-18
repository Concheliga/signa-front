import Store from "../store/store";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: { value: string; label: string }[];
}

interface UserData {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
    vkLink: string;
}

interface MemberProps {
    userData: UserData | null;
    onDelete: (id: number) => void;
    id: number;
}

interface TeamData {
    title: string;
    tournamentId: string;
    captainId: string;
    membersId: string[];
}

interface SearchedUser {
    id: string;
    firstName: string;
    lastName: string;
    patronymic: string;
    groupNumber: string;
}

interface Member {
    id: number;
    data: SearchedUser;
}

interface MatchData {
    id: string;
    nextMatchId: string;
    teams: MatchTeamData[];
}

interface PostTournamentData {
    title: string;
    location: string;
    sportType: string;
    teamsMembersMaxNumber: number;
    teamsMembersMinNumber: number;
    gender: string;
    minFemaleCount: number;
    minMaleCount: number;
    maxTeamsCount: number;
    startedAt: string;
    endRegistrationAt: string;
    state: string;
    regulationLink: string;
    withGroupStage: boolean;
    chatLink: string;
}

interface TournamentData {
    title: string;
    location: string;
    sportType: string;
    gender: string;
    startedAt: string;
    state: string;
    maxTeamsCount: string;
    regulationLink: string;
    chatLink: string;
    teams: MatchTeamData[];
    matches: MatchData[];
    organizers: UserData[];
    currentMembersCount: number;
    members: UserData[];
}

interface Orgs {
    organizers: UserData[] | undefined;
}

interface FormValues {
    firstName: string;
    lastName: string;
    patronymic: string;
    gender: string;
    groupNumber: string;
    password: string;
    email: string;
    phoneNumber: string;
    vkLink: string;
}

interface NamesProps extends React.InputHTMLAttributes<HTMLInputElement> {
    names: { name: string; value: string }[];
    setFormData: React.Dispatch<React.SetStateAction<FormValues>>;
}

interface MatchTeamData {
    score: number,
    id: string,
    title: string;
    captain: UserData;
    members: UserData[];
}

interface Game {
    teamOne: string;
    scoreTeamOne: number;
    teamTwo: string;
    scoreTeamTwo: number;
}

interface Tree<Game> {
    data: Game;
    left?: Tree<Game> | undefined;
    right?: Tree<Game> | undefined;
}

interface TournamentFromTournaments {
    id: string;
    title: string;
    location: string;
    sportType: string;
    gender: string;
    startedAt: string;
    endRegistrationAt: string;
    state: string;
}

interface TournamentsDataProps {
    tournamentsData: TournamentFromTournaments[] | null;
}

interface IUser {
    email: string;
    isActivated: boolean;
    id: string;
}

interface State {
    store: Store;
}

export type {
    TournamentData, SelectProps, UserData, MemberProps, TeamData, Member, Orgs,
    FormValues, NamesProps, MatchData, MatchTeamData, Game, Tree, TournamentsDataProps,
    State, IUser, TournamentFromTournaments, SearchedUser, PostTournamentData
}