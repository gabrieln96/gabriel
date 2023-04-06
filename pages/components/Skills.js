import React from 'react'

import {
    RiReactjsFill,
  } from "react-icons/ri"
  import {
    SiCss3, 
    SiTailwindcss, 
    SiJavascript, 
    SiTypescript, 
    SiFigma, 
    SiAdobexd, 
    SiGithub,
    SiAdobephotoshop,
  } from "react-icons/si"

  import {
    AiFillHtml5
  } from "react-icons/ai";

  import { 
    FaJava,
    FaNodeJs
  } from 'react-icons/fa';

const Skills = () => {
  return (
    <div>
    <div className="flex items-center justify-center mt-8">
            <h2 className=" text-4xl py-2 text-[#551498] dark:text-[#9e4ff0]  font-bold sm:text-2xl">
            Habilidades
            </h2>
            </div>
            <div className=" grid grid-cols-2 place-items-center mx-60 mt-8 ">
            <div className="border-none rounded-3xl text-gray-200 bg-[#551498] hover:bg-[#9e4ff0] ">
                <div className="text-center mt-8 text-2xl font-bold">
                  <h5>Frontend</h5>
                </div>
                <div  className="mt-6 grid grid-cols-3 gap-10 px-10 py-10">
              <div>
                <AiFillHtml5 className="w-8 h-8 "/>
                <h5 className="font-semibold mt-2">HTML</h5>
                <h2 className="opacity-70 italic">Experiente</h2>
              </div>
              <div>
                <SiCss3 className="w-8 h-8"/>
                <h5 className="font-semibold mt-2">CSS</h5>
                <h2 className="opacity-70 italic">Experiente</h2>
              </div>
              <div>
                <SiJavascript className="w-8 h-8"/>
                <h5 className="font-semibold mt-2">JavaScript</h5>
                <h2 className="opacity-70 italic">Intermediário</h2>
              </div>
              <div>
                <SiTypescript className="w-8 h-8"/>
                <h5 className="font-semibold mt-2">TypeScript</h5>
                <h2 className="opacity-70 italic">Básico</h2>
              </div>
              <div>
                <RiReactjsFill className="w-8 h-8"/>
                <h5 className="font-semibold mt-2">ReactJs</h5>
                <h2 className="opacity-70 italic">Intermediário</h2>
              </div>
              <div>
                <SiTailwindcss className="w-8 h-8"/>
                <h5 className="font-semibold mt-2">Tailwind</h5>
                <h2 className="opacity-70 italic">Intermediário</h2>
              </div>
            </div>
            </div>
            <div className="border-none rounded-3xl text-gray-200 bg-[#551498] hover:bg-[#9e4ff0]">
                <div className="text-center mt-8 text-2xl font-bold">
                  <h5>Outras Habilidades</h5>
                </div>
                <div  className="mt-6 grid grid-cols-3 gap-10 px-10 py-10">
              <div>
                <SiFigma className="w-8 h-8 "/>
                <h5 className="font-semibold mt-2">Figma</h5>
                <h2 className="opacity-70 italic">Avançado</h2>
              </div>
              <div>
                <SiAdobexd className="w-8 h-8"/>
                <h5 className="font-semibold mt-2">Adobe XD</h5>
                <h2 className="opacity-70 italic">Avançado</h2>
              </div>
              <div>
                <SiGithub className="w-8 h-8"/>
                <h5 className="font-semibold mt-2">Git</h5>
                <h2 className="opacity-70 italic">Intermediário</h2>
              </div>
              <div>
                <FaJava className="w-8 h-8"/>
                <h5 className="font-semibold mt-2">Java</h5>
                <h2 className="opacity-70 italic">Básico</h2>
              </div>
              <div>
                <FaNodeJs className="w-8 h-8"/>
                <h5 className="font-semibold mt-2">Node</h5>
                <h2 className="opacity-70 italic">Intermediário</h2>
              </div>
              <div>
                <SiAdobephotoshop className="w-8 h-8"/>
                <h5 className="font-semibold mt-2">Photoshop</h5>
                <h2 className="opacity-70 italic">Avançado</h2>
              </div>
            </div>
            </div>
            </div>
            </div>
  )
}

export default Skills