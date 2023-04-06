import React from 'react'

import {
    AiFillDribbbleCircle,
    AiFillLinkedin,
    AiFillGithub, } 
    from "react-icons/ai"

import deved from "../../public/dev-ed-wave.png";
import Image from "next/image";

const About = () => {
  return (
        <div className="flex items-center justify-evenly">
            <div className="grid justify-items-center">
            <h2 className="text-5xl py-2 text-[#551498] hover:text-[#9e4ff0] md:text-6xl font-bold">
              Gabriel Araújo
            </h2>          
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Desenvolvedor Frontend e Designer.
            </h3>       
            {/* <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Com foco em ReactJS, mas também com mente para o Designer UX/UI
            </p>         */}
            <div className="text-3xl flex justify-center gap-10 py-3 dark:text-[#9e4ff0] ">
            <a href="https://linkedin.com/in/gabrieln96" target="_blank" rel="noreferrer" > <AiFillLinkedin className="text-[#551498] hover:text-[#9e4ff0]"/> 
            </a>
            <a href="https://github.com/gabrieln96" target="_blank" rel="noreferrer">         <AiFillGithub className="text-[#551498] hover:text-[#9e4ff0]"/>
            </a>
            <a href="https://dribbble.com/gabrihell" target="_blank" rel="noreferrer">
            <AiFillDribbbleCircle className="text-[#551498] hover:text-[#9e4ff0]"/>
            </a>
            </div>
            </div>
            <div className=" bg-gradient-to-b from-[#551498] rounded-full w-80 h-80 relative overflow-hidden md:h-96 md:w-96">
              <Image src={deved} layout="fill" alt="/" objectFit="cover" />
            </div>
          </div>
          
  )
}

export default About