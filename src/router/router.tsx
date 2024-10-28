import { createBrowserRouter } from "react-router-dom";
import CreateTeamPage from "../pages/create-team-page/Create-team-page";
import ProfilePage from "../pages/profile-page/Profile-page";
import RegistrationPage from "../pages/Registration/Registration-page";
import TournamentListPage from "../pages/tournament-list-page/TournamentListPage";
import TournamentPage from "../pages/tournament-page/TournamentPage";

export const router = createBrowserRouter([
    {
        path: '/profile',
        element: <ProfilePage/>,
        errorElement: <ProfilePage/>,
    },
    {
        path: '/createTeam',
        element: <CreateTeamPage/>,
        errorElement: <CreateTeamPage/>,
    },
    {
        path: '/registration',
        element: <RegistrationPage/>,
        errorElement: <RegistrationPage/>,
    },
    {
        path: '/tournaments',
        element: <TournamentListPage/>,
        errorElement: <TournamentListPage/>,
    },
    {
        path: '/tournament',
        element: <TournamentPage/>,
        errorElement: <TournamentPage/>,
    }
])