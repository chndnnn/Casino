import { GoDotFill } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { mainState } from "../../context/mainContext";

const GamesList = ({ name, data = [], show = false }) => {
  const [count, setCount] = useState({ start: 0, end: 10 });
  const [itemsPerPage, setItemsPerPage] = useState(10);
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
      if (window.innerWidth < 768) {
        if (show) {
          setItemsPerPage(8); // Show 4 items on mobile
          setCount((prev) => ({
            ...prev,
            end: 8,
          }));
        } else {
          setItemsPerPage(4); // Show 4 items on mobile
          setCount((prev) => ({
            ...prev,
            end: 4,
          }));
        }
      } else {
        if (show) {
          setItemsPerPage(20); // Show 4 items on mobile
          setCount((prev) => ({
            ...prev,
            end: 20,
          }));
        } else {
          setItemsPerPage(10);
        }
        // Show 10 items on larger screens
      }
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [name]);

  // Handle right arrow click
  const handleNext = () => {
    if (count.end < data.length) {
      setCount((prev) => ({
        start: prev.start + itemsPerPage,
        end: prev.end + itemsPerPage,
      }));
    }
  };

  // Handle left arrow click
  const handlePrev = () => {
    if (count.start > 0) {
      setCount((prev) => ({
        start: prev.start - itemsPerPage,
        end: prev.end - itemsPerPage,
      }));
    }
  };

  return (
    <div className="w-full h-full  p-1 flex flex-col gap-2">
      <div className="h-10  flex items-center justify-between px-2">
        <div className="flex text-white items-center gap-3">
          <GoDotFill className="text-yellow-500" />
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
          <div className="text-white text-sm bg-neutral-700 rounded px-2 border">
            View All
          </div>
        </div>
      </div>
      <div
        onClick={onGameClick}
        className=" h-28  grid md:grid-cols-10 grid-cols-4 gap-2 cursor-pointer"
      >
        {data.slice(count.start, count.end).map((ele, index) => (
          <div key={index} className="w-full h-28">
            <img
              src={ele.image}
              alt=""
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesList;
