import { Navigate, createBrowserRouter } from "react-router-dom";
import CreateTeamPage from "../pages/create-team-page/Create-team-page";
import ProfilePage from "../pages/profile-page/Profile-page";
import RegistrationPage from "../pages/Registration/Registration-page";
import TournamentListPage from "../pages/tournament-list-page/TournamentListPage";
import TournamentPage from "../pages/tournament-page/TournamentPage";
import MainTournamentInfo from "../modules/main-tournament-info/MainTournamentInfo";
import TournamentBracketModule from "../modules/tournament-bracket-module/TournamentBracketModule";
import Layout from "../modules/layout/Layout";
import Login from "../modules/login/Login";
import ProfileModule from "../modules/profile/Profile-module";
import Statistic from "../modules/statistic/Statistic";
import TournamentParticipants from "../modules/tournament-participants/TournamentParticipants";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Layout />,
        children: [
            {
                path: 'login',
                element: <Login />,
                errorElement: <Login />
            },
            {
                path: 'profile',
                element: <ProfilePage />,
                errorElement: <ProfilePage />,
                children: [
                    {
                        path: 'info',
                        element: <ProfileModule />,
                        errorElement: <ProfileModule />
                    },
                    {
                        path: 'statistic',
                        element: <Statistic />,
                        errorElement: <Statistic />
                    }
                ]
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
                path: 'tournaments/tournament',//здесь должен быть id турнира
                element: <TournamentPage />,
                errorElement: <TournamentPage />,
                children: [
                    {
                        path: '',
                        element: <Navigate to={'/tournaments/tournament/info'} replace />,
                        errorElement: <Navigate to={'/tournaments/tournament/info'} replace />
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
                    },
                    {
                        path: 'participants',
                        element: <TournamentParticipants />,
                        errorElement: <TournamentParticipants />
                    }
                ]
            }
        ]
    }

])