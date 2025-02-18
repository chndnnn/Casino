import { GoDotFill } from "react-icons/go";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { mainState } from "../../context/mainContext";
import { MdDiamond } from "react-icons/md";

const GamesList = ({
  name,
  data = [],
  show = false,
  height = false,
  size = false,
}) => {
  const [count, setCount] = useState({ start: 0, end: 7 });
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [dynamicHeight, setDynamicHeight] = useState("md:h-[200px]"); // Default height

  const { user, isOpen, setIsOpen } = mainState();
  const { setShowPopup } = mainState();

  function onGameClick() {
    if (!user) {
      setIsOpen(true);
    } else {
      setShowPopup(true);
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight > 650) {
        setDynamicHeight("md:h-[250px]"); // Increase height
      } else {
        setDynamicHeight("md:h-[200px]"); // Default height
      }

      if (window.innerWidth < 768) {
        setItemsPerPage(show ? 8 : 4);
        setCount((prev) => ({ ...prev, end: show ? 8 : 4 }));
      } else {
        if (show) {
          setItemsPerPage(size ? 12 : 14);
          setCount((prev) => ({ ...prev, end: size ? 12 : 14 }));
        } else {
          setItemsPerPage(7);
        }
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [name]);

  const handleNext = () => {
    if (count.end < data.length) {
      setCount((prev) => ({
        start: prev.start + itemsPerPage,
        end: prev.end + itemsPerPage,
      }));
    }
  };

  const handlePrev = () => {
    if (count.start > 0) {
      setCount((prev) => ({
        start: prev.start - itemsPerPage,
        end: prev.end - itemsPerPage,
      }));
    }
  };

  return (
    <div className="w-full h-full p-1 flex flex-col gap-2">
      <div className="h-10 flex items-center justify-between px-2 ">
        <div className="flex text-white items-center gap-3">
          {name === "Live Casino" ? (
            <MdDiamond className="text-red-700" />
          ) : (
            <GoDotFill className="text-yellow-500" />
          )}
          <span className="text-white">{name}</span>
          <div
            className={`bg-neutral-800 p-1 rounded cursor-pointer ${
              count.start === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrev}
          >
            <FaArrowLeft />
          </div>
          <div
            className={`bg-neutral-800 p-1 rounded cursor-pointer ${
              count.end >= data.length ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNext}
          >
            <FaArrowRight />
          </div>
        </div>
        <div>
          <div className="text-white text-sm border bg-neutral-700 rounded px-2">
            View All
          </div>
        </div>
      </div>
      <div
        onClick={onGameClick}
        className={`h-32 grid ${
          size ? "md:grid-cols-6 md:gap-y-10 md:gap-3" : "md:grid-cols-7"
        } grid-cols-4 gap-2 md:gap-4 cursor-pointer`}
      >
        {data.slice(count.start, count.end).map((ele, index) => (
          <div
            key={index}
            className={`w-full h-32 ${
              height ? "md:h-[165px]" : dynamicHeight
            } object-cover`}
          >
            <img src={ele.image} alt="" className="w-full h-full rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesList;
