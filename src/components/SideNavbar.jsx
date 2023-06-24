import React, {useState} from 'react'
import { Img } from 'react-image'
import { Oval } from 'react-loader-spinner';
import { motion } from "framer-motion"
import emrePP from "./imgs/emrePP.jpg";


export default function SideNavbar(props) {

    const [isContentVisible, setIsContentVisible] = useState(false);

  return (
    <nav className='bg-gradient-to-b w-40 max-lg:hidden from-green-900 to-slate-900 border-r-2 border-black h-screen'>
    <div className='border-b-2'>
      <Img
        src={emrePP}
        loader={Oval}
        className='mx-auto my-2 w-40 xl:w-60 lg:w-60 md:w-60 2xl:w-60 rounded-[200vw]'
      />
      <h1 className='text-center font-Raleway text-xl pb-2 tracking-tighter'>Emre Kabadayı</h1>
    </div>
    <motion.div
    initial="hidden"
    animate={isContentVisible ? "visible" : "hidden"}
    className='tümh1ler mx-auto text-center text-base tracking-tighter'>
      <div className='border-b'>
        <h1 className='uppercase tracking-normal text-xl font-Inter'>soft skills</h1>
        <h2>Teamwork</h2>
        <h2>Adaptability</h2>
        <h2>Time management</h2>
        <h2>Customer service</h2>
      </div>
            <div>
      <h1 className='uppercase tracking-normal text-xl font-Inter'>hard skills</h1>
      <h2 className='text-[#EF4444]'>HTML</h2>
      <h2 className='text-[#3B82F6]'>CSS</h2>
      <h2 className='text-yellow-300'>Javascript</h2>
      <h2 className='text-cyan-300'>ReactJS</h2>
      <h2 className='text-[#22C55E]'>MongoDB</h2>
      <h2 className='text-slate-500'>Git</h2>
            </div>
    </motion.div>
  </nav>
    )
}
