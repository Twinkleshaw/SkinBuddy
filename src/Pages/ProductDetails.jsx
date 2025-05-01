import { FaMinus, FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useProduct } from "../Context/ProductContext";
import { useParams } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { toast } from "react-toastify";
function ProductDetails() {
  const { fetchProductById } = useProduct();
  const { addToCart } = useCart();
  const [num, setNum] = useState(1);
  const token = localStorage.getItem("token");
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  const handleAddOne = () => setNum(num + 1);

  const handleRemoveOne = () => {
    if (num > 1) setNum(num - 1);
  };

  useEffect(() => {
    const productById = async () => {
      const response = await fetchProductById(id);
      setDetails(response);
    };
    productById();
  }, [id]);

  const handleCart = async (product) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: [
            {
              productId: product._id, 
              quantity: num,
            },
          ],
        }),
      });
  
      const data = await response.json();
      toast(data.message);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  if (!details) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="flex flex-col space-y-10 items-center w-full min-h-screen pb-10 bg-gray-100 pt-16">
      <div className="w-[85%] bg-white lg:flex mt-10 p-10 shadow-md">
        <div className="lg:w-[40%] flex items-center justify-center">
          <img
            src={details.image}
            alt={details.name}
            className="lg:max-w-[350px]"
          />
        </div>

        <div className="lg:w-[60%] space-y-3 mt-6 lg:mt-0 lg:pl-10">
          <h2 className="text-xl font-semibold text-gray-800">
            {details.name}
          </h2>

          <p className="text-gray-600 text-[16px]">{details.description}</p>

          <p className="font-bold text-[18px] text-[#D6A85A]">
            <span className="text-gray-600 text-[14px] font-normal">MRP: </span>
            ₹{details.price}
          </p>
          <p className="text-sm text-gray-500">Inclusive of all taxes</p>

          <p className="font-medium text-gray-700">Quantity</p>
          <div className="flex items-center gap-4 px-4 py-1 text-lg bg-gray-200 rounded w-fit">
            <FaMinus className="cursor-pointer" onClick={handleRemoveOne} />
            <span>{num}</span>
            <FaPlus className="cursor-pointer" onClick={handleAddOne} />
          </div>

          <button
            className="mt-6 px-6 py-2 bg-[#D6A85A] text-white rounded text-[16px] font-medium"
          onClick={() => {addToCart(details),handleCart(details)}}
          >
            Add to Cart
          </button>
        </div>
      </div>

      <div className="w-[85%]">
        <div className="bg-white p-4 text-gray-600 mt-4">
          <div className="border-b flex justify-around border-gray-200 text-[#1C1C1C] font-bold text-[18px] pb-2 mb-3">
            <h2>Description</h2>
            <h2>Ingredients</h2>
            <h2>How to use</h2>
          </div>
          <p>{details.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
