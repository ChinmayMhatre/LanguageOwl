import React, { useState, useEffect } from "react";
import Image from "next/image";

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=" min-h-screen bg-primary">
            <div className="border-b-[1px] fixed top-0 w-full z-10 border-secondary bg-primary py-4 flex items-center  justify-between gap-6 px-10 md:px-20">
                <h2 className="text-white font-bold text-xl tracking-wider hidden sm:block">
                    LanguageOwl
                </h2>
                <div className="flag sm:hidden rounded-lg bg-gray-400 h-10 w-12 "></div>


                <div className="streak flex items-center gap-2.5 sm:hidden ">
                        <img
                            src="/streak.png"
                            alt="streak"
                            width={30}
                            height={30}
                        />
                        <p className="text-lg font-bold text-white">9</p>
                    </div>
                <div className="sm:flex gap-6 hidden">
                    <div className="flag rounded-lg bg-gray-400 h-10 w-12 "></div>
                    <div className="streak flex items-center gap-2.5 ">
                        <img
                            src="/streak.png"
                            alt="streak"
                            width={30}
                            height={30}
                        />
                        <p className="text-lg font-bold text-white">9</p>
                    </div>
                    <div className=" rounded-full profile-pic h-10 w-10 bg-secondary"></div>
                </div>
                <button onClick={toggleMenu} className={isOpen ? "hamburger active" : "hamburger"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            </div>
            <div
                className={`nav-menu hidden fixed bg-secondary top-0 w-full text-center pb-5 pt-20 ${
                    isOpen ? "active" : ""
                } `}
            >
                <ul className="flex flex-col gap-10">
                    <li className="text-white font-bold text-lg tracking-wider">
                        Learn
                    </li>
                    <li className="text-white font-bold text-lg tracking-wider">
                        Cards
                    </li>
                    <li className="text-white font-bold text-lg tracking-wider">
                        Letters
                    </li>
                    <li className="text-white font-bold text-lg tracking-wider">
                        Forum
                    </li>
                    <li className="text-white font-bold text-lg tracking-wider">
                        Profile
                    </li>
                    <li className="text-white font-bold text-lg tracking-wider">
                        Logout
                    </li>
                </ul>
            </div>
            <div className="parts-containerw-full ">
                <div className="fixed w-[20%] h-screen hidden sm:flex flex-col items-center pt-40 justify-start gap-10">
                    <div className="flex gap-4 items-center">
                        <div className="icon h-8 w-8 rounded-lg bg-gray-400"></div>
                        <h3 className="text-white text-2xl hidden md:block">
                            Learn
                        </h3>
                    </div>
                    <div className="flex gap-4 items-center ">
                        <div className="icon h-8 w-8 rounded-lg bg-gray-400"></div>
                        <h3 className="text-white text-2xl hidden md:block">
                            Cards
                        </h3>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="icon h-8 w-8 rounded-lg bg-gray-400"></div>
                        <h3 className="text-white text-2xl hidden md:block">
                            Letter
                        </h3>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="icon h-8 w-8 rounded-lg bg-gray-400"></div>
                        <h3 className="text-white text-2xl hidden md:block">
                            Forum
                        </h3>
                    </div>
                </div>
                <div className=" sm:ml-[20%] w-full sm:w-[80%] lg:w-[50%] bg-white pt-40">
                    {children}
                </div>
                <div className="w-[30%] px-14 hidden lg:block fixed right-0 top-0 mt-40 h-screen">
                    <div className="flex justify-between ">
                        <div className=" w-[45%] py-6 text-white rounded-xl border-b-[6px] border-[2px] border-secondary">
                            <h3 className="text-center text-6xl font-bond">
                                9
                            </h3>
                            <p className="pt-4 text-lg text-center tracking-wide">
                                Day Streak
                            </p>
                        </div>
                        <div className=" w-[45%]  py-6 text-white rounded-xl border-b-[6px] border-[2px] border-secondary">
                            <h3 className="text-center text-6xl font-bond">
                                9
                            </h3>
                            <p className="pt-4 text-lg text-center tracking-wide">
                                Day Streak
                            </p>
                        </div>
                    </div>
                    <div className=" p-5 mt-10  text-white rounded-xl border-b-[6px] border-[2px] border-secondary">
                        <h3 className="text-2xl font-bond">Daily Progress</h3>
                        <p className="pt-2 text-md text-[#c0c0c0] tracking-wide">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Dolorum similique laboriosam ad labore enim
                            porro praesentium sed dolores et nobis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
