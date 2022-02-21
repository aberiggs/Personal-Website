import styled from 'styled-components';

import { MdOutlineClose } from "react-icons/md";

import { useEffect, useContext } from 'react';
import { UserContext } from "./frontPage/UserContext";

import Home from "./frontPage/Home.js";
import About from "./frontPage/About.js";
import SiteAbout from "./frontPage/SiteAbout.js";
import Skills from "./frontPage/Skills.js";

import "./FrontPage.css";
import Bottom from './frontPage/Bottom';

// TODO: Smooth scroll?
// TODO: Better snapping scroll?
const PrimaryDiv = styled.div `
    max-height: 100vh;

    overflow-y: scroll;
    overflow-x: hidden;
    scroll-margin: 100vh;
    scroll-padding-bottom: 1px;
    scroll-behavior: smooth;
`;

function FrontPage() {


    return(
        <PrimaryDiv>
            <div>
                <Home />

                <About />
                <SiteAbout />
                
                <Bottom />
            </div>
            
        </PrimaryDiv>


    );
    
}


export default FrontPage;