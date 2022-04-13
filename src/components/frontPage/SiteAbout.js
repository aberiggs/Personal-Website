import NodeLogo from "./images/Node_logo.svg";
import ReactLogo from "./images/React_logo.svg";


const AboutParagraph = () => {
    return (
        // TODO: Make better intro paragraph.
        <p>
            What is this website? I made it primarly as a project to help me learn web technologies. Before this site, I knew very little about anything frontend related, and even less about backend. As of now I have not only this frontend done, but if you take a look at my <a className="text-highlight-100 hover:texthighlight-200" href="/devblog" target="_blank" rel="noreferrer">DevBlog</a> I've learned everything necessary to set up a database with MongoDB, and an api to communicate back and forth with my database to create users and allow for login. I learned about and set up reauthentication through the usage of JSON Web Tokens and React Redux, have password hashing so that passwords are not stored in plain text within the database, and have implemented a whole bunch of other things that took me way longer then it should have. Note that this is a project that I'm working on while balancing the workload of all my classes, and is far from perfect. If you find any glaring issues don't hesitate to email me and let me know!

            <br/>
            <br/>
            
            
             If you'd like to look at the source-code for the front end of my site for any reason, I have <a className="text-highlight-100 hover:texthighlight-200" href="https://github.com/aberiggs/Personal-Website" target="_blank" rel="noreferrer">the repository</a> set to public on <a className="text-highlight-100 hover:texthighlight-200" href="https://github.com/aberiggs/" target="_blank" rel="noreferrer">my GitHub</a>!
        </p>
    );
} 

function SiteAbout() {
    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-home-500 px-4">
            <div className="w-11/12 md:w-4/5 lg:w-9/12 xl:w-3/5">
                <h1 className="text-home-800 font-medium text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-space-grotesk text-left pb-5 md:pb-8">aberiggsiv.dev</h1>
                <p className="font-doris text-home-800 text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                    <AboutParagraph/>
                </p>
            </div>
        </div>
    )
}

export default SiteAbout;