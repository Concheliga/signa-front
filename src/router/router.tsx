import { createBrowserRouter } from "react-router-dom";
import CreateTeamPage from "../pages/create-team-page/Create-team-page";
import ProfilePage from "../pages/profile-page/Profile-page";
import RegistrationPage from "../pages/Registration/Registration-page";
import TournamentListPage from "../pages/tournament-list-page/TournamentListPage";
import TournamentPage from "../pages/tournament-page/TournamentPage";
import MainTournamentInfo from "../modules/main-tournament-info/MainTournamentInfo";
import TournamentBracketModule from "../modules/tournament-bracket-module/TournamentBracketModule";
import Layout from "../modules/layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Layout />,
        children: [
            {
                path: 'profile',
                element: <ProfilePage />,
                errorElement: <ProfilePage />
            },
            {
                path: 'registration',
                element: <RegistrationPage />,
                errorElement: <RegistrationPage />
            },
            {
                path: 'tournaments',
                element: <TournamentListPage />,
                errorElement: <TournamentListPage />
            },
            {
                path: 'tournament',//здесь должен быть id турнира
                element: <TournamentPage />,
                errorElement: <TournamentPage />,
                children: [
                    {
                        path: '',
                        element: <MainTournamentInfo />,
                        errorElement: <MainTournamentInfo />
                    },
                    {
                        path: 'info',
                        element: <MainTournamentInfo />,
                        errorElement: <MainTournamentInfo />
                    },
                    {
                        path: 'bracket',
                        element: <TournamentBracketModule />,
                        errorElement: <TournamentBracketModule />
                    },
                    {
                        path: 'create-team',
                        element: <CreateTeamPage />,
                        errorElement: <CreateTeamPage />
                    }
                ]
            }
        ]
    }

])