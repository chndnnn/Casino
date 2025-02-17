import { IoWalletSharp } from "react-icons/io5";
import DepoEle from "./DepoEle";
import { depoData } from "../../../helpers/Data";

const Deposite = () => {
  let depositeData = depoData;
  return (
    <div className="p-4">
      <div className="flex items-center  text-2xl gap-5 p-2  mb-3">
        <IoWalletSharp />
        DEPOSIT
      </div>
      <div>
        {depositeData.map((ele, i) => {
          return (
            <DepoEle key={i} image={ele.image} min={ele.min} max={ele.max} />
          );
        })}
      </div>
    </div>
  );
};

export default Deposite;
