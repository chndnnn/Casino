import { IoWalletSharp } from "react-icons/io5";
import { depoData } from "../../../helpers/Data";
import DepoEle from "./DepoEle";
import { LuArrowLeftRight } from "react-icons/lu";

const WithDraw = () => {
  let depositeData = depoData;
  return (
    <div className="p-4">
      <div className="flex items-center  text-2xl gap-5 p-2  mb-3">
        <LuArrowLeftRight />
        WITHDRAW
      </div>
      <div>
        {depositeData.slice(0, 3).map((ele, i) => {
          return (
            <DepoEle key={i} image={ele.image} min={ele.min} max={ele.max} />
          );
        })}
      </div>
    </div>
  );
};

export default WithDraw;
