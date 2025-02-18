import { useState } from "react";

const Pagination = () => {
  let data = [1, 2, 3, 4, 5];
  let [page, setPage] = useState(1);
  return (
    <ol className="flex justify-center gap-1 text-xs font-medium">
      {data.map((ele, i) => {
        return (
          <li
            key={i}
            onClick={() => setPage(ele)}
            className={`block size-8 rounded-sm  ${
              page == ele && "border border-[#09a9d9]"
            } bg-black text-center leading-8 text-white cursor-pointer rounded`}
          >
            {ele}
          </li>
        );
      })}
    </ol>
  );
};

export default Pagination;
