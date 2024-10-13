import Logo from "../../modules/logo/Logo";
import LeftSidebar from "../../modules/left-sidebar/Left-sidebar";
import Footer from "../../modules/footer/Footer";
import TournamentBracketModule from "../../modules/tournament-bracket-module/TournamentBracketModule";
import "../../ui/css/page.css";

const TournamentPage: React.FC = () => {
    return (
        <div className="body">
            <Logo />
            <div className="nav-main-container">
                <LeftSidebar />
                <TournamentBracketModule/>
                <div className="helper"></div>
            </div>
            <Footer />
        </div>
    );
};

export default TournamentPage;