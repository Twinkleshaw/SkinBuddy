import React, { useEffect, useState } from 'react'
import { useProduct } from '../Context/ProductContext';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
function Shop() {
    const { getAllProducts } = useProduct();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
  const { addToCart } = useCart();
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchproduct=async()=>{
            const response =await getAllProducts();
            setProducts(response);
        }
        fetchproduct()
    },[])

    const showProdDetails = (id) => {
        navigate(`/productDetails/${id}`);
      };
    
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
                  quantity: 1,
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
  return (
    <div className="flex flex-wrap justify-center py-20">
        {products?.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="pt-15 w-[24%] px-4"
          >
            <img
              src={product?.image}
              alt=""
              className="w-full h-[280px] rounded-t-2xl"
              onClick={() => showProdDetails(product?._id)}
            />
            <div className="w-full px-2 py-4 space-y-2 font-medium border border-t-0 border-gray-300 text-[18px]">
              <p className="text-gray-800 text-[15px]">{product?.name}</p>
              <p className="font-bold text-[16px]">₹{product?.price}</p>
              <div className="flex flex-col items-center justify-center">
                <button
                  className="w-full px-2 py-1 text-[15px] text-white rounded bg-[#D6A85A]"
                  onClick={() => {
                    addToCart(product), handleCart(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
  )
}

export default Shop