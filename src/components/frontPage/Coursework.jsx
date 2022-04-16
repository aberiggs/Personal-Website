import {useState, useEffect} from 'react';

const CS180 = {
    code:'CS180',
    name:'Introduction to Object Oriented Programming',
    info: 'This is a bit about my time in CS180!'
}

const CS193 = {
    code:'CS193',
    name:'Computer Science Tools',
    info: 'This is a bit about my time in CS193!'
}

const CS182 = {
    code:'CS182',
    name:'Foundations of Computer Science',
    info: 'This is a bit about my time in CS182!'
}

const CS240 = {
    code:'CS240',
    name:'Programming in C',
    info: 'This is a bit about my time in CS240!'
}

function Coursework() {

    return(
        <div className="flex flex-row justify-center items-center min-h-screen bg-home-500 px-4">
            <div className="flex flex-row flex-wrap justify-center items-center xl:w-full">
                <div >
                <CourseListing course={CS180}/>
                <CourseListing course={CS193} />
                </div>
                <div >      
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
            <div className="text-center">
                {props.course.code}
            </div>
        )
    }

    const BackCard = () => {
        return(
            <div className="text-center">
                {props.course.info}
            </div>
        )
    }

    const handleClick = () => {
        setShowFront(!showFront)
    }

    return(
        <div>
            <div className="bg-home-400 rounded-xl xl:rounded-3xl w-32 md:w-40 xl:w-72 h-52 md:h-60 xl:h-80 m-5 md:m-10 xl:m-20 justify-center items-center select-none">
                <div onClick={handleClick} className="md:rounded-xl xl:rounded-3xl hover:bg-home-800/10 hover:cursor-pointer w-full h-full">
                    {showFront ? <FrontCard /> : <BackCard /> } 
                </div>
            </div>
        </div>
    )
}

export default Coursework