import { pricingPlan } from "../assets";

const PricingPlan = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative z-10 flex flex-col items-center py-10 justify-center max-w-[95%] mx-auto">
        <hr className="w-[8vw] border-t-3 border-red-500" />
        <h2 className="text-4xl font-medium pt-2">Pricing Plans</h2>
        <p className="text-center py-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy <br /> eirmod tempor invidunt ut labore.
        </p>
        <ul className="flex gap-4 md:flex-row flex-col justify-between">
          {pricingPlan.map((item, index) => (
            <li
              className="bg-white flex flex-col gap-3 pb-6 border-gray-300 shadow-xl rounded-lg"
              key={index}
            >
              <p className="text-2xl px-4 pt-4 font-medium">{item.type}</p>
              <p className="text-gray-500 px-4">
                <span className="text-red-500 text-2xl font-medium">
                  ₹{item.price}
                </span>
                /monthly
              </p>
              <hr className="text-gray-300 mx-4" />
              <p className="px-4">{item.duration} Days a Week</p>
              <p className="px-4">Dedicated Trainer Allocated</p>
              <p className="px-4">Swimming pool included</p>
              <p className="px-4">Morning and Evening Batches</p>
              <p className="text-center mt-4 rounded-r-full bg-red-500 font-medium text-white md:w-[15vw] w-[80%] py-3">
                Purchase Now
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingPlan;
