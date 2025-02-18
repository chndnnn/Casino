import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  MdOutlineComputer,
  MdDateRange,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { LuCherry } from "react-icons/lu";
import { IoAmericanFootballSharp } from "react-icons/io5";
import { FaPlane } from "react-icons/fa";
import { MdCasino } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import PopupLogin from "./Login";
import { mainState } from "../../context/mainContext";
import { RiLoginCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false, // 24-hour format
  });
  const [menuOpen, setMenuOpen] = useState(false);
  let { setIsOpen, user, setUser } = mainState();
  let nav = useNavigate();

  useEffect(() => {
    let data = localStorage.getItem("token");
    setUser(data);
  }, []);
  const colors = [
    "#ff00ff",
    "#00ffff",
    "#ff4500",
    "#32cd32",
    "#ffff00",
    "#ff1493",
    "#00ff7f",
    "#1e90ff",
  ];

  const data = [
    { name: "Spor", icons: LuCherry },
    { name: "Spor", icons: IoAmericanFootballSharp },
    { name: "Canli Slot", icons: LuCherry },
    { name: "Casino", icons: MdCasino },
    { name: "Canli Casino", icons: IoAmericanFootballSharp },
    { name: "Sanal", icons: LuCherry },
    { name: "Oyunlar", icons: FaPlane },
    { name: "Tombala", icons: MdCasino },
    { name: "Tv Games", icons: IoAmericanFootballSharp },
    { name: "E-spor", icons: LuCherry },
    { name: "poker", icons: LuCherry },
    { name: "Bonus", icons: FaPlane },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  function onLonginCLick() {
    if (user) {
      nav("/profile");
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div className="w-full md:h-32 md:py-3 md:px-8  h-10 md:border-b-[3px] border-b-2 border-[#09a9d9] bg-gradient-to-r from-[#141c1e] to-[#0b2c55]">
      {/* Top Navbar */}
      <div className="w-full h-10 md:mb-5 flex  justify-between items-center px-2 md:px-8 ">
        <div className="h-[70%] w-[10%] md:w-[12%] hidden md:block">
          <img src="./logo2.jpg" alt="" className="h-full w-full rounded-sm" />
        </div>

        <div className="md:hidden text-white bg-neutral-800 p-1 rounded flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>
        <div className="md:hidden w-24 h-full  flex items-center">
          <img src="./logo2.jpg" alt="" className="w-full h-[80%] rounded-md" />
        </div>
        <div className="md:hidden flex gap-2">
          <div className="flex bg-yellow-600 p-1 rounded text-white justify-center items-center">
            <FaTelegram />
          </div>
          <div className="flex bg-green-600 p-1 rounded text-white justify-center items-center">
            <FaWhatsapp />
          </div>
          <div className=" bg-blue-600 p-1 rounded text-white justify-center items-center">
            <PopupLogin />
            {/* {user ? <FaUser /> : <RiLoginCircleFill onClick={onLonginCLick} />} */}
            {/* {user ? (
              <DropDown />
            ) : (
              <RiLoginCircleFill onClick={onLonginCLick} />
            )} */}
            {!user ? (
              <RiLoginCircleFill onClick={onLonginCLick} />
            ) : (
              <FaUser onClick={onLonginCLick} />
            )}
          </div>
        </div>
        {/* Desktop Icons */}
        <div className=" hidden md:flex  items-center  gap-4 ">
          <FaWhatsapp className="text-xl text-green-500 cursor-pointer" />
          <MdOutlineComputer className="text-xl text-red-500 cursor-pointer" />

          <MdDateRange className="text-xl text-yellow-400 cursor-pointer" />
          <span className="text-neutral-400 text-sm">{`${formattedDate} ${formattedTime}`}</span>
          <div className="flex bg-gradient-to-b gap-1 cursor-pointer from-neutral-700 to-neutral-700 p-2 rounded-sm text-white justify-center items-center">
            <RiLoginCircleFill />
            <span className="text-[11px] font-bold">GIRLS</span>
          </div>
          <PopupLogin>
            <div
              className={`flex bg-gradient-to-r h-8 gap-1 from-blue-400 to-blue-400 p-1 px-3 rounded-sm text-white justify-center items-center 
               `}
            >
              <FaUser className="text-[11px]" />

              <span className="text-[11px]">{user ? user : "login"}</span>
            </div>
          </PopupLogin>

          <div className="flex h-5 w-5 cursor-point rounded text-white justify-center items-center">
            <img src="./china.png" alt="" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {menuOpen && (
        <div className="md:hidden absolute top-11 left-0 w-full bg-gradient-to-bl from-blue-800 via-blue-950 to-blue-800 shadow-lg p-4 z-10">
          <div className=" grid grid-cols-3 gap-3 ">
            {data.map((ele, index) => {
              const glowingColor = colors[index % colors.length];
              return (
                <div
                  key={index}
                  className="bg-gradient-to-b from-neutral-800 to-black h-40 flex flex-col justify-center items-center gap-3 rounded-lg  shadow-lg"
                >
                  <span
                    className="text-neutral-400 rounded text-5xl"
                    style={{
                      color: glowingColor,
                      textShadow: `0 0 10px ${glowingColor}, 0 0 20px ${glowingColor}, 0 0 30px ${glowingColor}`,
                    }}
                  >
                    {<ele.icons />}
                  </span>
                  <span className="font-semibold text-white ">
                    {ele.name.toUpperCase()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <div className=" hidden md:flex   md:px-8  w-full h-10   items-center gap-6 ">
        {data.map((ele, i) => (
          <div key={i} className="flex items-center gap-1  cursor-pointer ">
            <span
              className={`text-neutral-400 text-[15px] ${
                i == 2 && "bg-orange-500 text-white"
              }   bg-neutral-800 rounded p-1`}
            >
              {<ele.icons />}
            </span>
            <span className=" text-[10px] font-bold text-neutral-100 hover:text-red-500">
              {ele.name.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
