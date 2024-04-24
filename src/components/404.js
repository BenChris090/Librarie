import { NavLink } from "react-router-dom";

const Four0Four = () => {
    return (
        <div className="404 h-full px-4 sm:px-10 py-16 sm:py-32 text-center items-center m-auto lg:px-20 overflow-hidden">
            <div className="header bg-green-600 bg-opacity-30 text-black px-6 sm:px-8 rounded-3xl py-8 sm:py-10 space-y-2">
                <div className="space-y-4">
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold">4 0 4</h1>
                    <p className="text-lg sm:text-3xl font-medium">Page Not Found</p>
                    <p className="text-sm sm:text-lg font-medium">The requested resource could not be found on this server!</p>
                    <h1 className="p-4"><NavLink to="/" className="p-4 text-white text-center font-medium bg-sky-600 rounded-2xl">Return To Home Page</NavLink></h1>
                </div>
            </div>
        </div>
    );
}

export default Four0Four;
