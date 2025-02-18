import { useEffect, useState } from "react";

const Winner = ({ image }) => {
  const [dynamicHeight, setDynamicHeight] = useState("md:h-20");
  useEffect(() => {
    if (window.innerHeight > 650) {
      setDynamicHeight("md:h-24");
    } else {
      setDynamicHeight("md:h-20");
    }
  }, []);
  return (
    <div
      className={`w-full h-12 ${dynamicHeight} text-neutral-400 flex justify-between text-xs md:text-sm`}
    >
      <div className="h-full flex gap-2 ">
        <div className="h-full">
          <img src={image} alt="" className="h-full w-full rounded" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>Game</span>
          <span className="text-white">Wild West G</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <span>Best </span>
        <span className="text-white">Undefined</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span>Multiplier </span>
        <span className="text-blue-300">0.89x</span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <span>Profit </span>
        <span className="text-green-400">$54.104</span>
      </div>
    </div>
  );
};

export default Winner;
