import styled from 'styled-components';

import Home from "./Home.js";
import About from "./About.js";

import { MdOutlineClose } from "react-icons/md";

import { useEffect, useContext, useState } from 'react';
import { UserContext } from "./UserContext";

import "./FrontPage.css";

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

  ${this}:hover {
    background-color: #FAF6E9;
  }
`;

//TODO: Smooth scroll?

const PrimaryDiv = styled.div `
    max-height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;

`;

const SnappingDiv = styled.div`
    //TODO: Customize snapping div?
    scroll-snap-align: start;
`;

function FrontPage() {
    const [renderWhole, setRenderWhole] = useState(true);

    const dontRender = () => setRenderWhole(false);

    const doRender = () => setRenderWhole(true);


    const user = useContext(UserContext);

    const handleClose = () => user.setShowModal(false);

    const Modal = () => {
        // TODO: Make className values less confusing.
        return(
            <div onClick={handleClose} className="Contact-modal">
                <div className="Contact-form">
                    <div className="Contact-outer">
                        
                        <Button onClick={handleClose}><MdOutlineClose /></Button>
                        
                    </div>
                    <h1>Email</h1>
                    <h2>riggs22@purdue.edu</h2>
                </div>
                
            </div>
          );
         
        }
        
        // TODO: Make it so I'm not forced to stop rendering the rest of the page.
        useEffect(() => { 
            if(user.showModal) {
                dontRender();
            } else { 
                doRender(); 
             }
             }, [user.showModal]);
      

    return(
        <PrimaryDiv id="primary">
            <SnappingDiv>
                { user.showModal ? <Modal /> : null }
                <Home />
            </SnappingDiv>
            
            { renderWhole ? 
                <SnappingDiv>
                <About />
                </SnappingDiv> : null }
            
          
        </PrimaryDiv>
    );
    
}

export default FrontPage;