import Logo from "../../modules/logo/Logo";
import CreateTeam from "../../modules/create-team-module/Create-team-module";
import LeftSidebar from "../../modules/left-sidebar/Left-sidebar";
import Footer from "../../modules/footer/Footer";
import "../../ui/css/page.css"

const CreateTeamPage: React.FC = () => {
    return (
        <div className="body">
            <Logo />
            <div className="nav-main-container">
                <LeftSidebar />
                <CreateTeam maxMembersCount={8} tournamentId="fb7ade12-684a-4c36-b1a0-aeb2b5c30cd8"/>
                <div className="helper"></div>
            </div>
            <Footer />
        </div>
    );
};

export default CreateTeamPage;