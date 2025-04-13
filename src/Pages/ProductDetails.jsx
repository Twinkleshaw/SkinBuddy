import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import image from "../assets/product_1.jpg";

function ProductDetails() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50">
      <div className="w-[85%] bg-white lg:flex mt-10 p-10 rounded-xl shadow-md">
        <div className="lg:w-[40%] flex items-center justify-center">
          <img
            src={image}
            alt="ClearSkin Niacinamide Serum"
            className="max-w-[350px] rounded-xl"
          />
        </div>

        <div className="lg:w-[60%] space-y-4 mt-6 lg:mt-0 lg:pl-10">
          <h2 className="text-2xl font-semibold text-gray-800">
            ClearSkin Niacinamide Serum
          </h2>

          <p className="text-gray-600 text-[16px]">
            Controls oil and reduces acne marks with 10% Niacinamide. Suitable
            for combination skin.
          </p>

          <p className="font-bold text-[20px] text-[#D6A85A]">MRP: ₹799</p>
          <p className="text-sm text-gray-500">Inclusive of all taxes</p>

          <p className="font-medium text-gray-700">Quantity</p>
          <div className="flex items-center gap-4 px-4 py-2 text-lg bg-gray-200 rounded-md w-fit">
            <FaMinus className="cursor-pointer" />
            <span>1</span>
            <FaPlus className="cursor-pointer" />
          </div>

          <button className="mt-6 px-6 py-2 bg-[#D6A85A] text-white rounded-md text-[16px] font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
