import CreateTeam from "../../modules/create-team-module/Create-team-module";
import "../../ui/css/page.css"

const CreateTeamPage: React.FC = () => {
    return (
        <CreateTeam maxMembersCount={8} tournamentId="fb7ade12-684a-4c36-b1a0-aeb2b5c30cd8" />
    );
};

export default CreateTeamPage;