import product1 from "../assets/product_1.jpg";

function DisplaProduct() {
  return (
    <div className="w-full pt-10">
      {/* bestsellers */}
      <div>
        <h2 className="text-3xl font-semibold text-center">BestSellers</h2>
        <div className="pt-20 w-[20%] px-4">
          <img
            src={product1}
            alt=""
            className="w-full h-[200px] rounded-t-2xl"
          />
          <div className="w-full px-2 py-4 space-y-2 font-medium border border-gray-300 text-[18px]">
            <p className="text-gray-800 ">Kojic Oil Free Moisturizer-50g</p>
            <p className="font-bold">₹249</p>
            <div className="flex flex-col items-center justify-center">
              <button className="w-full px-2 py-1 text-white rounded bg-amber-700 ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* for oily skin */}
      <div>
        <h2 className="text-3xl font-semibold text-center">For Oily Skin</h2>
        <div className="pt-20 w-[20%] px-4">
          <img
            src={product1}
            alt=""
            className="w-full h-[200px] rounded-t-2xl"
          />
          <div className="w-full px-2 py-4 space-y-2 font-medium border border-gray-300 text-[18px]">
            <p className="text-gray-800 ">Kojic Oil Free Moisturizer-50g</p>
            <p className="font-bold">₹249</p>
            <div className="flex flex-col items-center justify-center">
              <button className="w-full px-2 py-1 text-white bg-black rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* For Combination Skin */}
      <div>
        <h2 className="text-3xl font-semibold text-center">
          For Combination Skin
        </h2>
        <div className="pt-20 w-[20%] px-4">
          <img
            src={product1}
            alt=""
            className="w-full h-[200px] rounded-t-2xl"
          />
          <div className="w-full px-2 py-4 space-y-2 font-medium border border-gray-300 text-[18px]">
            <p className="text-gray-800 ">Kojic Oil Free Moisturizer-50g</p>
            <p className="font-bold">₹249</p>
            <div className="flex flex-col items-center justify-center">
              <button className="w-full px-2 py-1 text-white rounded bg-amber-700 ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* For Dry Skin */}
      <div>
        <h2 className="text-3xl font-semibold text-center">For Dry Skin</h2>
        <div className="pt-20 w-[20%] px-4">
          <img
            src={product1}
            alt=""
            className="w-full h-[200px] rounded-t-2xl"
          />
          <div className="w-full px-2 py-4 space-y-2 font-medium border border-gray-300 text-[18px]">
            <p className="text-gray-800 ">Kojic Oil Free Moisturizer-50g</p>
            <p className="font-bold">₹249</p>
            <div className="flex flex-col items-center justify-center">
              <button className="w-full px-2 py-1 text-white rounded bg-amber-700 ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* for sensitive skin */}
      <div>
        <h2 className="text-3xl font-semibold text-center">
          For Sensitive Skin
        </h2>
        <div className="pt-20 w-[20%] px-4">
          <img
            src={product1}
            alt=""
            className="w-full h-[200px] rounded-t-2xl"
          />
          <div className="w-full px-2 py-4 space-y-2 font-medium border border-gray-300 text-[18px]">
            <p className="text-gray-800 ">Kojic Oil Free Moisturizer-50g</p>
            <p className="font-bold">₹249</p>
            <div className="flex flex-col items-center justify-center">
              <button className="w-full px-2 py-1 text-white rounded bg-amber-700 ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplaProduct;
