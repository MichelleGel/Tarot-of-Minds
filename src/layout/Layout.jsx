import { Outlet, useLocation } from 'react-router-dom'
import BackButton from '../components/BackButton';
import Footer from '../components/Footer';
import "./Layout.css";
import ScrollToTop from '../components/ScrollToTop';

const Layout = () => {
    const location = useLocation();

    const showBackButton = !["/", "/landing"].includes(location.pathname);
    const showFooter = !["/", "/landing"].includes(location.pathname);

    return (
        <>
        <ScrollToTop/>
            {showBackButton && <BackButton/>}
            <Outlet/>
            {showFooter && <Footer/>}
        </>
    )
}

export default Layout;