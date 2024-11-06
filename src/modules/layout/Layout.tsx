import Logo from "../logo/Logo";
import Footer from "../footer/Footer";
import LeftSidebar from "../left-sidebar/Left-sidebar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div className="body">
            <Logo />
            <div className="nav-main-container">
                <LeftSidebar />
                <Outlet />
                <div className="helper" />
            </div>
            <Footer />
        </div>

    )
}

export default Layout;