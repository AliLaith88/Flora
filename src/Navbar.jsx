import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import FloraLogo from "./assets/Flora.png";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed left-0 top-0 z-50 w-full">
      <div className="bg-myBlue font-roboto font-light md:block hidden">
        {/* container */}
        <div className="px-4 py-2 flex justify-between items-center">
          <div className="flex text-myWhite items-center">
            <MdEmail className=" mr-4" />
            <p className="text-xs ">placehplder@email.cbm</p>
            <FaPhoneAlt className="mx-4" />
            <p className="text-xs ">0414-2351-434</p>
          </div>
          <div className="flex text-myWhite items-center">
            <FaFacebook className=" ml-4" />
            <FaInstagramSquare className="ml-4" />
          </div>
        </div>
      </div>
      <div className="bg-myBlue relative font-roboto font-normal ">
        {/* container */}
        <div className="px-4 py-2 flex justify-between items-center">
          <Link to="/">
            <img src={FloraLogo} alt="Flora Logo" className="w-28" />
          </Link>
          {/* menu btn */}
          <div className="flex md:hidden" onClick={toggleDropDown}>
            <IoMdMenu color="white" size={40} />
          </div>
          {/* navbar */}
          <div className="hidden md:flex items-center gap-x-4  py-2 text-myWhite">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/destinations" className="hover:text-gray-300">
              Destinations
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
            <Link to="/faq" className="hover:text-gray-300">
              FAQ
            </Link>
          </div>
          {/* dropdown */}
          {isOpen && (
            <div className="w-full text-myWhite bg-myBlue absolute top-0 left-0 flex justify-between  px-4 py-6 md:hidden">
              <div className="flex flex-col gap-y-6">
                <Link to="/">Home</Link>
                <Link to="/destinations">Destinations</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/faq">FAQ</Link>
              </div>
              <IoIosCloseCircleOutline size={35} onClick={toggleDropDown} />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
