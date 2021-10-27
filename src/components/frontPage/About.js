import Portrait from "./images/SprocketPic.jpg"

import "./About.css"

const AboutParagraph = () => {
    return (
        // TODO: Make better intro paragraph.
        <p className="About-paragraph">
            Hi! I'm Abe Riggs IV, but I usually go by the name Sprocket. I'm an aspiring software engineer studying Computer Science at Purdue University. Ever since I was a little kid I've loved video games, and I have always dreamt of being able to create things that brought people that same joy. I'm constantly working hard to try and learn new things, from software and web development, to cybersecurity (<a href="https://b01lers.net/" target="_blank" rel="noreferrer">b01lers CTF Club @ Purdue</a>) and music to name a few. 
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