import Image from "next/image";
import Login from "./components/login";
import MainPage from "./components/mainPage";
import SideBar from "./components/sideBar";
import MainUpload from "./components/mainUpload";
import SignIn from "./components/signIn";
export default function Home() {

  return (
    <div className="flex w-[100%]">
      <SignIn />
    </div>
  );
}
