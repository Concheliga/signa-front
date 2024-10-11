import Logo from "../../modules/logo/Logo";
import TournamentListModule from "../../modules/tournament-list-module/TournamentListModule";
import LeftSidebar from "../../modules/left-sidebar/Left-sidebar";
import Footer from "../../modules/footer/Footer";
import "../../ui/css/page.css";

const TournamentListPage: React.FC = () => {
    return (
        <div className="body">
            <Logo />
            <div className="nav-main-container">
                <LeftSidebar />
                <TournamentListModule />
                <div className="helper"></div>
            </div>
            <Footer />
        </div>
    );
};

export default TournamentListPage;