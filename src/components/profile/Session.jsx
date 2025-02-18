import { useState } from "react";
import { IoTimerSharp } from "react-icons/io5";
import CustomSelect from "../CustomSelect";
import DatePicker from "react-datepicker";
import SessionComp from "../SessionComp";
import Pagination from "../Pagination";

const Session = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const data = [1, 2, 3, 4, 5];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex items-center text-xl md:text-2xl gap-3 md:gap-5 p-2 mb-3">
        <IoTimerSharp />
        <span>Session History</span>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-5 mb-5">
        {/* Custom Select */}
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
        <button className="h-10 bg-[#09a9d9] rounded text-black font-medium w-full md:w-auto px-6">
          Search
        </button>
      </div>

      {/* Session History Entries */}
      <div>
        {data.map((ele, i) => (
          <div key={i} className="border border-[#09a9d9] p-2">
            <SessionComp />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-5">
        <Pagination />
      </div>
    </div>
  );
};

export default Session;
