import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

import React, { useEffect, useState } from "react";

import "./Home.css"

import { RiGithubFill } from 'react-icons/ri';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdOutlineContactPage } from 'react-icons/md';


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


const onClick = () => {
  console.log("Bruh");
}


function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /*
  return (
    <div className="Home">
      <section className="Home-section">
        <div className="Home-main">
          <h1 className="Home-name">
            Abe Riggs IV
          </h1>

          <h2 className="Home-about">
            Student, Software Developer, Mechanical Keyboard Enthusiast
          </h2>

          <div className="Home-buttons">
            <Button href="https://github.com/aberiggs" target="_blank"><RiGithubFill className="Home-logos"/>GitHub</Button>
            <Button href="https://www.linkedin.com/in/abe-riggs-iv-826493187/" target="_blank"><IoLogoLinkedin className="Home-logos"/>LinkedIn</Button>
            <Button onClick={onClick} target="_blank"><MdOutlineContactPage className="Home-logos" />Contact</Button>
          </div>
        </div>
      </section>
      
    </div>
  );
  */
  return(
    <>
      <div className="Home">
        <Modal className="Contact-modal" show={show} onHide={handleClose}>
          <Modal.Header >
            <Modal.Title>Modal heading</Modal.Title>
            
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        
        <section className="Home-section">
          <div className="Home-main">
            <h1 className="Home-name">
              Abe Riggs IV
            </h1>

            <h2 className="Home-about">
              Student, Software Developer, Mechanical Keyboard Enthusiast
            </h2>

            <div className="Home-buttons">
              <Button href="https://github.com/aberiggs" target="_blank"><RiGithubFill className="Home-logos"/>GitHub</Button>
              <Button href="https://www.linkedin.com/in/abe-riggs-iv-826493187/" target="_blank"><IoLogoLinkedin className="Home-logos"/>LinkedIn</Button>
              <Button onClick={handleShow} target="_blank"><MdOutlineContactPage className="Home-logos" />Contact</Button>
            </div>
          </div>
        </section>
        
      </div>

    
    </>
  );
}

export default Home;
