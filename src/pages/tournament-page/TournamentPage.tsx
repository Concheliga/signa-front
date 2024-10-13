import Logo from "../../modules/logo/Logo";
import LeftSidebar from "../../modules/left-sidebar/Left-sidebar";
import Footer from "../../modules/footer/Footer";
import MainTournamentInfo from "../../modules/main-tournament-info/MainTournamentInfo";
import "../../ui/css/page.css";

const TournamentPage: React.FC = () => {
    return (
        <div className="body">
            <Logo />
            <div className="nav-main-container">
                <LeftSidebar />
                <MainTournamentInfo/>
                <div className="helper"></div>
            </div>
            <Footer />
        </div>
    );
};

export default TournamentPage;