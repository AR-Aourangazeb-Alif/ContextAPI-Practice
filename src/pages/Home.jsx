import { useContext } from "react";
import UserContext from "../context/UserContext";

const Home = () => {
    
    const {user} = useContext(UserContext);
    
    if(!user){
        return(
            <div className="flex items-center justify-center w-full h-[70svh] text-3xl text-gray-800 font-bold">
                <h1>Please Login</h1>
            </div>
        )
    } else{
        return(
            <div className="flex items-center justify-center w-full h-[70svh] text-3xl text-gray-700 font-bold flex-col gap-8">
                <h1>Name: {user.name}</h1>
                <h1>Age: {user.age}</h1>
            </div>
        )
    }
};

export default Home;