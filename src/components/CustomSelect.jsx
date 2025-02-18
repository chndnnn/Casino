const CustomSelect = () => {
  return (
    <div>
      <label htmlFor="HeadlineAct" className="text-neutral-200">
        Transaction Type
      </label>

      <select
        name="HeadlineAct"
        id="HeadlineAct"
        className="mt-1 w-full h-10 rounded bg-black  border border-[#09a9d9] text-gray-300 sm:text-sm"
      >
        <option value="">Deposit</option>
        <option value="JM">Chandan</option>
        <option value="SRV">Stevie Ray Vaughn</option>
      </select>
    </div>
  );
};

export default CustomSelect;
