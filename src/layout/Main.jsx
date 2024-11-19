import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer, { PageLayout } from "../shared/Footer/Footer";


const Main = () => {
    return (
        <>
        <Navbar/>
        <Outlet/>
        <PageLayout/>
            
        </>
    );
};

export default Main;