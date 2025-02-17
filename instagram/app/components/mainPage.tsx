import Upload from "./Upload";
import Image from "next/image";



const MainPage = () => {
    return (
        <div className="flex justify-center items-center h-[100vh] w-[100vw]">
            <div className="bg-red-500 w-[80%] h-[100vh]">
                <div className="bg-blue-500 h-[25%] flex ">
                    <div className="bg-green-500 w-[40%] h-[100%] flex justify-center items-center">
                        <Upload />
                    </div>
                    <div className="flex flex-col w-[60%] h-[100%]">
                        <header className="bg-yellow-500 w-[100%] h-[35%] flex items-center ">
                            <div className="flex items-center gap-7">
                                <div className="text-[20px] font-bold ml-10">_lajiao_</div>
                                <div className="flex items-center gap-3">
                                    <div className="border border-black rounded-lg p-1">Edit profile</div>
                                    <div className="border border-black rounded-lg p-1">View archive</div>
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
                        <div className="bg-yellow-400 max-w-full h-[20%] flex items-center gap-10 ml-10">
                            <div>0 posts</div>
                            <div>674M</div>
                            <div>0 following</div>
                        </div>
                        <div className="bg-yellow-300 max-w-full flex flex-grow  ml-10">🎉 🎉 🎉 🎉 🎉 🎉 </div>
                    </div>
                </div>
                <div className="flex items-center w-[100%] h-[20%]">
                    <Upload style="text-2xl w-24 h-24 rounded-full border-2 border-gray-300 flex justify-center items-center cursor-pointer mb-2 bg-gray-400 hover:bg-gray-500"

                    />
                </div>
            </div>

        </div>

    )
}

export default MainPage;