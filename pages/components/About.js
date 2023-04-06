import React from 'react'
import Image from "next/image";

import me from '../../public/me.jpg'

import {BiMedal} from "react-icons/bi"
import {
    RiFolderSettingsLine, 
  } from "react-icons/ri"

const About = () => {
  return (
    <div>
    <div className="flex items-center justify-center mt-8">
        <h2 className=" text-4xl py-2 text-[#551498] dark:text-[#9e4ff0]  font-bold sm:text-2xl">
        Quem Sou Eu?
        </h2>
    </div>
        <div className= "flex items-center justify-center" >
            <h5 className="text-5xl text-[#551498] font-medium dark:text-[#9e4ff0] md:text-2xl">Sobre mim
            </h5>
        </div>
    <div className=" mt-12 mx-72 grid grid-cols-3 place-items-center">
        <div className="rounded-large w-80 h-80 rotate-12 overflow-hidden hover:rotate-0 h-90 w-90 ">
        <Image src={me} layout="fill" alt="/" objectFit="cover" />
        </div>
    <div className="grid gap-8 dark:text-gray-200">
        <div className=" grid justify-items-center border-none rounded-md p-4  text-gray-200 bg-[#551498] hover:bg-[#9e4ff0]">
        <BiMedal className="w-8 h-8"/>
            <h5>
                Experiência
            </h5>
            <small>
                1+ anos
            </small>
        </div>
    <div className="grid justify-items-center border-none rounded-md p-4 text-gray-200 bg-[#551498] hover:bg-[#9e4ff0]">
    <RiFolderSettingsLine className="w-8 h-8"/>
        <h5>
            Projetos
        </h5>
        <small>
            4+ Completos
        </small>
    </div>
    </div>
        <div className="text-base text-justify text-gray-800 dark:text-gray-200 "> 
        <h4>
            Bracharel em Ciência da Computação, desenvolvedor Front-end e Designer! Desenvolvedor com foco em HTML, CSS, Tailwind, ReactJs, JavaScript e TypeScript. 
        </h4>
    <div className="mt-8">
        <a className="bg-gradient-to-r from-[#551498] text- to-[#9e4ff0] text-white px-4 py-2 border-none rounded-md " href="#">
        Cúrriculo
        </a>
           </div>
        </div>
    </div>
    </div>
  )
}


export default About