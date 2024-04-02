import { useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {

    // const [name, setName] = useState();
    // const [age, setage] = useState();

    const {setUser} = useContext(UserContext);

    const handleSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const age = e.target.age.value;

        setUser({name, age});
    }

    return (
        <form
            className="flex flex-col p-6 bg-blue-900 w-[400px] mx-auto mt-14 gap-4 rounded-xl"
            onSubmit={handleSubmit}
            >

            <input name="name" type="text" placeholder="name" className="p-4 rounded-lg" required />

            <input name="age" type="number" placeholder="age" className="p-4 rounded-lg" required />

            <button className="p-4 rounded-lg font-medium text-lg text-white bg-slate-400">Login</button>

        </form>
    );
};

export default Login;