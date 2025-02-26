const DepoEle = ({ image, min, max }) => {
  return (
    <div className="border bg-black border-[#4a757e] flex flex-col md:flex-row items-center md:justify-between px-5 w-full md:w-[90%] pt-4 text-neutral-400 gap-4 md:gap-0 md:mb-0 mb-2">
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt="Payment Method"
          className="h-16 md:h-14 w-40 md:w-36 rounded-md"
        />
        <span className="text-sm md:text-base">1-5 Minutes</span>
      </div>

      <div className="flex flex-col md:flex-row items-center md:gap-6 text-sm md:text-base">
        <span>
          MIN: <strong>{min}</strong> TRY
        </span>
        <span>
          MAX: <strong>{max}</strong> TRY
        </span>
      </div>

      <div className="w-full md:w-auto">
        <button className="w-full md:w-28 h-12 bg-[#09a9d9] rounded-md text-black text-lg font-medium md:mb-0 mb-2">
          Deposit
        </button>
      </div>
    </div>
  );
};

export default DepoEle;
