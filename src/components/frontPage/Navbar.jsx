import { HashLink } from 'react-router-hash-link';

function Navbar() {

    return(
        <div className="flex h-screen bg-home-900 justify-center">
            <div className="flex flex-col bg-home-900 text-center justify-center font-space-grotesk text-home-700 text-xl xl:text-3xl px-5 xl:px-10">
                <HashLink smooth to="/#home" className="pb-3 rounded-full">
                    <img src="https://avatars.githubusercontent.com/u/34726295?v=4" alt="portrait" className="h-auto w-24 lg:w-32 xl:w-32  opacity-80 object-contain rounded-full select-none mx-auto hover:opacity-100" />
                </HashLink>
                
                <HashLink smooth to="#about" className="py-3 hover:text-home-400">whoami</HashLink>
                <HashLink smooth to="#site" className="py-3 hover:text-home-400">README.MD</HashLink>   
                <div className="border-[1px] lg:border-[1.5px] border-home-500 bg-home-500"></div>
                <HashLink smooth to="#coursework" className="py-3 hover:text-home-400">Coursework</HashLink>
                <HashLink smooth to="#projects" className="py-3 hover:text-home-400">Projects</HashLink>
            </div>
        </div>
    )

}

/*
    Ideas for link names:
    $USER
    README.MD
    whoami
    git status (or other things like that)
*/

export default Navbar;