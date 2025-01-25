import { useContext, useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  MdOutlineComputer,
  MdDateRange,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { LuCherry } from "react-icons/lu";
import { IoAmericanFootballSharp } from "react-icons/io5";
import { FaPlane } from "react-icons/fa";
import { MdCasino } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import PopupLogin from "./Login";
import { mainState } from "../../context/mainContext";

const Nav = () => {
  const now = new Date();
  const [menuOpen, setMenuOpen] = useState(false);
  let { user, setUser } = mainState();

  useEffect(() => {
    let data = localStorage.getItem("token");
    setUser(data);
  }, []);
  const colors = [
    "#ff00ff", // Neon Pink
    "#00ffff", // Cyan
    "#ff4500", // Orange Red
    "#32cd32", // Lime Green
    "#ffff00", // Yellow
    "#ff1493", // Deep Pink
    "#00ff7f", // Spring Green
    "#1e90ff", // Dodger Blue
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

  function onlogoutClick() {
    localStorage.removeItem("token");
    setUser("");
  }

  return (
    <div className="w-full md:h-20 h-10 md:border-b border-b-2 border-blue-500">
      <div className=""></div>
      {/* Top Navbar */}
      <div className="w-full h-10 flex justify-between items-center px-2 md:px-2">
        <div className="h-[70%] w-[10%] hidden md:block">
          <img src="./logo2.jpg" alt="" className="h-full w-full rounded-md" />
        </div>

        {/* ecclipse */}
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
            <PopupLogin>
              <FaUser />
            </PopupLogin>
          </div>
        </div>
        {/* Desktop Icons */}
        <div className=" hidden md:flex items-center gap-4">
          <FaWhatsapp className="text-xl text-green-500" />
          <MdOutlineComputer className="text-xl text-red-500" />

          <MdDateRange className="text-xl text-yellow-400" />
          <span className="text-neutral-400">{now.toLocaleString()}</span>
          <div className="flex bg-gradient-to-b gap-1 cursor-pointer from-neutral-700 to-neutral-800 p-1 rounded text-white justify-center items-center">
            <IoIosLogOut />
            Girls
          </div>
          <PopupLogin>
            <div
              className={`flex bg-gradient-to-r gap-1 from-blue-800 to-blue-950 p-1 rounded text-white justify-center items-center ${
                user && "cursor-not-allowed"
              } `}
            >
              <FaUser />

              {user ? user : "login"}
            </div>
          </PopupLogin>
          {user && (
            <div
              onClick={onlogoutClick}
              className="flex bg-gradient-to-r cursor-pointer from-red-800 to-red-950 p-1 rounded text-white justify-center items-center"
            >
              <IoIosLogOut />
              logout
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {menuOpen && (
        <div className="md:hidden absolute top-11 left-0 w-full bg-neutral-800 shadow-lg p-4">
          <div className=" grid grid-cols-3 gap-3">
            {data.map((ele, index) => {
              const glowingColor = colors[index % colors.length];
              return (
                <div className="bg-neutral-900 h-40 flex flex-col justify-center items-center gap-3 rounded-lg shadow-lg">
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

      <div className=" hidden md:flex w-full h-10 text-xs  items-center gap-6 justify-center ">
        {data.map((ele) => (
          <div className="flex items-center gap-2 cursor-pointer ">
            <span className="text-neutral-400 bg-neutral-800 rounded p-1">
              {<ele.icons />}
            </span>
            <span className="font-semibold text-white hover:text-red-500">
              {ele.name.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nav;
