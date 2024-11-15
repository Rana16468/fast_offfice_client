import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <>
        <h1 className="text-xl">Navbar</h1>
        <Outlet/>
        <h1 className="text-xl">Footer</h1>
            
        </>
    );
};

export default Main;