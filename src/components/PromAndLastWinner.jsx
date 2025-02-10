import Winner from "./Winner";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import image from "/Win1.png";
import { gamesWinner } from "../../helpers/Data";
import { useEffect, useState } from "react";

const PromAndLastWinner = () => {
  const [dynamicHeight, setDynamicHeight] = useState("md:h-[600px]");
  const [imageHeight, setImageHeight] = useState();
  let gamesWinners = gamesWinner;

  useEffect(() => {
    if (window.innerHeight > 650) {
      setDynamicHeight("md:h-[700px]"); // Increase height
      setImageHeight("md:h-[670px]");
    } else {
      setDynamicHeight("md:h-[600px]");
      setImageHeight("md:h-[570px]");
    }
  }, []);

  return (
    <div className={`w-full ${dynamicHeight} md:flex gap-3 `}>
      <div className="h-full  flex flex-col md:w-[60%] gap-2">
        <div className="h-8 text-white font-semibold px-1 flex justify-between">
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
        <div className={`grid grid-rows-2 h-96 ${imageHeight} gap-2`}>
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
      <div className="h-full  md:w-[40%]  flex flex-col">
        <div className="h-8 text-white  flex md:justify-center md:items-start items-center font-semibold">
          Latest Winner
        </div>
        <div className={`flex-1 grid grid-rows-6 gap-3 p-3 ${imageHeight}`}>
          {gamesWinners.map((ele, i) => (
            <Winner key={i} image={ele.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromAndLastWinner;
