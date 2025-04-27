import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout: React.FC = () => {
    return (
        <div className="body">
            <Header />
                <Outlet />
            <Footer />
        </div>

    )
}

export default Layout;