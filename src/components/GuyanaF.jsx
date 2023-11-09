import guyanaVideo from "./imgs/Guyana-Foundation_1_2.mp4";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function GuyanaF() {
  return (
    <div className="grid pb-10 max-xl:grid-flow-row">
      <div className="flex flex-col 2xl:w-[700px] xl:w-[600px] text-center gap-5 max-md:w-full mx-auto justify-center">
        <a
          alt="website"
          rel="noreferrer"
          target="_blank"
          href="https://theguyanafoundation.com"
        >
          <h1 className="text-3xl xl:text-6xl hover:underline hover:cursor-pointer decoration-lime-500 whitespace-nowrap mx-auto bg-clip-text text-transparent tracking-tighter bg-gradient-to-r from-red-700 via-yellow-500 to-lime-500 font-extrabold font-Inter py-2">
            Guyana Foundation
          </h1>
        </a>
        <h2 className="max-xl:w-10/12 px-1 mx-auto 2xl:text-lg tracking-normal">
          Built with: <b>MongoDB, ExpressJS, ReactJS, NodeJS</b> <br></br>
          <br></br>
          Click the video to see the website.
        </h2>
      </div>
      <BsFillArrowDownCircleFill className="mx-auto hidden text-2xl my-3 fill-lime-400 animate-bounce max-xl:block" />
      <a
        alt="website"
        rel="noreferrer"
        target="_blank"
        href="https://www.theguyanafoundation.com"
      >
        <section className="h-36 sm:h-72 mx-auto">
          <video
            autoPlay
            loop
            muted
            className="max-w-xs sm:max-w-xl grid mx-auto h-full"
            src={guyanaVideo}
          />
        </section>
      </a>
    </div>
  );
}
