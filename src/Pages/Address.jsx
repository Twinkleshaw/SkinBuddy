import { IoIosArrowBack } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { useCheckout } from "../Context/CheckoutContext";

function Address({ isOpen, onClose, openCart, goToPayment }) {
  const { address, setAddress } = useCheckout(); // get from context

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    road: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSaveAddress = () => {
    setAddress(formData);
    console.log(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-end z-50">
      <div className="relative px-4 bg-white py-4 border-l border-gray-300 w-full max-w-[450px]">
        <div className="border-b border-gray-300 flex justify-between items-center pb-2">
          <button onClick={openCart}>
            <IoIosArrowBack size={22} className="text-gray-800" />
          </button>
          <p className="font-semibold text-lg">Delivery Address</p>
          <button onClick={onClose}>
            <RxCross2 size={22} className="text-gray-800" />
          </button>
        </div>

        {/* Address form */}
        <div className="flex flex-col gap-4 mt-4 px-4">
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded outline-none"
          />
          <input
            name="phone"
            type="number"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded outline-none"
          />
          <input
            name="road"
            type="text"
            placeholder="Road Name/Area/Colony"
            value={formData.road}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded outline-none"
          />
          <input
            name="city"
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 border-gray-400 rounded outline-none"
          />
          <input
            name="state"
            type="text"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="border p-2 border-gray-400 rounded outline-none"
          />
          <input
            name="pincode"
            type="number"
            placeholder="PIN Code"
            value={formData.pincode}
            onChange={handleChange}
            className="border border-gray-400 p-2 rounded outline-none"
          />
        </div>

        {/* Save address button */}
        <div className="flex flex-col gap-4 mt-4 px-4">
          <button className="w-full text-[#f18526] border border-[#f18526] font-semibold py-2 rounded-md cursor-pointer">
            Change Address
          </button>
        </div>

        {/* Continue to Payment */}
        <div
          className="absolute bottom-0 left-0 w-full bg-white px-4 py-3 shadow-md"
          onClick={goToPayment}
        >
          <button
            className="w-full bg-[#f18526] text-white font-semibold py-2 rounded-md cursor-pointer"
            onClick={handleSaveAddress}
          >
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Address;
