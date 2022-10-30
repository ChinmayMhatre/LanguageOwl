import React from "react";
import Button from "../../components/Button";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";


const Login = () => {
    return (
        <div className="h-screen bg-primary text-white flex flex-col items-center justify-center ">
            <div className="logo-container h-52 w-52 md:h-72 md:w-72 rounded-full bg-secondary "></div>
            <h2 className="font-bold tracking-wider text-2xl mt-9">Sign in using</h2>
            <div className="mt-8">
                <Button title="Google" logo={FcGoogle} />
                <Button title="Facebook" logo={BsFacebook} />
            </div>
            <p className="mt-10 w-72 text-center tracking-wide font-light">
            By signing in to Duolingo, you agree to our <span className="font-bold">Terms</span> and <span className="font-bold">Privacy Policy</span>.
            </p>
        </div>
    );
};

export default Login;
