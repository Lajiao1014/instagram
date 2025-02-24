import React, { useContext } from 'react';
import Image from 'next/image';
import { useAuth } from '../Context/autheneication';
const Login = () => {


    const authCtx = useAuth()

    const callapi = () => {
        authCtx.token
    }
    return (
        <div className="flex items-center justify-center  h-screen min-w-[100vw] mt-10">
            <div className="w-[850px] h-[96%] flex items-center flex-col">
                {/* Login */}
                <div style={{ borderColor: 'rgb(147, 149, 131)' }} className="w-[335px] h-[400px] bg-transparent border rounded-sm mb-2">
                    <div className="flex items-center justify-center w-[100%] h-[100px] font-serif text-[40px] ">Instagram</div>
                    <div className="flex flex-col items-center mt-4">
                        {/* Input for Phone number, Username, or Email */}
                        <input
                            type="text"
                            placeholder="Phone number, username, or email"
                            style={{ borderColor: 'rgb(147, 149, 131)' }}
                            className="w-[75%] h-[40px] mb-2 p-2 border  rounded bg-black text-white text-[13px]"
                        />
                        {/* Input for Password */}
                        <input
                            type="password"
                            placeholder="Password"
                            style={{ borderColor: 'rgb(147, 149, 131)' }}
                            className="w-[75%] h-[40px] mb-4 p-2 border rounded bg-black text-white text-[13px]"
                        />
                        <button className="w-[75%] h-[30px] bg-blue-400 text-white rounded-md">Log in</button>
                        {/* OR */}
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <div style={{ borderColor: 'rgb(147, 149, 131)' }} className="border-b w-[110px]"></div>
                            <span className="text-[13px]">OR</span>
                            <div style={{ borderColor: 'rgb(147, 149, 131)' }} className="border-b w-[110px]"></div>
                        </div>
                        <div className="flex items-center justify-center mt-4 gap-2">
                            <Image src="/2021_Facebook_icon.svg.webp" width={20} height={20} alt="Facebook" />
                            <a href="" className="text-[18px] text-blue-500">Log in with Facebook </a>
                        </div>
                        <div className="text-[14px] mt-4">Forgot password?</div>
                    </div>
                </div>
                {/* Don't have an account? Sign up */}
                <div style={{ borderColor: 'rgb(147, 149, 131)' }} className="w-[335px] h-[80px] bg-transparent flex justify-center items-center border rounded-sm">Don't have an account?<span className="text-blue-500">Sign up</span></div>
                <div className="w-[335px] h-[110px] bg-transparent flex  items-center flex-col relative mt-2" >

                    {/* Get the app */}
                    <span className="mt-3">Get the app.</span>
                    <div className="flex absolute gap-2 ">
                        <Image
                            src="/download-on-the-app-store-apple-logo.svg"
                            width={150}
                            height={50}
                            priority
                            alt="File icon"
                        />
                        <Image
                            src="/download-on-the-app-store-apple-logo.svg"
                            width={150}
                            height={50}
                            priority
                            alt="File icon"
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="w-[750px] h-[100px] flex flex-col items-center justify-center text-[10px] ">
                    <div className="flex flex-wrap justify-between w-full">
                        <a href="">Meta</a>
                        <a href="">About</a>
                        <a href="">Blog</a>
                        <a href="">Jobs</a>
                        <a href="">Help</a>
                        <a href="">API</a>
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                        <a href="">Locations</a>
                        <a href="">Instagram Lite</a>
                        <a href=""> Threads</a>
                        <a href="">Contact Uploading & Non-Users</a>
                        <a href="">Meta Verified</a>
                    </div>
                    <div className="flex ">
                        <a href="">Englishs</a>
                        <a href="">© 2025 Instagram from Meta</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
