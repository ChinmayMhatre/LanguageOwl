import React from "react";
import { IconContext } from "react-icons";

const Button = ({ logo, title }) => {
    const Logo = logo;
    console.log(logo);
    return (
        <div className="mt-5 font-bold text-xl items-center gap-2  tracking-wide bg-white text-[#575757] flex justify-center py-4 w-64 md:w-96 rounded-[16px] active:border-b-[2px] hover:border-[#1cb0f6] hover:bg-[#ddf4ff] border-[2px] border-b-[6px] transition-all duration-200 cursor-pointer border-[#c0c0c0]">
            <IconContext.Provider value={{ className: "text-[#1cb0f6] text-3xl" }}>
            <Logo />
            </IconContext.Provider>
            {title}
        </div>
    );
};

export default Button;
