import { PiDevicesFill } from "react-icons/pi";

const SessionComp = () => {
  return (
    <div className="border border-neutral-600 text-neutral-400 bg-neutral-800 p-3 flex flex-col md:flex-row md:h-20">
      {/* Device Info Section */}
      <div className="border-b md:border-r md:border-b-0 flex gap-3 justify-start md:justify-center items-center p-3 md:w-[60%]">
        <PiDevicesFill size={50} className="shrink-0" />
        <p className="text-sm break-words md:break-normal text-wrap">
          Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML,
          like Gecko) Chrome/120.0.0.0 Safari/537.36
        </p>
      </div>

      {/* IP Address Section */}
      <div className="border-b md:border-r md:border-b-0 w-full md:w-[20%] flex flex-col text-sm justify-center items-center p-2">
        <span className="font-medium">IP Address</span>
        <span>27.7.135.183</span>
      </div>

      {/* Date Section */}
      <div className="w-full md:w-[20%] flex flex-col justify-center text-sm items-center p-2">
        <span className="font-medium">Date</span>
        <span>Undefined</span>
      </div>
    </div>
  );
};

export default SessionComp;
