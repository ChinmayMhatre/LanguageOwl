import React from "react";
import Image from "next/image";

const Layout = ({ children }) => {
    return (
        <div className=" min-h-screen bg-primary">
            <div className="border-b-[1px] fixed top-0 w-full border-secondary bg-primary py-4 flex items-center  justify-end gap-6 px-20">
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
            <div className="parts-containerw-full ">
                <div className="fixed w-[33.333%] h-screen flex flex-col items-center justify-center gap-10">
                    <div className="flex gap-4 items-center">
                        <div className="icon h-8 w-8 rounded-lg bg-gray-400"></div>
                        <h3 className="text-white text-2xl">Learn</h3>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="icon h-8 w-8 rounded-lg bg-gray-400"></div>
                        <h3 className="text-white text-2xl">Cards</h3>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="icon h-8 w-8 rounded-lg bg-gray-400"></div>
                        <h3 className="text-white text-2xl">Letter</h3>
                    </div>
                    <div className="flex gap-4 items-center">
                        <div className="icon h-8 w-8 rounded-lg bg-gray-400"></div>
                        <h3 className="text-white text-2xl">Forum</h3>
                    </div>
                </div>
                <div className="ml-[33.333%] w-[33.333%] pt-40">{children}</div>
                <div className="w-[33.333%] px-20 fixed right-0 top-0 mt-40 h-screen">
                    <div className="flex justify-center gap-10 ">
                        <div className=" px-10 py-6 text-white rounded-xl border-b-[6px] border-[2px] border-secondary">
                            <h3 className="text-center text-6xl font-bond">
                                9
                            </h3>
                            <p className="pt-4 text-lg tracking-wide">
                                Day Streak
                            </p>
                        </div>
                        <div className=" px-10 py-6 text-white rounded-xl border-b-[6px] border-[2px] border-secondary">
                            <h3 className="text-center text-6xl font-bond">
                                9
                            </h3>
                            <p className="pt-4 text-lg tracking-wide">
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
