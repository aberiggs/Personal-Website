import styled from 'styled-components';

import { useContext } from 'react';
import { UserContext } from "./UserContext"

import "./Home.css"

import { RiGithubFill } from 'react-icons/ri';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdOutlineContactPage } from 'react-icons/md';


const Button = styled.a` 
  @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap');
  display: flex;
  flex-direction: row;
  border-radius: 2vmin;
  padding: 0.25rem .8rem;
  margin: 0 2rem;
  width: auto;
  font-size: 3vmin;
  white-space: nowrap;  
  font-family: 'Dosis', sans-serif;
  color: #494949;
  border: .4vmin solid #494949;
  background: transparent;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  ${this}:hover {
    background-color: #FAF6E9;
  }
`;

function Home() {
  const user = useContext(UserContext);

  const handleShow = () => user.setShowModal(true);

  return(

    <div className="Home">
      <section className="Home-section">
        <div className="Home-main">
          <h1 className="Home-name">
            Abe Riggs IV
          </h1>

          <h2 className="Home-about">
            Student, Software Developer, Mechanical Keyboard Enthusiast, Musician
          </h2>

          <div className="Home-buttons">
            <Button href="https://github.com/aberiggs" target="_blank"><RiGithubFill className="Home-logos"/>GitHub</Button>
            <Button href="https://www.linkedin.com/in/abe-riggs-iv-826493187/" target="_blank"><IoLogoLinkedin className="Home-logos"/>LinkedIn</Button>
            <Button onClick={handleShow} test="cringe" target="_blank"><MdOutlineContactPage className="Home-logos" />Contact</Button>
          </div>
        </div>
      </section>
    </div>
  );
  
}

export default Home;
