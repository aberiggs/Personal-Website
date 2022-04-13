import { Router, Route, browserHistory } from 'react-router';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';

import Home from "./frontPage/Home.js";
import About from "./frontPage/About.js";
import SiteAbout from "./frontPage/SiteAbout.js";
import Skills from "./frontPage/Skills.js";
import Navbar from "./frontPage/Navbar"

import Bottom from './frontPage/Bottom';

function FrontPage() {
    const [showMobileIcon, setShowMobileIcon] = useState(false);

    const handleScroll = () => {
        const displayPoint = document.getElementById("ShowMobileIconPoint")
        var displayPointRect = displayPoint.getBoundingClientRect();

        if (displayPointRect.top < 0) {
        (!showMobileIcon) && setShowMobileIcon(true)
        }
        else {
            showMobileIcon && setShowMobileIcon(false)
        }
        
        
    }

      
    return(
        <div className="flex flex-row h-screen w-full relative">
            <div className="visible w-auto md:invisible md:w-0 fixed">
                {showMobileIcon && 
                    <HashLink smooth to="/#home" className="pb-3 rounded-full">
                        <img src="https://avatars.githubusercontent.com/u/34726295?v=4" alt="portrait" className="m-4 h-auto w-14 opacity-70 object-contain rounded-full select-none hover:opacity-100" />
                    </HashLink>
                }
            </div>
            <div className="invisible w-0 md:visible md:w-auto">
                <Navbar/>
            </div>
            <div onScroll={handleScroll} id="main"className="w-full overflow-auto divide-y divide-home-800">
                <div>
                    <section id="home">
                        <Home />
                    </section>
                    <div className="bg-home-500 pb-20">
                        <section id="about">
                            <About/>
                        </section>
                        <section id="site">
                            <SiteAbout />
                        </section>
                    </div>
                </div>

                
                <Bottom />
               
            </div>
            
        </div>


    );
    
}


export default FrontPage;