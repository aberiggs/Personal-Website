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

const Button = styled.a` 
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap');
  display: flex;
  flex-direction: row;
  border-radius: 100%;
  padding: 0rem 0rem;
  width: auto;
  font-size: 3vmin;
  white-space: nowrap;  
  font-family: 'Dosis', sans-serif;
  color: #494949;
  border: .3vmin solid #494949;
  background: #f76464;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  pointer-events: all;
  cursor: pointer;

  ${this}:hover {
    background-color: #FAF6E9;
  }
`;


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

const SnappingDiv = styled.div`
    // TODO: Customize snapping div?
    scroll-snap-align: start;
`;


function FrontPage() {

    const user = useContext(UserContext);

    const handleClose = () => user.setShowModal(false);

    const Modal = () => {
        // TODO: Make className values less confusing.
        return(
            <div className="Contact-modal">
                <div onClick={handleClose} className="Contact-background">

                </div>
                <div className="Contact-form">
                    <div className="Contact-outer">
                        
                        <Button onClick={handleClose}><MdOutlineClose /></Button>
                        
                    </div>
                    <h1>School Email</h1>
                    <h2>riggs22@purdue.edu</h2>
                    <div className="Contact-divider"></div>
                    <h1>Personal Email</h1>
                    <h2>aberiggsiv@gmail.com</h2>
                </div>
                
            </div>
          );
         
        }
        
    // TODO: Make it so I'm not forced to stop rendering the rest of the page.
    useEffect(() => { 
        if(user.showModal) {
            // TODO: Make it so if you click the contact button it doesn't keep scrolling.
            document.documentElement.style.overflow = "hidden";

        } else { 
            document.documentElement.style.overflow = "unset";
            }
            }, [user.showModal]);
    



    return(
        <PrimaryDiv>
            { user.showModal ? <Modal /> : null }
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