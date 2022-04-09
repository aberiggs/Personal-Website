import styled from 'styled-components';

import { useContext } from 'react';
import { UserContext } from "./UserContext"

import "./Home.css"

import { RiGithubFill } from 'react-icons/ri';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdOutlineContactPage } from 'react-icons/md';
import { FaDev } from 'react-icons/fa';
import { useState, useEffect } from 'react';


function Home() {
  const [showModal, setShowModal] = useState(false)


  const Modal = () => {
    return(
        <div className="flex flex-col justify-center items-center h-screen w-[120%] absolute">
            <div onClick={() => setShowModal(!showModal)} className="h-screen w-full bg-black/60 absolute">
  
            </div>
            <div className="flex flex-col absolute bg-home-500 rounded-3xl ">
                
                    
                <button class="select-none absolute bg-red-500 hover:bg-red-300 text-white font-bold w-10 h-10 rounded-tl-2xl rounded-br-3xl m-0 p-0" onClick={() => setShowModal(!showModal)}>X</button>
                    
                <div className="flex flex-col p-10 w-full items-center">
                  <h1 className="font-space-grotesk text-5xl text-home-800 mx-16 my-2">School Email</h1>
                  <h2 className="font-space-grotesk text-3xl text-home-800 mx-24 my-2">riggs22@purdue.edu</h2>
                  <div className="border-2 border-home-800 w-full mt-2 border-dashed"></div>
                  <h1 className="font-space-grotesk text-5xl text-home-800 mx-16 my-2">Personal Email</h1>
                  <h2 className="font-space-grotesk text-3xl text-home-800 mx-24 my-2">aberiggsiv@gmail.com</h2>
                </div>
            </div>
            
        </div>
        
      );
    
      
    }


  return(

    <div class="flex flex-col bg-home-500 h-screen w-100 justify-center items-center">
        { showModal && <Modal /> }
        <div class="flex flex-col justify-center align-center">
          <div className="flex justify-center align-center">
          </div>
          <h class="text-massive font-medium text-home-800 font-space-grotesk m-0 p-0 text-center">Abe Riggs IV</h>

          <h2 class="text-5xl text-home-900 font-space-grotesk m-2 text-center">
            Student, Software Developer, Musician
          </h2>
          <div class="flex flex-row mt-12 flex-wrap justify-center">
            <a class="flex flex-row font-dosis font-medium text-4xl text-home-800 border-4 border-home-800 bg-transparent hover:bg-home-400 rounded-3xl justify-center items-center decoration-none px-4 py-3 m-8" href="https://github.com/aberiggs" target="_blank" rel="noopener noreferrer"><RiGithubFill class="text-5xl mr-2"/>GitHub</a>
            <a class="flex flex-row font-dosis font-medium text-4xl text-home-800 border-4 border-home-800 bg-transparent hover:bg-home-400 rounded-3xl justify-center items-center decoration-none px-4 py-3 m-8" href="https://www.linkedin.com/in/abe-riggs-iv-826493187/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin class="text-5xl mr-2"/>LinkedIn</a>
            <button class="flex flex-row font-dosis font-medium text-4xl text-home-800 border-4 border-home-800 bg-transparent hover:bg-home-400 rounded-3xl justify-center items-center decoration-none px-4 py-3 m-8" onClick={() => setShowModal(!showModal)} rel="noopener noreferrer"><MdOutlineContactPage class="text-5xl mr-2" />Contact</button>
            <a class="flex flex-row font-dosis font-medium text-4xl text-home-800 border-4 border-home-800 bg-transparent hover:bg-home-400 rounded-3xl justify-center items-center decoration-none px-4 py-3 m-8" href="/devblog"><FaDev class="text-5xl mr-2" />DevBlog</a>
          </div>
        </div>
    </div>
  );
  
}


export default Home;
