import Winner from "./Winner";

const PromAndLastWinner = () => {
  return (
    <div className="w-full md:h-80 md:flex">
      <div className="h-full  flex flex-col md:w-[50%] gap-2 p-2">
        <div className="h-8  text-white font-semibold">Promotionals</div>
        <div className="grid grid-rows-2 h-64 gap-2">
          <img
            src="./Cover.jpg"
            alt=""
            className="h-full w-full object-cover rounded-md"
          />
          <img
            src="./Cover2.jpg"
            alt=""
            className="h-full w-full  rounded-md"
          />
        </div>
      </div>
      <div className="h-full  md:w-[50%] p-2 flex flex-col">
        <div className="h-8 text-white flex md:justify-center items-center font-semibold ">
          Latest Winner
        </div>
        <div className="flex-1 grid grid-rows-5 gap-1 p-2 ">
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
