import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            nav 
            <Outlet/>
            footer
        </>
    )
}

export default Layout;