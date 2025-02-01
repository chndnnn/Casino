import Winner from "./Winner";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const PromAndLastWinner = () => {
  return (
    <div className="w-full md:h-[570px] md:flex ">
      <div className="h-full  flex flex-col md:w-[60%] gap-2">
        <div className="h-8 text-white font-semibold px-1  flex justify-between">
          <span>Promotionals</span>
          <div className="flex text-[11px] items-center gap-2">
            <span>See all</span>
            <div className={` p-1 rounded cursor-pointer `}>
              <FaArrowLeft />
            </div>
            <div className={`p-1 rounded cursor-pointer`}>
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 h-64 md:h-[495px] gap-2">
          <img
            src="./Promo.png"
            alt=""
            className="h-full w-full object-cover rounded-md"
          />
          <img
            src="./Promo1.png"
            alt=""
            className="h-full w-full  rounded-md"
          />
        </div>
      </div>
      <div className="h-full  md:w-[40%] p-2 flex flex-col">
        <div className="h-8 text-white flex md:justify-center items-center font-semibold">
          Latest Winner
        </div>
        <div className="flex-1 grid grid-rows-7 gap-2 p-3">
          <Winner />
          <Winner />
          <Winner />
          <Winner />
          <Winner />
          <Winner />
          <Winner />
        </div>
      </div>
    </div>
  );
};

export default PromAndLastWinner;
