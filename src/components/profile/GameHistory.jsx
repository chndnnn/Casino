import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BsCalendar2DateFill } from "react-icons/bs";
import CustomSelect from "../CustomSelect";
import { useState } from "react";

const GameHistory = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="p-4">
      {/* Title */}
      <div className="flex items-center text-xl md:text-2xl gap-3 p-2 mb-3">
        <BsCalendar2DateFill />
        <span>Game History</span>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* Custom Select Dropdown */}
        <div className="w-full md:w-32">
          <CustomSelect />
        </div>

        {/* Start Date Picker */}
        <div className="flex flex-col w-full md:w-auto">
          <label className="mb-1 text-neutral-300">Start Date</label>
          <DatePicker
            className="bg-black border border-[#09a9d9] w-full md:w-28 h-10 rounded px-2"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

        {/* End Date Picker */}
        <div className="flex flex-col w-full md:w-auto">
          <label className="mb-1 text-neutral-300">End Date</label>
          <DatePicker
            className="bg-black border border-[#09a9d9] w-full md:w-28 h-10 rounded px-2"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>

        {/* Search Button */}
        <button className="h-10 bg-[#09a9d9] w-full md:w-auto px-6 rounded mt-2 md:mt-7">
          Search
        </button>
      </div>
    </div>
  );
};

export default GameHistory;
