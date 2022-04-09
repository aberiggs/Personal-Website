function Navbar() {

    return(
        <div className="flex h-screen w-4/5 bg-home-900 justify-center">
            3<div className="flex flex-col bg-home-900 text-center justify-center font-space-grotesk text-home-400 text-3xl mx-auto">
                <div className="pb-3">
                    <img src="https://avatars.githubusercontent.com/u/34726295?v=4" alt="portrait" className="h-32 w-32 object-contain rounded-full select-none mx-auto" />
                </div>
                <h className="py-3">whoami</h>
                <h className="py-3">README.MD</h>
                <h className="py-3">This Site</h>
                <h className="py-3">Coursework</h>
                <h className="py-3">Skills</h>
                <h className="py-3">Projects</h>
            </div>
        </div>
    )

}

export default Navbar;