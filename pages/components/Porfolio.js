import React from 'react'

import Image from "next/image";

import port1 from "../../public/portfolio1.png"
import port2 from "../../public/gitf.png"
import port3 from "../../public/step.png"

const Porfolio = () => {
  return (
    <div>
    <div className="flex items-center justify-center mt-8">
              <small className=" dark:text-white opacity-70 ">Meus Projetos</small>
              </div>
            <div className="flex items-center justify-center">
            
                <h2 className="text-5xl py-2 text-[#551498] dark:text-[#9e4ff0] md:text-2xl font-bold">
                Portfólio
              </h2>
              </div>
             <div className="mt-12 mx-64 grid grid-cols-3 gap-4 place-items-center">
              <div className=" rounded-2xl text-gray-200 bg-[#551498] hover:bg-[#9e4ff0] " >
              <div className="flex justify-center p-6 ">
              <Image className="border rounded-md" src={port1} alt="/" objectFit="cover" />
              </div>
                <h1 className="flex text-center text-xl font-bold">
                  Photograpys - Compartilhe suas experiências!
                </h1>
                <div className="flex justify-evenly mt-2 mb-4">
                  <a className="border rounded-md py-2 px-5 text-xl font-semi-bold hover:bg-white hover:text-gray-900" href="https://github.com/gabrieln96/photograpys" target="_blank" rel="noreferrer"> Github</a>
                  <a className="border rounded-md py-2 px-5 text-xl font-semi-bold hover:bg-white hover:text-gray-900" href="https://photograpys.web.app/" target="_blank" rel="noreferrer">Demo</a>
                  </div>
              </div>
              <div className=" rounded-2xl text-gray-200 bg-[#551498] hover:bg-[#9e4ff0]" >
              <div className="flex justify-center p-6 ">
              <Image className="border rounded-md" src={port2} alt="/" objectFit="cover" />
              </div>
                <h1 className="grid grid-rows-2 place-items-center text-xl font-bold">
                  Git Finder
                </h1>
                <div className="flex justify-evenly mt-2 mb-4">
                  <a className="border rounded-md py-2 px-5 text-xl font-semi-bold hover:bg-white hover:text-gray-900" href="https://github.com/gabrieln96/git-finder" target="_blank" rel="noreferrer"> Github</a>
                  <a className="border rounded-md py-2 px-5 text-xl font-semi-bold hover:bg-white hover:text-gray-900" href="">Demo</a>
                  </div>
              </div>  <div className=" rounded-2xl text-gray-200 bg-[#551498] hover:bg-[#9e4ff0] " >
              <div className="flex justify-center p-6 ">
              <Image className="border rounded-md" src={port3} alt="/" objectFit="cover" />
              </div>
                <h1 className="grid grid-rows-2 place-items-center text-xl font-bold">
                  Form MultiStep
                </h1>
                <div className="flex justify-evenly mt-2 mb-4">
                  <a className="border rounded-md py-2 px-5 text-xl font-semi-bold hover:bg-white hover:text-gray-900" href="http://github.com" target="_blank" rel="noreferrer"> Github</a>
                  <a className="border rounded-md py-2 px-5 text-xl font-semi-bold hover:bg-white hover:text-gray-900" href="">Demo</a>
                  </div>
              </div>  
              </div>
              </div>
  )
}

export default Porfolio