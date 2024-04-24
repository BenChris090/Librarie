import Navbar from "./Navbar";
import FootBar from "./Footbar";
import { NavLink,Link } from "react-router-dom";
import { FaAt, FaFacebook, FaStar, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
    let INDEXP = require("../images/bg1.jpg");
    let QM = require("../images/bg2.jpg");
    let TYPEWRITER = require("../images/bg3.jpg");
    let CCA = require("../images/bg4.jpg");

    return ( 
        <div className="about h-full">
            <Navbar/>
            
            <div className="header text-black px-6 lg:px-24 py-10 bg-[url('./images/bg7.jpg')] bg-no-repeat bg-cover bg-center space-y-2">
                <div className="header bg-green-600 bg-opacity-30 text-black px-6 rounded-3xl py-10 space-y-2">
                    <h1 className="text-2xl text-white lg:text-4xl"><b>About the Betterment and Empowerment Foundation (BEF)</b></h1>
                    <p className="text-xl text-white text-justify">Inaugurated on April 5, 2022, the Betterment and Empowerment Foundation (BEF) 
                    is a testament to the collective vision of its founders: Victor Mikie, William Ujor, Friday Ali, Igere James Oghenetega, 
                    Njekwume Nwachukwu Movover, Efokpokpo Dafe, and Uwhujarho Onoriode Goodluck, with Victor Mikie serving as Chairman and Uwhujarho Onoriode 
                    Goodluck as Vice Chairman. Together, they have embarked on a mission to uplift the Niger Delta communities from the depths of poverty and despair.

                    BEF is committed to fostering self-reliance and economic progress through comprehensive development programs. Our initiatives are tailored to endow the people of the Niger Delta with the capabilities to secure a prosperous future.</p>
                    <ul className="flex text-white items-center lg:pt-5 lg:px-2">
                        <FaAt className="text-3xl lg:text-4xl hover:text-sky-600 ease-in duration-500"/>
                        <Link to="https://twitter.com"><FaTwitter className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-sky-600 ease-in duration-500"/></Link>
                        <Link to="https://instagram.com"><FaInstagram className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-sky-600 ease-in duration-500"/></Link>
                        <Link to="https://facebook.com/profile.php?id=61557411836402"><FaFacebook className="text-3xl lg:text-4xl ml-4 lg:ml-20 hover:text-sky-600 ease-in duration-500"/></Link>
                    </ul>
                </div>
            </div>
            <div className="body text-left space-y-2 px-6 lg:px-24 py-8">
                <h1 className="text-2xl text-green-600 lg:text-3xl p-2"><b>Our Core Programs:</b></h1>
                <p className="text-lg lg:text-xl lg:text-justify text-gray-700 font-medium py-2 px-2"><b>Cash Assistance:</b> We provide monetary support to households in dire need, 
                aiding them to surmount financial challenges and elevate their living conditions.</p> 
                <p className="text-lg lg:text-xl lg:text-justify text-gray-700 font-medium py-2 px-2"><b>Food Aid:</b> Recognizing the fundamental role of nutrition, 
                we distribute essential food items to combat hunger and promote health within our communities.</p>               
                <h1 className="text-2xl text-green-600 lg:text-3xl p-2"><b>Our Commitment</b></h1>
                <p className="text-lg text-justify lg:text-xl lg:text-justify text-gray-700 font-medium py-2 px-2">The Betterment and Empowerment Foundation (BEF) is more than a charity; it's a testament to the altruistic spirit of our founders. 
                We are committed to fostering excellence, sustainability, and a positive impact across the Niger Delta through our support programs. 
                Our dedication lies in creating a brighter and more prosperous future for our beneficiaries and their communities.</p>   
            </div>
            <FootBar/>
        </div>
     );
}
 
export default About;