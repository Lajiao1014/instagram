"use client"

import { useAppSelector } from "./api/src/hooks";

import Image from "next/image";
import Login from "./components/login";
import MainPage from "./components/mainPage";
import SideBar from "./components/sideBar";
import MainUpload from "./components/mainUpload";
import SignUp from "./components/signUp";
export default function Home() {

  const count = useAppSelector((state) => state.counter.value);

  return (
    <div className="flex w-[100%]">
      <SignUp />
    </div>
  );
}
