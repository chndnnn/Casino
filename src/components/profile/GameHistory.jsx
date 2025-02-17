import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { BsCalendar2DateFill } from "react-icons/bs";
import CustomSelect from "../CustomSelect";
import { useState } from "react";
const GameHistory = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="p-4 ">
      <div className="flex items-center text-2xl gap-5 p-2  mb-3">
        <BsCalendar2DateFill />
        Game History
      </div>
      <div className=" flex gap-5">
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
    </div>
  );
};

export default GameHistory;
