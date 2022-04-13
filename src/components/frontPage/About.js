import {useState, useEffect} from 'react';

const AboutParagraph = () => {
    const [age, setAge] = useState(0);

    useEffect(() => {
        console.log("ran")
        const bDayMonth = 7;
        const bDayDate = 10;

        const date = new Date();
        const year = date.getUTCFullYear();
        const month = date.getUTCMonth()+1;
        const day = date.getUTCDate()
        
        if (month > bDayMonth) {
            setAge(year-2003);
        }
        else {
            if (month === bDayMonth) {
                if (day >= bDayDate) {
                    setAge(year-2003);
                }
            }
            !age && setAge(year-2003-1);
        }
        
    }, [age])

    return (
        // TODO: Make better intro paragraph.
        <p>
            Hey, I'm Abe, but my friends know me as Sprocket! I'm an aspriring software engineer from Seattle, Washington, currently majoring in Computer Science at Purdue University and am {age} years old. When I was young my parents exposed me to videogames, which sparked my love for technology. Games are something that have brought me joy in times of stress, and also allow me to just hang out with friends whenever I want to no matter how far away. When I do finally get a break from my studies, I enjoy hopping on a call with my friends to play some games, watching anime, and playing guitar among other things.
        </p>
    );
} 
    

function About() {
    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-home-500 px-4">
            <div className="w-11/12 md:w-4/5 lg:w-9/12 xl:w-3/5">
                <h1 className="text-home-800 font-medium text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-space-grotesk text-left pb-5 md:pb-8">About Me</h1>
                <p className="font-doris text-home-800 text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                    <AboutParagraph/>
                </p>
            </div>
        </div>
    )
}

export default About;