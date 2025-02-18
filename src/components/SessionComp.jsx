import { PiDevicesFill } from "react-icons/pi";
const SessionComp = () => {
  return (
    <div className="border border-neutral-600 text-neutral-400 bg-neutral-800 h-20 flex py-3">
      <div className="border-r flex w-[60%] gap-3 justify-center items-center">
        <div>
          <PiDevicesFill size={70} />
        </div>

        <div className="">
          <p className="text-sm">
            Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,
            like Gecko) Chrome/120.0.0.0 Safari/537.36
          </p>
        </div>
      </div>
      <div className="border-r w-[20%] flex flex-col text-sm justify-center items-center">
        <span>IP Address</span>
        <span>27.7.135.183</span>
      </div>
      <div className="w-[20%] flex flex-col justify-center text-sm items-center">
        <span>Date</span>
        <span>Undefined</span>
      </div>
    </div>
  );
};

export default SessionComp;
