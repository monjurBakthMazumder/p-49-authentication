import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header'
import Sidebar from '../Shared/Sidebar/Sidebar';

const Home = () => {
    return (
        <div>
            <Header/>
            <div className="lg:flex">
                <Sidebar/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;