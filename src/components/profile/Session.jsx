import { useState } from "react";
import { GiTakeMyMoney } from "react-icons/gi";
import CustomSelect from "../CustomSelect";
import DatePicker from "react-datepicker";
import { IoTimerSharp } from "react-icons/io5";
import SessionComp from "../SessionComp";
import Pagination from "../Pagination";

const Session = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const data = [1, 2, 3, 4, 5];
  return (
    <div className="p-4 ">
      <div className="flex items-center text-2xl gap-5 p-2  mb-3">
        <IoTimerSharp />
        Session History
      </div>
      <div className=" flex gap-5 mb-5">
        <div className="w-32 ">
          <CustomSelect />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="" className="mt-1">
            Start Date
          </label>
          <DatePicker
            className="bg-black border border-[#4a757e] w-28 h-10 rounded px-1"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="" className="mt-1">
            End Date
          </label>
          <DatePicker
            className="bg-black border border-[#4a757e] w-28 h-10 rounded px-1"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
        <button className="h-10 bg-[#09a9d9] mt-7 px-6 rounded">Search</button>
      </div>
      {data.map((ele, i) => {
        return (
          <div key={i} className="border border-[#09a9d9] p-1">
            <SessionComp />
          </div>
        );
      })}
      <div className="mt-5">
        <Pagination />
      </div>
    </div>
  );
};
export default Session;
