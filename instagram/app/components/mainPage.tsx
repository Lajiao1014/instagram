import Upload from "./Upload";
import Image from "next/image";
import MainUpload from "./mainUpload";
import { Divider } from "antd";


const MainPage = () => {
    return (
        <div className="flex justify-center items-center h-[100vh] w-[100vw]">
            <div className="w-[80%] h-[100vh] bg-red-500">
                <div className=" h-[25%] flex ">
                    <div className="w-[40%] h-[100%] flex justify-center items-center">
                        <Upload />
                    </div>
                    <div className="flex flex-col w-[60%] h-[100%]">
                        <header className="w-[100%] h-[35%] flex items-center ">
                            <div className="flex items-center gap-7">
                                <div className="text-[20px] font-bold ml-10">_lajiao_</div>
                                <div className="flex items-center shrink-0 gap-3">
                                    <div className="border border-black rounded-lg p-1 hover:bg-gray-500 cursor-pointer bg-gray-400 px-4">Edit profile</div>
                                    <div className="border border-black rounded-lg p-1 hover:bg-gray-500 cursor-pointer bg-gray-400 px-4    ">View archive</div>
                                    <Image
                                        src="/setting.png"
                                        width={25}
                                        height={100}
                                        priority
                                        alt="New image icon"
                                        className="filter invert"
                                    />
                                </div>
                            </div>

                        </header>
                        <div className=" max-w-full h-[20%] flex items-center gap-10 ml-10">
                            <div>0 posts</div>
                            <div>674M</div>
                            <div>0 following</div>
                        </div>
                        <div className="max-w-full flex flex-grow  ml-10">🎉 🎉 🎉 🎉 🎉 🎉 </div>
                    </div>
                </div>
                <div className="flex items-center w-[100%] h-[20%]">

                </div>
                <Divider className="m-0" />
                <div className="flex gap-10 w-full text-2xl justify-center ">
                    <div className="hover:bg-gray-500 cursor-pointer">POSTS</div>
                    <div className="hover:bg-gray-500 cursor-pointer">SAVED</div>
                    <div className="hover:bg-gray-500 cursor-pointer">TAGGED</div>
                </div>
                <MainUpload />
            </div>

        </div>

    )
}

export default MainPage;