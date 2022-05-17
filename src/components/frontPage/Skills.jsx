const Skills = () => {

    const Element = (props) => {
        return (
            <li>
                {props.text}
            </li>
        )
    }

    const Subelement = (props) => {
        return (
            <div className="pl-10">
                <ul className="list-disc">
                    <li>
                        {props.text}
                    </li>
                </ul>
            </div>
        )
    }

    return(
        <div className='flex flex-col justify-center items-center min-h-screen w-full bg-home-500'>
            <h1 className="text-home-800 font-medium text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-space-grotesk text-left">Skills</h1>
            <div className="w-full flex flex-col pl-10">
                


            </div>
        </div>
    );
}

export default Skills;