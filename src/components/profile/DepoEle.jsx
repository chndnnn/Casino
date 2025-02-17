const DepoEle = ({ image, min, max }) => {
  return (
    <div className="border border-[#4a757e] flex justify-between px-5 w-[90%] pt-2 text-neutral-400">
      <div className=" flex flex-col items-center">
        <img src={image} alt="" className="h-14 w-36 rounded-md" />
        <span>1-5 Minutes</span>
      </div>
      <div className="flex items-center gap-6">
        <span>MIN : {min} TRY</span>
        <span>MAX : {max} TRY</span>
      </div>
      <div className=" flex items-center">
        <button className="h-12 bg-[#09a9d9] w-28 rounded-md text-black text-xl font-medium">
          Deposit
        </button>
      </div>
    </div>
  );
};

export default DepoEle;
