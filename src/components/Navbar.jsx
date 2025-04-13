import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
function Navbar() {
  return (
    <div className="w-full">
      <nav>
        <ul className="flex items-center justify-around h-20">
          <div className="w-full">
            <Link to={"/"}>
              <img src={logo} alt="SkinBuddy" className="w-[70%]" />
            </Link>
          </div>
          <div
            className="flex justify-center w-full gap-12 text-xl font-medium text-gray-700"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <Link
              to="/shop"
              className="border-b-2 border-transparent hover:border-b-[#539d68]  transition duration-300"
            >
              Shop
            </Link>
            <Link
              to={"/about"}
              className="border-b-2 border-transparent hover:border-b-[#539d68] transition duration-300"
            >
              About Us
            </Link>
            <Link
              to={"/contact"}
              className="border-b-2 border-transparent hover:border-b-[#539d68] transition duration-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-center justify-center w-full h-full ">
            <div className="flex justify-between   bg-gray-100 rounded w-[70%]">
              <input
                type="text"
                placeholder="Search..."
                className="px-2 text-xl text-gray-700 outline-none"
              />
              <div className="relative">
                <span className="absolute inline-flex h-full w-full rounded border animate-ping bg-[#f18526] opacity-75" />
                <div className="relative px-2 py-1 border rounded bg-[#f18526] text-white">
                  <IoIosSearch size={25} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end p-6 pr-20 gap-6 w-[50%]">
            <Link>
              <IoPerson size={25} className="text-gray-700" />
            </Link>
            <Link>
              <FaCartShopping size={25} className="text-gray-700" />
            </Link>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
