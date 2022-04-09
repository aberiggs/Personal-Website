import { Router, Route, browserHistory } from 'react-router';
import { HashLink, NavHashLink } from 'react-router-hash-link';

import Home from "./frontPage/Home.js";
import About from "./frontPage/About.js";
import SiteAbout from "./frontPage/SiteAbout.js";
import Skills from "./frontPage/Skills.js";
import Navbar from "./frontPage/Navbar"

import Bottom from './frontPage/Bottom';

function FrontPage() {

    return(
        <div className="flex flex-row h-screen relative">
            <Navbar/>
            <div className="min-w-11/12 overflow-auto">
                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About/>
                </section>
                <section id="site">
                    <SiteAbout />
                </section>
                <Bottom />
               
            </div>
            
        </div>


    );
    
}


export default FrontPage;