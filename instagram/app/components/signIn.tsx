import Image from "next/image";

const SignIn = () => {
    return (

        <div className="flex items-center justify-center  h-screen min-w-[100vw] mt-10">
            <div className="w-fit h-[96%] flex items-center flex-col">
                {/* Sign up */}
                <div style={{ borderColor: 'rgb(147, 149, 131)' }} className="w-[335px] h-fit bg-transparent border rounded-sm mb-2">
                    <div className="flex items-center justify-center w-[100%] h-[100px] font-serif text-[40px] ">Instagram</div>
                    <div className="text-[18px] text-center">Sign up to see photos and videos<br />from your friends.</div>

                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center mt-2 gap-2 bg-blue-500 w-[80%] h-[30px] rounded-md ">
                            <Image src="/2021_Facebook_icon.svg.webp" width={20} height={20} alt="Facebook" />
                            <a href="" className="text-[18px] text-white">Log in with Facebook </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        {/* OR */}
                        <div className="flex items-center justify-center p-2 gap-2">
                            <div style={{ borderColor: 'rgb(147, 149, 131)' }} className="border-b w-[110px]"></div>
                            <span className="text-[13px]">OR</span>
                            <div style={{ borderColor: 'rgb(147, 149, 131)' }} className="border-b w-[110px]"></div>
                        </div>
                        <input
                            type="text"
                            placeholder="Mobile number or Email"
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
                        <input
                            type="text"
                            placeholder="Full Name"
                            style={{ borderColor: 'rgb(147, 149, 131)' }}
                            className="w-[75%] h-[40px] mb-2 p-2 border  rounded bg-black text-white text-[13px]"
                        />
                        {/* Input for Password */}
                        <input
                            type="password"
                            placeholder="Username"
                            style={{ borderColor: 'rgb(147, 149, 131)' }}
                            className="w-[75%] h-[40px] mb-4 p-2 border rounded bg-black text-white text-[13px]"
                        />
                        <div className="text-[13px] text-center w-[90%] m-2">People who use our service may have uploaded your contact information to Instagram. Learn<br />More</div>
                        <div className="text-[13px] text-center w-[90%] m-2">By signing up, you agree to our Terms , Privacy<br />Policy and Cookies Policy .</div>
                        <button className="w-[75%] h-[30px] bg-blue-400 text-white rounded-md mb-10">Sign up</button>
                    </div>
                </div>
                {/* Don't have an account? Sign up */}
                <div style={{ borderColor: 'rgb(147, 149, 131)' }} className="w-[335px] h-[80px] bg-transparent flex flex-col justify-center items-center border rounded-sm p-10">
                    <div>Have an account?</div>
                    <div className="text-blue-500">Log in</div>
                </div>
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




export default SignIn;