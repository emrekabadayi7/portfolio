import React, { useState, useEffect } from "react";
import emrePP from "./imgs/emrePP.jpg";

import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiGit,
  DiDatabase,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiAdobepremierepro,
  SiTailwindcss,
  SiAdobephotoshop,
} from "react-icons/si";

import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

export default function Main() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [IsH2Visible, setIsH2Visible] = useState(false);
  const [IsNameVisible, setIsNameVisible] = useState(false);
  const [iconSize, setIconSize] = useState(null); // Initial size
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const handleSkillClick = (skill) => {
    const descriptions = {
      HTML:
        "HTML is the standard markup language for creating web pages. It describes the structure of a web page semantically and originally included cues for the appearance of the document.",
      CSS:
        "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
      JavaScript:
        "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript specification. It is a language that is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm.",
      ReactJS:
        "ReactJS is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Facebook and a community of individual developers and companies.",
      NextJS:
        "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications.",
      TailwindCSS:
        "TailwindCSS is a utility-first CSS framework for rapidly building custom designs. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs.",
      MongoDB:
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
      Git:
        "Git is a distributed version-control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.",
      "Adobe Photoshop":
        "Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It has become the industry standard in raster graphics editing, used for graphics design and digital art.",
      "Adobe Premiere":
        "Adobe Premiere Pro is a timeline-based video editing software application developed by Adobe Systems. It is geared towards professional video editing, while its sibling, Adobe Premiere Elements, targets the consumer market.",
    };
  };

  React.useLayoutEffect(() => {
    setIsContentVisible(true);
    const timeout = setTimeout(() => {
      setIsH2Visible(true);
    }, 500);
    const timeout2 = setTimeout(() => {
      setIsNameVisible(true);
    }, 2000);

    return () => {
      clearTimeout(timeout, timeout2);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const breakpoints = [
        { width: 500, size: 70 },
        { width: 1200, size: 80 },
        { width: 1700, size: 100 },
        { width: 1900, size: 150 },
      ];
      let newSize = 180; // Default size
      for (const breakpoint of breakpoints) {
        if (window.innerWidth < breakpoint.width) {
          newSize = breakpoint.size;
          break;
        }
      }
      setIconSize(newSize);

      if (!isAnimationComplete) {
        setIsAnimationComplete(true);
      }
    };

    handleResize(); // Call the function initially

    window.addEventListener("resize", handleResize); // Add event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup event listener
    };
  }, [isAnimationComplete]);

  const emrekabadayi = "Emre Kabadayı";

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <main className="bg-gradient-to-b overflow-y-hidden overflow-x-hidden font-Raleway p-4 2xl:h-[100vh] from-slate-800 to-black text-white flex">
      <div
        className={`text-8xl grid bg-clip-text text-center text-transparent tracking-tighter bg-gradient-to-r max-lg:text-4xl mx-auto mt-5 duration-[2000ms] transition-opacity ${
          isContentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`grid grid-flow-col gap-20 content-center place-items-center items-center mx-auto ${
            IsH2Visible ? "gap-20" : "gap-0 absolute"
          }`}
        >
          <img
            src={emrePP}
            alt="emre pp"
            className={`w-60 border-2 rounded-[20vh] delay-1000 duration-[3000ms] transition-all ease-in-out ${
              IsH2Visible ? "opacity-100 " : "opacity-0 w-20 -translate-y-20"
            }`}
          ></img>

          <motion.div
            className={`bg-clip-text text-transparent text-white pb-2 overflow-y-hidden whitespace-nowrap
            }`}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  ease: "easeIn", // Add a slight delay between each letter animation
                },
              },
            }}
            initial="hidden"
            animate={IsNameVisible ? "visible" : "hidden"}
          >
            {emrekabadayi.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.div>
          <br></br>
        </div>

        <div className="mx-auto">
          <div>
            <h2
              className={`duration-[2000ms] ${
                IsH2Visible
                  ? "opacity-1 pb-5 text-5xl tracking-normal text-white"
                  : "opacity-0 text-5xl -translate-y-20 overflow-x-hidden"
              }`}
            >
              SKILLS
            </h2>
          </div>
          <motion.div
            initial="hidden"
            animate={isContentVisible ? "visible" : "hidden"}
            className="flex flex-wrap w-auto justify-center max-xl:grid-flow-row max-xl:grid-cols-4 px-2 mx-auto tracking-tight items-center gap-2"
          >
            <SkillCard
              skill="HTML"
              icon={<DiHtml5 size={iconSize} />}
              color="text-red-500"
              index={0}
              bgColor="active:bg-red-400"
            />
            <SkillCard
              skill="CSS"
              icon={<DiCss3 size={iconSize} />}
              color="text-blue-500"
              index={1}
              bgColor="active:bg-blue-400"
            />
            <SkillCard
              skill="JavaScript"
              icon={<DiJavascript1 size={iconSize} />}
              color="text-[#F7E018]"
              index={2}
              bgColor="active:bg-yellow-500"
            />
            <SkillCard
              skill="ReactJS"
              icon={<DiReact size={iconSize} />}
              color="text-[#61DBFB]"
              index={3}
              bgColor="active:bg-cyan-200"
            />
            <SkillCard
              skill="NextJS"
              icon={<SiNextdotjs size={iconSize} />}
              color="text-[#000000]"
              index={4}
              bgColor="active:bg-slate-900"
            />
            <SkillCard
              skill="TailwindCSS"
              icon={<SiTailwindcss size={iconSize} />}
              color="text-[#01B7D6]"
              index={5}
              bgColor="active:bg-cyan-400"
            />
            <SkillCard
              skill="MongoDB"
              icon={<DiMongodb size={iconSize} />}
              color="text-green-500"
              index={6}
              bgColor="active:bg-green-400"
            />
            <SkillCard
              skill="SQL"
              icon={<DiDatabase size={iconSize} />}
              color="text-blue-600" // Dark blue color for SQL
              index={7} // Adjust index accordingly
              bgColor="active:bg-blue-700" // Slightly darker blue for active state
            />

            <SkillCard
              skill="Git"
              icon={<DiGit size={iconSize} />}
              color="text-gray-500"
              index={8}
              bgColor="active:bg-gray-600"
            />
            <SkillCard
              skill="Adobe Photoshop"
              icon={
                <SiAdobephotoshop className="fill-blue-600" size={iconSize} />
              }
              color="text-blue-600"
              index={9}
              bgColor="active:bg-blue-800"
            />
            <SkillCard
              skill="Adobe Premiere"
              icon={
                <SiAdobepremierepro
                  className="fill-violet-800"
                  size={iconSize}
                />
              }
              color="text-violet-600"
              index={10}
              bgColor="active:bg-violet-500"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
