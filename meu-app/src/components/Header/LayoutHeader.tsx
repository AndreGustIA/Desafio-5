import Header from "./Header";
import { Outlet } from 'react-router-dom';


const LayoutHeader = () => {
    return (
        <>
            <Header/>
            <Outlet></Outlet>
        </>
    )
}

export default LayoutHeader;