import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="w-[1380px] mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
        
    );
};

export default Root;