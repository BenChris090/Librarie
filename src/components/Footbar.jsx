import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const FootBar = () => {
    return ( 
        <div className="footbar text-white bg-indigo-700 text-center px-8 py-2 lg:px-48 bottom-0 static">
            <div className="w-full mx-auto lg:w-1/2">
                <h1 className="flex items-center justify-center font-bold">
                    with love from <Link to="https://iceberg-dev.vercel.app" className="ml-1 py-1 flex"> Ice_Berg <FaHeart className="text-red-600 ml-2 my-auto"/></Link>
                </h1>
            </div>
        </div>
     );
}
 
export default FootBar;
