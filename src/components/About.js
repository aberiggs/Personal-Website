import Portrait from "./SprocketPic.jpg"

import "./About.css"

const AboutParagraph = () => {
    return (
        <p className="About-paragraph">
            Hi! I'm Abe Riggs IV, but most people know me as Sprocket. I'm a Computer Science freshman at Purdue University and an aspiring software engineer. Ever since I was little I've been enfatuated with technology, and wanted to build things of my own.
        </p>
    );
} 
    

function About() {
    return(
        <section className="About">
            <div className="About-left">
                <h1>About Me</h1>
                <img src={Portrait} alt="Portrait" className="About-portrait"></img>
            </div>
            <div className="About-right">
                <AboutParagraph />
            </div>
        </section>
    );
}

export default About;