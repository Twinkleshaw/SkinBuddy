import React, { useEffect, useState } from 'react'
import { useProduct } from '../Context/ProductContext';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';
import { StarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
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
    <div className="w-full pt-40 pb-12 lg:pt-32">
    <div className="px-4 mx-auto sm:px-6 lg:px-8">
      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative mb-4 overflow-hidden transition-all duration-300 bg-white shadow-lg group rounded-2xl hover:shadow-xl"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden h-72">
              <img
                src={product?.image}
                alt={product?.name}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                onClick={() => showProdDetails(product?._id)}
              />
              {/* Quick View Badge */}
              <div 
                className="absolute px-3 py-1 text-xs font-medium text-gray-800 transition-opacity duration-300 rounded-full opacity-0 cursor-pointer top-4 right-4 bg-white/90 backdrop-blur-sm group-hover:opacity-100"
                onClick={() => showProdDetails(product?._id)}
              >
                Quick View
              </div>
            </div>
            
            {/* Product Info */}
            <div className="p-5 space-y-3 border-t border-gray-100">
              <h3 
                className="text-lg font-semibold text-gray-800 line-clamp-2  hover:text-[#f18526] transition-colors cursor-pointer"
                onClick={() => showProdDetails(product?._id)}
              >
                {product?.name}
              </h3>
              
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold text-[#f18526]">₹{product?.price}</p>
                {product.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
                )}
              </div>
              <div className="flex items-center">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="ml-1 text-xs text-gray-500">(24 reviews)</span>
            </div>
              
              
              {/* Add to Cart Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2.5 px-4 bg-[#539d68] hover:bg-[#3e7a52] text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                onClick={() => { addToCart(product), handleCart(product) }}
              >
                <ShoppingCartIcon className="w-5 h-5" />
                Add to Cart
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Shop