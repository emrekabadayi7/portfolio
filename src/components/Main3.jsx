import React from "react";
import guyanaVideo from "./imgs/Guyana-Foundation_1_2.mp4";
import { BsFillArrowDownCircleFill } from "react-icons/bs"

export default function Main2() {
  return (
    <main 
    className="bg-gradient-to-br grid h-[100vh] tracking-tight font-Raleway max-xl:h-full from-slate-800 to-black text-white border-t">
      <h1 className="text-6xl text-center my-10 max-xl:text-4xl  max-md:text-3xl">
        Here is my <b className="">portfolio:</b>
      </h1>
      <div className="grid  grid-flow-col h-[60vh] max-xl:grid-flow-row">
        <div 
        className="flex flex-col h-full 2xl:w-[700px] xl:w-[600px] text-center gap-5 max-md:w-full mx-auto justify-center">
          <h1 className="text-3xl mx-auto bg-clip-text text-transparent tracking-tighter bg-gradient-to-r from-red-700 via-yellow-500 to-lime-500 font-extrabold font-Inter py-2">
            Guyana Foundation
          </h1>
          <h2 className="max-xl:w-10/12 px-1 mx-auto 2xl:text-lg tracking-normal">
            Used languages: <b>MongoDB, ExpressJS, ReactJS, NodeJS</b> <br></br>
            <br></br>
            Click the video to see the website.
          </h2>
        </div>
        <BsFillArrowDownCircleFill className="mx-auto hidden text-2xl my-3 fill-lime-400 animate-bounce max-xl:block" />
        <a alt="website" rel="noreferrer" target="_blank" href="https://www.theguyanafoundation.com">
          <video
            autoPlay
            loop
            muted
            className="px-2 2xl:h-full overflow-hidden cursor-pointer h-full w-fit 2xl:w-[1000px] xl:w-[900px] lg:w-[800px] max-md:w-full hover:animate-pulse xl:h-[400px] aspect-video place-self-center place-items-center mx-auto"
            src={guyanaVideo}
          />
        </a>
      </div>
    </main>
  );
}
