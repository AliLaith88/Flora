import FloraLogo from "./assets/Flora.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router";
export default function Footer() {
  return (
    <div>
      {/* footer */}
      <div className="bg-myBlue font-roboto font-normal text-myWhite">
        {/* container */}
        <div className="px-4 py-8 flex justify-between items-start">
          {/* left */}
          <div>
            <img src={FloraLogo} alt="" className="w-24" />
            <div>
              <p className="font-light text-sm">©2024</p>
            </div>
          </div>
          {/* site map for big screen*/}
          <div className="hidden md:flex uppercase flex-col ">
            <p className="font-medium">Site Map</p>
            <div className="flex flex-col mt-2 text-sm">
              <Link to="/about">
                <div className="flex items-center hover:text-gray-300">
                  <IoMdArrowDropright />
                  <p>about us</p>
                </div>
              </Link>
              <Link to="/destinations">
                <div className="flex items-center hover:text-gray-300">
                  <IoMdArrowDropright />
                  <p>destinations</p>
                </div>
              </Link>
              <Link to="/contact">
                <div className="flex items-center hover:text-gray-300">
                  <IoMdArrowDropright />
                  <p>contact us</p>
                </div>
              </Link>
              <Link to="/faq">
                <div className="flex items-center hover:text-gray-300">
                  <IoMdArrowDropright />
                  <p>faq</p>
                </div>
              </Link>
            </div>
          </div>
          {/* contact info for big screen*/}
          <div className="hidden md:flex flex-col ">
            <p className="font-medium">Contact Us</p>
            <div className="flex flex-col mt-2 text-sm">
              <div className="flex items-center hover:text-gray-300">
                <MdEmail size={14} className="mr-2" />
                <p>placeholder@place.go</p>
              </div>

              <div className="flex items-center hover:text-gray-300">
                <FaPhoneAlt size={14} className="mr-2" />
                <p>135-346-2341-56</p>
              </div>
            </div>
          </div>
          {/* media */}
          <div>
            <p>Follow Us:</p>
            <div className="flex gap-x-3">
              <a href="">
                <FaInstagramSquare size={24} />
              </a>
              <a href="">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
