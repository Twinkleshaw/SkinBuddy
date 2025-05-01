import { IoPerson } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
import Login from "./Auth/Login";
import Signup from "./Auth/SignUp";
import Cart from "./Cart";
import { useCart } from "../Context/CartContext";
import { RxCross2 } from "react-icons/rx";
function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
   const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { cartItems } = useCart();
  const token = localStorage.getItem("token");
  const handleOpenLogin = () => {
    setShowLogin(true);
    setShowSignup(false); // close signup if open
  };

  const handleOpenSignup = () => {
    setShowSignup(true);
    setShowLogin(false); // close login if open
  };

  const handleCloseModals = () => {
    setShowLogin(false);
    setShowSignup(false);
    setOpenCart(false);
  };

  const handleCart = () => {
    setOpenCart(true);
  };

    const handleProfile = () => {
      setIsProfileOpen(true);
    };

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow">
      <nav>
        <ul className="flex items-center justify-around h-20">
          <div className="w-full">
            <Link to={"/"}>
              <img src={logo} alt="SkinBuddy" className="w-[70%]" />
            </Link>
          </div>
          <div
            className="flex justify-center w-full gap-12 text-lg font-medium text-gray-700"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <Link
              to="/shop"
              className="border-b-2 border-transparent hover:border-b-[#539d68]  transition duration-300"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="border-b-2 border-transparent hover:border-b-[#539d68] transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="border-b-2 border-transparent hover:border-b-[#539d68] transition duration-300"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center justify-center w-full h-full">
            <div className="flex justify-between bg-gray-100 rounded w-[70%]">
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

          <div className="flex relative  justify-end p-6 pr-20 gap-6 w-[50%]">
            {token ? (
              <>
                {isProfileOpen ? (
                  <button onClick={() => setIsProfileOpen(false)}>
                    <RxCross2
                      size={25}
                      className="text-gray-700 cursor-pointer"
                    />
                  </button>
                ) : (
                  <button onClick={() => setIsProfileOpen(true)}>
                    <IoPerson
                      size={25}
                      className="text-gray-700 cursor-pointer"
                    />
                  </button>
                )}

                {isProfileOpen && (
                  <div className="absolute z-50 mt-6 bg-white border border-gray-400 rounded shadow-lg left-2 w-36">
                    <button
                      onClick={handleProfile}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Profile
                    </button>
                    <button
                      onClick={handleProfile}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Order History
                    </button>
                    <button
                      // onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={handleOpenLogin}
                className="text-white bg-[#539d68] px-2 py-0.5 rounded"
              >
                Login
              </button>
            )}

            <div className="relative">
              <FaCartShopping
                size={25}
                className="text-gray-700 cursor-pointer"
                onClick={handleCart}
              />
              {cartItems.length > 0 && (
                <span className="absolute top-[-8px] right-[-8px] bg-[#C91010] text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </ul>
      </nav>

      {/* Modals */}
      <Login
        isOpen={showLogin}
        onClose={handleCloseModals}
        onSwitchToSignup={handleOpenSignup}
      />
      <Signup
        isOpen={showSignup}
        onClose={handleCloseModals}
        onSwitchToLogin={handleOpenLogin}
      />
      <Cart
        isOpen={openCart}
        onClose={handleCloseModals}
        showLogin={showLogin}
        onTriggerLogin={handleOpenLogin} // ⬅️ pass this
      />
    </div>
  );
}

export default Navbar;
