import Logo from "../../modules/logo/Logo";
import ProfileModule from "../../modules/profile/Profile-module";
import LeftSidebar from "../../modules/left-sidebar/Left-sidebar";
import Footer from "../../modules/footer/Footer";
import "./css/profile-page.css"

const ProfilePage: React.FC = () => {
    return (
        <div>
            <Logo />
            <div className="nav-main-container">
                <LeftSidebar />
                <ProfileModule />
            </div>
            <Footer />
        </div>
    );
};

export default ProfilePage;