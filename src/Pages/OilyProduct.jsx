import { useEffect, useState } from "react";
import { useProduct } from "../Context/ProductContext";
import { motion } from "framer-motion";
function OilyProduct() {
  const {getAllProductsByCategory}=useProduct();
  const [oily,setOily]=useState([]);
  useEffect(()=>{
     const fetchProduct=async()=>{
       const response=await getAllProductsByCategory("Oily");
       console.log(response)
       setOily(response)
     }
     fetchProduct();
  },[])
  return (
    <div  className="w-full py-10">
        <h2
        className="text-2xl font-semibold text-center"
        style={{
          fontFamily: "Georgia, serif"
        }}
      >For Oily Skin</h2>
       <div className="flex flex-wrap">
       {
          oily?.map((product,i)=>(
            <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="pt-10 w-[23%] px-4 ">
          <img
            src={product?.image}
            alt=""
            className="w-full h-[300px] rounded-t-2xl"
          />
            <div className="w-full px-2 py-4 space-y-2 font-medium border border-t-0 border-gray-300 text-[18px]">
            <p className="text-gray-800 text-[15px]">{product?.name}</p>
            <p className="font-bold text-[16px]">₹{product?.price}</p>
            <div className="flex flex-col items-center justify-center">
              <button className="w-full px-2 py-1 text-[15px] text-white rounded bg-[#D6A85A] ">
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
          ))
        }
       </div>
      </div>
  )
}

export default OilyProduct