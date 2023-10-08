import { Outlet } from "react-router-dom";
import Header from "../Component/Shared/Header/Header";
import Footer from "../Component/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;