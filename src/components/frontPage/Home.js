import { RiGithubFill } from 'react-icons/ri';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdOutlineContactPage } from 'react-icons/md';
import { FaDev } from 'react-icons/fa';
import { useState, useEffect } from 'react';


function Home() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {

    // Disable scroll when you open up modal so you cant just scroll while looking at contact info.
    if (showModal) {
      document.body.onmousedown = e => { if (e.button === 1) return false; };
    }
    else {
      document.body.onmousedown = e => { if (e.button === 1) return true; };
    }

  }, [showModal])

  const Modal = () => {
    return(
        <div className="flex flex-col justify-center items-center h-screen w-[120%] fixed overflow-clip">
            <div onClick={() => setShowModal(!showModal)} className="h-screen w-full bg-black/60 absolute">
  
            </div>
            <div className="flex flex-col absolute bg-home-500 rounded-3xl ">
                
                    
                <button class="select-none absolute bg-red-500 hover:bg-red-300 text-white font-bold w-6 md:w-10 h-6 md:h-10 rounded-tl-lg md:rounded-tl-2xl rounded-br-2xl md:rounded-br-3xl text-sm md:text-lg m-0 p-0" onClick={() => setShowModal(!showModal)}>X</button>
                    
                <div className="flex flex-col md:p-10 w-full items-center">
                  <div className="flex flex-col items-center my-4">
                    <h1 className="font-space-grotesk text-2xl md:text-5xl text-home-800 mx-10 lg:mx-16 lg:my-2 m-0">School Email</h1>
                    <h2 className="font-space-grotesk text-lg md:text-3xl text-home-800 mx-16 lg:mx-24 ">riggs22@purdue.edu</h2>
                  </div>
                  <div className="flex flex-col items-center my-4">
                    <h1 className="font-space-grotesk text-2xl md:text-5xl text-home-800 mx-10 lg:mx-16">Personal Email</h1>
                    <h2 className="font-space-grotesk text-lg md:text-3xl text-home-800 mx-16 lg:mx-24">aberiggsiv@gmail.com</h2>
                  </div>
                </div>
            </div>
            
        </div>
        
      );
    
      
    }


  return(

    <div class="flex flex-col bg-home-500 min-h-screen w-100 justify-center items-center">
        { showModal && <Modal /> }
        <div class="flex flex-col justify-center align-center">
          <h class="text-7xl md:text-9xl xl:text-massive font-medium text-home-800 font-space-grotesk m-0 p-0 text-center">Abe Riggs IV</h>

          <h2 class="text-2xl md:text-4xl xl:text-5xl text-home-900 font-space-grotesk m-2 text-center">
            Student, Software Developer, Musician
          </h2>
          <div id="ShowMobileIconPoint" class="flex flex-row mt-12 flex-wrap justify-center">
            <div className="flex">
            <a class="flex flex-row font-dosis my-2 mx-2 md:mx-8 font-medium text-xl md:text-2xl xl:text-4xl text-home-800 border-2 md:border-4 border-home-800 bg-transparent hover:bg-home-400 rounded-xl md:rounded-2xl justify-center items-center decoration-none px-2 md:px-4 w-32 md:w-44 xl:w-56 md:py-2" href="https://github.com/aberiggs" target="_blank" rel="noopener noreferrer"><RiGithubFill class="text-3xl md:text-4xl xl:text-5xl mr-2"/>GitHub</a>
            <a class="flex flex-row font-dosis my-2 mx-2 md:mx-8 font-medium text-xl md:text-2xl xl:text-4xl text-home-800 border-2 md:border-4 border-home-800 bg-transparent hover:bg-home-400 rounded-xl md:rounded-2xl justify-center items-center decoration-none px-2 md:px-4 w-32 md:w-44 xl:w-56 md:py-2" href="https://github.com/aberiggs" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin class="text-3xl md:text-4xl xl:text-5xl mr-2"/>LinkedIn</a>
            </div>
            <div className="flex">
            <a class="flex flex-row font-dosis my-2 mx-2 md:mx-8 font-medium text-xl md:text-2xl xl:text-4xl text-home-800 border-2 md:border-4 border-home-800 bg-transparent hover:bg-home-400 rounded-xl md:rounded-2xl justify-center items-center decoration-none px-2 md:px-4 w-32 md:w-44 xl:w-56 md:py-2" href="/devblog"><FaDev class="text-3xl md:text-4xl xl:text-5xl mr-2" />DevBlog</a>
            <button class="flex flex-row font-dosis my-2 mx-2 md:mx-8 font-medium text-xl md:text-2xl xl:text-4xl text-home-800 border-2 md:border-4 border-home-800 bg-transparent hover:bg-home-400 rounded-xl md:rounded-2xl justify-center items-center decoration-none px-2 md:px-4 w-32 md:w-44 xl:w-56 md:py-2" onClick={() => setShowModal(!showModal)} rel="noopener noreferrer"><MdOutlineContactPage class="text-3xl md:text-4xl xl:text-5xl mr-2" />Contact</button>
            </div>
          </div>
        </div>  
    </div>
  );
  
}


export default Home;