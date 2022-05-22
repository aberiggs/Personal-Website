import {useState} from 'react';

const CS180 = {
    code:'CS180',
    name:'Introduction to Object Oriented Programming',
    info: 'Learned Java, covering topics such as looping, class structuring and inheritance, multi-threading, and hashmaps.'
}

const CS193 = {
    code:'CS193',
    name:'Computer Science Tools',
    info: 'Introduction to using the command line, Git, GitHub, debugging tools, and more.'
}

const CS182 = {
    code:'CS182',
    name:'Foundations of Computer Science',
    info: 'Discrete math course, including boolean algebra, introductory algorithm analysis, recursion, and proof techniques.'
}

const CS240 = {
    code:'CS240',
    name:'Programming in C',
    info: 'Learned about file I/O, structures, pointers, dynamic memory allocation, linked lists, trees, GDB, memory layout, the C preprocessor, buffer overflow vulnerabilities, and much more.'
}

function Coursework() {

    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-home-500 px-4 py-10">
            <h1 className="text-home-800 font-medium text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-space-grotesk text-left">Courses</h1>
            <div className="flex flex-col flex-wrap justify-center items-center xl:w-full">
                <div className='flex flex-row'>
                <CourseListing course={CS180}/>
                <CourseListing course={CS193} />
                </div>
                <div className='flex flex-row'>      
                <CourseListing course={CS182}/>
                <CourseListing course={CS240}/>
                </div>
            </div>
        </div>
    )

}

const CourseListing = (props) => {
    const [showFront, setShowFront] = useState(true)


    const FrontCard = () => {
        return(
            <div className="text-center justify-center h-full w-9/12 md:w-9/12 xl:w-7/12 py-5 md:py-8 xl:py-11">
                <div className='text-xl md:text-2xl xl:text-4xl underline underline-offset-2'>{props.course.code}</div>
                <div className='text-xs md:text-base xl:text-xl pt-1 xl:pt-3'>{props.course.name}</div>
            </div>
        )
    }

    const BackCard = () => {
        return(
            <div className="text-center text-[.6rem] md:text-xs xl:text-base w-9/12 md:w-9/12 xl:w-7/12">
                {props.course.info}
            </div>
        )
    }

    const handleClick = () => {
        setShowFront(!showFront)
    }

    return(
        <div>
            <div className="bg-home-400 rounded-xl xl:rounded-3xl w-32 md:w-40 xl:w-72 h-40 md:h-52 xl:h-80 m-5 md:m-10 xl:m-20 justify-center items-center select-none">
                <div onClick={handleClick} className="rounded-xl xl:rounded-3xl hover:bg-home-800/10 text-home-800 hover:cursor-pointer w-full h-full flex items-center justify-center">
                    {showFront ? <FrontCard /> : <BackCard /> } 
                </div>
            </div>
        </div>
    )
}

export default Coursework