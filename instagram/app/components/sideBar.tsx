import "antd/dist/reset.css";
import { Divider } from "antd";
import Image from "next/image";

const SideBar = () => {
    return (
        <div className="flex flex-col w-[350px] min-h-[100vh] border-r border-gray-700 relative">
            <div className="absolute top-4 right-4 cursor-pointer">
                {/*箭頭圖標*/}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H3m0 0l6-6m-6 6l6 6" />
                </svg>
            </div>
            {/*header*/}
            <header className="max-w-full h-[100px] text-white flex items-center text-[25px] font-serif font-bold ml-5">Instagram</header>
            {/*body*/}
            <div className=" flex flex-col  ml-5 mt-5 flex-grow cursor-pointer text-white">
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
    )
}

export default SideBar;