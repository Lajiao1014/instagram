"use client"

import "antd/dist/reset.css";
import { Divider } from "antd";
import Image from "next/image";
import { useState } from "react";


const SideBar = () => {
    const [closeStatus, setCloseStatue] = useState(true);

    const handleClose = () => {
        setCloseStatue(!closeStatus);
    }

    return (
        closeStatus ? (
            <div className="flex flex-col w-[320px] min-h-[100vh] border-r border-gray-700 relative transition-all duration-300 ease-in-out">
                <div className="absolute top-4 right-4 cursor-pointer">
                    {/*close*/}
                    <button onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white ml-9 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l6-6m-6 6l6 6" />
                        </svg>
                    </button>
                </div>
                {/*title*/}
                <header className="max-w-full h-[100px] text-white flex items-center text-[25px] font-serif font-bold ml-5">
                    Instagram
                </header>
                <div className=" flex flex-col  ml-5 mt-1 flex-grow cursor-pointer text-white">
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/home.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />
                        <div className="text-[18px] ">Home</div>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/search.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />
                        <div className="text-[20px] ">Search</div>
                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/explore.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />
                        <div className="text-[20px] ">Explore</div>
                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/reels.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />
                        <div className="text-[20px] ">Reels</div>
                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/messages.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />
                        <div className="text-[20px] ">Messages</div>
                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/heart.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />
                        <div className="text-[20px] ">Notifications</div>
                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/create.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />
                        <div className="text-[20px] ">Create</div>
                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/dashboard.png"
                            width={25}
                            height={100}
                            priority
                            alt=" icon"
                            className="filter invert"
                        />
                        <div className="text-[20px] ">Dashboard</div>
                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/home.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />
                        <div className="text-[20px] ">Profile</div>
                    </div>
                </div>
                {/* Footer */}
                <footer className="ml-5 flex flex-col justify-center h-[150px] cursor-pointer">
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/threands.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />
                        <div className="text-[20px] ">Threads</div>
                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/more.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />
                        <div className="text-[20px] ">More</div>
                    </div>
                </footer>
            </div>
        ) : (
            <div className="flex flex-col w-[80px] min-h-[100vh] border-r border-gray-700 relative transition-all duration-200 ease-in-out">

                <button onClick={handleClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white ml-9 mt-3 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h12m0 0l-6-6m6 6l-6 6" />
                    </svg>
                </button>
                {/*title*/}
                <div className="flex items-center p-2 hover:bg-gray-700 rounded-lg m-2 ml-2">
                    <Image
                        src="/sideBar/instagram.png"
                        width={25}
                        height={100}
                        priority
                        alt="New image icon"
                        className="filter invert"
                    />
                </div>
                <div className=" flex flex-col mt-1 flex-grow cursor-pointer text-white">
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/home.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />

                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/search.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />

                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/explore.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />

                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/reels.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />

                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/messages.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />

                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/heart.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />

                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/create.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />

                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/dashboard.png"
                            width={25}
                            height={100}
                            priority
                            alt=" icon"
                            className="filter invert"
                        />

                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/home.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />

                    </div>
                </div>
                {/* Footer */}
                <footer className="flex flex-col justify-center h-[150px] cursor-pointer">
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/threands.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />

                    </div>
                    <div className="flex items-center  gap-2 p-2 hover:bg-gray-700 rounded-lg m-2">
                        <Image
                            src="/sideBar/more.png"
                            width={25}
                            height={100}
                            priority
                            alt="New image icon"
                            className="filter invert"
                        />
                    </div>
                </footer>
            </div>
        )
    );
}

export default SideBar;