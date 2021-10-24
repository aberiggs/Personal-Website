import styled from 'styled-components';

import "./Home.css"

import Portrait from "./SprocketPic.jpg"
import { RiGithubFill } from 'react-icons/ri';
import { IoLogoLinkedin } from 'react-icons/io';

const Button = styled.a` 
  display: flex;
  border-radius: 15px;
  padding: 0.25rem .5rem;
  margin: 0.5rem 1rem;
  width: auto;
  background: transparent;
  font-size: 2vmin;
  color: #FAF6E9;
  background-color: #494949;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

function Home() {
  return (
    <div className="Home">
      <img className="Home-portrait" src={Portrait} alt="Portrait"></img>
      <h1 className="Home-name">
        Abe Riggs IV
      </h1>
      <h2 className="Home-about">
        Student, Software Developer, Keyboard Enthusiast, Musician
      </h2>
      <div className="Home-buttons">
        <Button href="https://github.com/aberiggs" target="_blank"><RiGithubFill className="Home-logos"/>Github</Button>
        <Button href="https://www.linkedin.com/in/abe-riggs-iv-826493187/" target="_blank"><IoLogoLinkedin className="Home-logos"/>LinkedIn</Button>
      </div>
    </div>
  );
}

export default Home;
