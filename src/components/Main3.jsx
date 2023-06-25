import React from "react";
import guyanaVideo from "./imgs/Guyana-Foundation_1_2.mp4";
import { BsFillArrowDownCircleFill } from "react-icons/bs"

export default function Main2() {
  return (
    <main className="bg-gradient-to-br grid tracking-tight font-Raleway h-[100vh] max-xl:h-full from-slate-800 to-black text-white border-t">
      <h1 className="text-6xl text-center mt-10 max-xl:text-4xl max-md:text-3xl">
        I am currently working on this <b className="">website:</b>
      </h1>
      <div className="grid grid-flow-col max-xl:grid-flow-row">
        <div className="flex flex-col 2xl:w-[700px] xl:w-[600px] text-center gap-5 h-96 max-md:w-full mx-auto justify-center">
          <h1 className="text-3xl mx-auto bg-clip-text text-transparent tracking-tighter bg-gradient-to-r from-red-700 via-yellow-500 to-lime-500 font-extrabold font-Inter py-2">
            Guyana Foundation
          </h1>
          <h2 className="max-xl:w-10/12 px-1 mx-auto 2xl:text-lg tracking-normal">
            This is a website of a foundation, that has a portfolio layout.{" "}
            <br></br>
            Describing what Guyana Foundation is for and what kind of
            contributions they have on Guyanese people. <br></br>
            <br></br>
            Click the video to see the website.
          </h2>
        </div>
        <BsFillArrowDownCircleFill className="mx-auto hidden text-2xl mb-10 fill-lime-400 animate-bounce max-xl:block" />
        <a target="_blank" href="http://guyanaf.vercel.app">
          <video
            autoPlay
            loop
            muted
            className="px-2 2xl:h-full overflow-hidden cursor-pointer 2xl:w-[1000px] xl:w-[900px] lg:w-[800px] max-md:w-full hover:animate-pulse h-[400px] aspect-video place-self-center place-items-center mx-auto"
            src={guyanaVideo}
          />
        </a>
      </div>
    </main>
  );
}
