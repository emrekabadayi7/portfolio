import { BsFillArrowDownCircleFill } from "react-icons/bs";
import SpaQuestWebsite from "./imgs/SpaQuestWebsite.png";

export default function GuyanaF() {
  return (
    <div className="grid border m-2 border-purple-500 pb-10 max-xl:grid-flow-row">
      <div className="flex flex-col 2xl:w-[700px] xl:w-[600px] text-center gap-5 max-md:w-full mx-auto justify-center">
        <a
          alt="website"
          rel="noreferrer"
          target="_blank"
          href="https://spaquest.vercel.app"
        >
          <h1 className="text-3xl hover:scale-105 duration-100 xl:text-6xl hover:cursor-pointer whitespace-nowrap mx-auto bg-clip-text text-transparent tracking-tighter bg-gradient-to-r from-purple-600 to-orange-600 font-extrabold font-Inter py-2">
            SpaQuest
          </h1>
        </a>
        <h2 className="max-xl:w-10/12 px-1 mx-auto 2xl:text-lg tracking-normal">
          Built with: <b>MongoDB, NextJS, Firebase</b> <br></br>
          <br></br>
          Click on the picture to see the website.
        </h2>
      </div>
      <BsFillArrowDownCircleFill className="mx-auto hidden text-2xl my-3 fill-lime-400 animate-bounce max-xl:block" />
      <a
        alt="website"
        rel="noreferrer"
        target="_blank"
        href="http://spaquest.vercel.app"
      >
        <section className="h-36 sm:h-72 mx-auto">
          <img
            alt="SpaQuest website landing page"
            className="w-72 sm:w-[500px] grid mx-auto h-full"
            src={SpaQuestWebsite}
          />
        </section>
      </a>
    </div>
  );
}
