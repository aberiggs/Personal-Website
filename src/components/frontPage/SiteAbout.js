import NodeLogo from "./images/Node_logo.svg";
import ReactLogo from "./images/React_logo.svg";


const AboutParagraph = () => {
    return (
        // TODO: Make better intro paragraph.
        <p className="SiteAbout-paragraph">
            This is a pesonal website side project that I've developed myself using React.js, Node.js, and a few other things along the way! It's not the most pretty, and I have a lot of things that I want to change right now, but it's a little place for me to practice and showcase some of my skils, a place for me to eventually post my other projects, and list contact information if you work for a company might be looking to hire some interns. I definitely have a lot more to learn, but I've gotten a lot more comfortable with React and JavaScript as a whole. I'm planning on doing my best to update and rennovate this site as I come up with new ideas and learn more, and as I get better at design. I also want to do some back end work, as that is what I'm most interested in, and am planning to set up a sort of dev-blog to write about my projects and allow others to leave comments if they wish. If you'd like to look at the source-code for my site, I have <a href="https://github.com/aberiggs/Personal-Website" target="_blank" rel="noreferrer">the repository</a> set to public on <a href="https://github.com/aberiggs/" target="_blank" rel="noreferrer">my GitHub</a>!
        </p>
    );
} 

function SiteAbout() {
    return (
        <section className="SiteAbout">
            <div className="SiteAbout-left">
                <h1>aberiggsiv.dev</h1>
                <AboutParagraph />
            </div>
            <div className="SiteAbout-right">
                <h1>What's With This Site?</h1>
                <img className="SiteAbout-node-logo" src={NodeLogo} alt="NodeJS" />
                <img className="SiteAbout-react-logo" src={ReactLogo} alt="ReactJS" />
            </div>
        </section>
    );
}

export default SiteAbout;