import React from "react";
import Layout from "../components/Layout";

const profile = () => {
    return (
        <Layout>
            <div className="">
                <div className="flex gap-8 items-center flex-col md:flex-row mx-auto w-[70%] ">
                    <div className="h-40 w-40 rounded-full bg-gray-400"></div>
                    <div className="">
                        <h2 className="text-white text-4xl font-bold ">
                            Chinmay Mhatre
                        </h2>
                        <h3 className="text-white text-xl">
                            Chinmay@chinmay.com
                        </h3>
                    </div>
                </div>
                <h3 className="text-white text-center font-bold text-2xl tracking-wider pt-20">
                    Levels cleared
                </h3>

                <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div className="flex gap-4 flex-col py-8 items-center rounded-xl border-b-[6px] border-[2px] border-secondary">
                        <div className="icon h-16 w-24 rounded-lg bg-gray-400"></div>
                        <h3 className="text-white text-2xl">Level 1</h3>
                    </div>
                    <div className="flex gap-4 flex-col py-8 items-center rounded-xl border-b-[6px] border-[2px] border-secondary">
                        <div className="icon h-16 w-24 rounded-lg bg-gray-400"></div>
                        <h3 className="text-white text-2xl">Level 1</h3>
                    </div>
                    <div className="flex gap-4 flex-col py-8 items-center rounded-xl border-b-[6px] border-[2px] border-secondary">
                        <div className="icon h-16 w-24 rounded-lg bg-gray-400"></div>
                        <h3 className="text-white text-2xl">Level 1</h3>
                    </div>
                    <div className="flex gap-4 flex-col py-8 items-center rounded-xl border-b-[6px] border-[2px] border-secondary">
                        <div className="icon h-16 w-24 rounded-lg bg-gray-400"></div>
                        <h3 className="text-white text-2xl">Level 1</h3>
                    </div>
                </div>

                <div className="">
                    <h3 className="text-white text-center font-bold text-2xl tracking-wider pt-20">
                        Levels cleared
                    </h3>
                    <div className=" w-[70%] relative h-80 mt-10 mx-auto rounded-xl border-b-[6px] border-[2px] border-secondary">
                        fsdfasdffffffghhh
                        <div className="h-10 w-10 border-4 -top-[1.25rem] left-[20%] absolute border-secondary border-r-0 border-b-0 rounded-full"></div>
                        <div className="h-10 w-10 border-4 -top-[1.25rem] left-[30%] absolute border-secondary border-r-0 border-b-0 rounded-full"></div>
                        <div className="h-10 w-10 border-4 -top-[1.25rem] left-[40%] absolute border-secondary border-r-0 border-b-0 rounded-full"></div>
                        <div className="h-10 w-10 border-4 -top-[1.25rem] left-[50%] absolute border-secondary border-r-0 border-b-0 rounded-full"></div>
                        <div className="h-10 w-10 border-4 -top-[1.25rem] left-[60%] absolute border-secondary border-r-0 border-b-0 rounded-full"></div>
                        <div className="h-10 w-10 border-4 -top-[1.25rem] left-[70%] absolute border-secondary border-r-0 border-b-0 rounded-full"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default profile;
