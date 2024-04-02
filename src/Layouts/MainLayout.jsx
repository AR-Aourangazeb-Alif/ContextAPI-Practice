import { Link, Outlet } from "react-router-dom";
import UserContextProvider from "../context/UserContextProvider";

const MainLayout = () => {
    return (
        <UserContextProvider>

            <div className="w-full py-6 bg-slate-600 flex items-center justify-around">
                <Link
                    to={'/'}
                    className="text-3xl font-semibold text-white">
                    NavBar
                </Link>

                <div className="flex items-center gap-10 text-lg font-medium text-white">
                    <Link
                        to={'/'}
                    >
                        Home
                    </Link>

                    <Link
                        to={'/login'}
                    >
                        Login
                    </Link>
                </div>
            </div>


            <Outlet></Outlet>

        </UserContextProvider>
    );
};

export default MainLayout;