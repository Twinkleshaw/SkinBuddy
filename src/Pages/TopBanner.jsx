/* eslint-disable no-unused-vars */
import banner1 from "../assets/desktop/banner1.jpg";
import { motion } from "framer-motion";
function TopBanner() {
  return (
    <motion.div
        initial={{ opacity: 0,y:50 }}
        animate={{ opacity: 1 ,y:0}}
        transition={{duration:2}} className="relative w-full pt-16">
      <img src={banner1} alt="" className="w-full h-[600px] object-conatin" />
      {/* <motion.div
        initial={{ opacity: 0,y:-50 }}
        animate={{ opacity: 1 ,y:0}}
        transition={{duration:2}}
        className="absolute  right-0 top-32 flex items-center justify-end  text-2xl font-bold text-gray-600 w-[70%] lg:px-20 ">
        At SkinBuddy, we believe skincare is more than just a routine — it's a
        ritual of self-love, confidence, and care. Every product we curate is
        chosen with your skin’s unique story in mind, blending science and
        nature to bring out the glow you were born with. Whether you're looking
        to heal, protect, or simply indulge, SkinBuddy is your trusted companion
        on every step of your skincare journey. Because your skin deserves more
        than just care — it deserves a buddy. <br /><br />
        WE CARE FOR YOUR SKIN 
      </motion.div> */}
    </motion.div>
  );
}

export default TopBanner;
