import Image from "next/image";
import Login from "./components/login";
import MainPage from "./components/mainPage";
import SideBar from "./components/sideBar";
import MainUpload from "./components/mainUpload";
export default function Home() {


  return (
    <div className="flex w-[100%]">

      <SideBar />
      <MainPage />

    </div>
  );
}
