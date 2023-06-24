import React from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";

export default function SkillCard({ skill, icon, color, bgColor, keyNote, index }) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: index * 0.09 + 1
      }
    }
  };

  const handleClick = () => {
    // Play the key note here based on the keyNote prop
    const sound = new Howl({
      src: [`${keyNote}.ogg`]
    });
    sound.play();
  };

  return (
    <motion.div
      className={`whitespace-nowrap max-sm:whitespace-pre-wrap hover:scale-105 bg-slate-800 hover:bg-white rounded transition-colors duration-200  shadow-lg p-4 ${color} ${bgColor}`}
      variants={cardVariants}
      onClick={handleClick}
    >
      <div className="mb-4 mx-auto items-center grid place-content-center">{icon}</div>
      <h2 className="text-xl max-sm:text-[10px] max-md:text-base max-sm:h-8 max-sm:items-center max-sm:place-content-center max-sm:place-items-center max-sm:mx-auto max-sm:place-self-center max-sm:align-middle max-sm:justify-items-center max-sm:flex font-bold mb-2 tracking-tight">
        {skill}
      </h2>
    </motion.div>
  );
}
