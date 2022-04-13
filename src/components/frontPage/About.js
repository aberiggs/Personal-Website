
const AboutParagraph = () => {
    return (
        // TODO: Make better intro paragraph.
        <p className="font-doris text-home-800 text-lg md:text-xl xl:text-3xl">
            Hi! I'm Abe Riggs the Fourth, but I usually go by the name Sprocket. I'm an aspiring software engineer from Seattle studying Computer Science at Purdue University. Ever since I was a little kid I've loved video games, and I have always dreamt of being able to create things that brought people that same joy. I'm constantly working hard to try and learn new things, from software and web development, to cybersecurity (<a href="https://b01lers.net/" target="_blank" rel="noreferrer">b01lers CTF Club @ Purdue</a>) and music to name a few.  Hi! I'm Abe Riggs the Fourth, but I usually go by the name Sprocket. I'm an aspiring software engineer from Seattle studying Computer Science at Purdue University. Ever since I was a little kid I've loved video games, and I have always dreamt of being able to create things that brought people that same joy. I'm constantly working hard to try and learn new things, from software and web development, to cybersecurity (<a href="https://b01lers.net/" target="_blank" rel="noreferrer">b01lers CTF Club @ Purdue</a>) and music to name a few.
        </p>
    );
} 
    

function About() {
    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-home-500 p-4">
            <div className="w-11/12 md:w-4/5 lg:w-9/12 xl:w-3/5">
                <h1 className="text-home-800 font-medium text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-space-grotesk text-left pb-5 md:pb-10">About Me</h1>
                <AboutParagraph/>
            </div>
        </div>
    )
}

export default About;