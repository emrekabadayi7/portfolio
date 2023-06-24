import React from "react";
import guyanaVideo from "./imgs/Guyana-Foundation_1_2.mp4";

export default function Main2() {
  return (
    <main className="bg-gradient-to-tr grid tracking-tight font-Raleway h-[100vh] from-slate-800 to-black text-white border-t">
      <h1 className="text-6xl text-center mt-10 max-xl:text-4xl max-md:text-3xl">
        I am currently working on this{" "}
        <b className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-yellow-500 to-lime-500">
          website
        </b>
      </h1>
      <div className="grid grid-flow-col max-xl:grid-flow-row">
        <div className="flex flex-col 2xl:w-[700px] xl:w-[600px] text-center gap-10 max-md:w-full mx-auto h-full justify-center">
          <h1 className="text-3xl mx-auto bg-clip-text text-transparent bg-gradient-to-r from-red-700 via-yellow-500 to-lime-500 font-extrabold py-2">
            Guyana Foundation:
          </h1>
          <h2 className="max-xl:w-10/12 mx-auto 2xl:text-lg tracking-normal">
            This is a website of a foundation, that has a portfolio layout.
            Describing what Guyana Foundation is for and what kind of
            contributions they have on Guyanese people. <br></br>
            <br></br>
            Click the video to see the website.
          </h2>
        </div>
        <a target="_blank" href="http://guyanaf.vercel.app">
          <video
            autoPlay
            loop
            muted
            className="px-4 h-fit w-auto max-xl:w-9/12 max-md:w-full aspect-video place-self-center place-items-center mx-auto"
            src={guyanaVideo}
          />
        </a>
      </div>
    </main>
  );
}
