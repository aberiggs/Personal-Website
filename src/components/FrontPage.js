import styled from 'styled-components';

import Home from "./Home.js";
import About from "./About.js";

import { useEffect, useContext, useState } from 'react';
import { UserContext } from "./UserContext";

import "./FrontPage.css";
import { getElementError } from '@testing-library/dom';

const Button = styled.a` 
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap');
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  padding: 0.25rem .8rem;
  margin: 0 2rem;
  width: auto;
  font-size: 3vmin;
  white-space: nowrap;  
  font-family: 'Dosis', sans-serif;
  color: #494949;
  border: 4px solid #494949;
  background: transparent;
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
        return(
            <div className="Contact-modal">
              <Button onClick={handleClose}>god help me</Button>
            </div>
          );
         
        }
        
        // TODO: Make it so I'm not forced to stop rendering the rest of the page.
        useEffect(() => { 
            if(user.showModal) {
                dontRender();
                document.getElementById("primary").style.overflowY = "hidden";
            } else { 
                doRender();
                document.getElementById("primary").style.overflowY = "scroll";
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
    
   /*
   return(
    <Home />
   );
   */
    
}

export default FrontPage;