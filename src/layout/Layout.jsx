import { Outlet, useLocation } from 'react-router-dom'
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import "./Layout.css";

const Layout = () => {
    const location = useLocation();

    const showBackButton = !["/", "/landing"].includes(location.pathname);
    const showFooter = !["/", "/landing"].includes(location.pathname);

    return (
        <>
            {showBackButton && <BackButton/>}
            <Outlet/>
            {showFooter && <Footer/>}
        </>
    )
}

export default Layout;