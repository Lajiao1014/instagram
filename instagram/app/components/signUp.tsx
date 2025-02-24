import Image from "next/image";
import { useRef, useState } from "react";
import axios from 'axios';

const SignUp = () => {

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const fullNameRef = useRef<HTMLInputElement>(null);
    const lastnameRef = useRef<HTMLInputElement>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const handleSignUp = async () => {
        try {
            setIsLoading(true);
            setError(null);

            const signUpData = {
                username: usernameRef.current?.value,
                password: passwordRef.current?.value,
                fullName: fullNameRef.current?.value,
                lastName: lastnameRef.current?.value,
            };

            const { data } = await axios.post('/api/signup', signUpData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            setSuccess(true);
            console.log('註冊成功：', data);
            // 可以在這裡添加成功後的處理，比如跳轉到登入頁面

        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error.response?.data?.error || '註冊失敗，請稍後再試');
            } else {
                setError('發生未知錯誤');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (

        <div className="flex items-center justify-center  h-screen min-w-[100vw] ">
            <div className="w-fit h-[100%] flex items-center flex-col mt-10">

                {/* Sign up */}
                <div style={{ borderColor: 'rgb(147, 149, 131)' }} className="w-[335px] h-fit bg-transparent border rounded-sm mb-2">
                    <div className="flex items-center justify-center w-[100%] h-[100px] font-serif text-[40px] ">Instagram</div>
                    <div className="text-[16px] text-center text-gray-400 ">Sign up to see photos and videos<br />from your friends.</div>

                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center mt-2 gap-2 bg-blue-500 w-[80%] h-[30px] rounded-md ">
                            <Image src="/2021_Facebook_icon.svg.webp" width={20} height={20} alt="Facebook" />
                            <a href="" className="text-[16px] text-white">Log in with Facebook </a>
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
                            ref={usernameRef}
                            type="text"
                            placeholder="Mobile number or Email"
                            style={{ borderColor: 'rgb(147, 149, 131)' }}
                            className="w-[75%] h-[40px] mb-2 p-2 border  rounded bg-black text-white text-[13px]"
                        />
                        {/* Input for Password */}
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder="Password"
                            style={{ borderColor: 'rgb(147, 149, 131)' }}
                            className="w-[75%] h-[40px] mb-2 p-2 border rounded bg-black text-white text-[13px]"
                        />
                        <input
                            ref={fullNameRef}
                            type="text"
                            placeholder="Full Name"
                            style={{ borderColor: 'rgb(147, 149, 131)' }}
                            className="w-[75%] h-[40px] mb-2 p-2 border  rounded bg-black text-white text-[13px]"
                        />
                        {/* Input for Password */}
                        <input
                            ref={lastnameRef}
                            type="text"
                            placeholder="Last Name"
                            style={{ borderColor: 'rgb(147, 149, 131)' }}
                            className="w-[75%] h-[40px] mb-4 p-2 border rounded bg-black text-white text-[13px]"
                        />
                        <div className="text-[13px] text-center w-[90%] m-2  text-gray-400 ">People who use our service may have uploaded your contact information to Instagram. <span className="text-gray-100">Learn<br />More</span></div>
                        <div className="text-[13px] text-center w-[90%] m-2 text-gray-400">By signing up, you agree to our <span className="text-gray-100">Terms</span> , <span className="text-gray-100">Privacy<br />Policy</span> and <span className="text-gray-100">Cookies Policy .</span></div>

                        <button
                            onClick={handleSignUp}
                            disabled={isLoading}
                            className={`w-[75%] h-[30px] ${isLoading ? 'bg-blue-300' : 'bg-blue-600'
                                } text-white rounded-md mb-2`}
                        >
                            {isLoading ? 'Signing up...' : 'Sign up'}
                        </button>

                        {error && (
                            <div className="text-red-500 text-sm mb-2">{error}</div>
                        )}

                        {success && (
                            <div className="text-green-500 text-sm mb-8">註冊成功！</div>
                        )}
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
        </div >
    );
};




export default SignUp;