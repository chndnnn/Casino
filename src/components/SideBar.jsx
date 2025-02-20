import { RiAdminFill } from "react-icons/ri";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { IoTimerSharp } from "react-icons/io5";
import { IoGiftSharp } from "react-icons/io5";
import { BsBox2Fill } from "react-icons/bs";
import { FaMoneyCheckAlt } from "react-icons/fa";

import { IoKeySharp } from "react-icons/io5";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { mainState } from "../../context/mainContext";
import { useNavigate } from "react-router-dom";

const SideBar = ({ setScreenName, screenName, setIsSidebarOpen }) => {
  const data = [
    { name: "Account", logo: <RiAdminFill /> },
    { name: "Deposit", logo: <FaPlusCircle /> },
    { name: "Withdraw", logo: <FaCircleMinus /> },
    { name: "Bonus", logo: <IoGiftSharp /> },
    { name: "Game History", logo: <BsBox2Fill /> },
    { name: "Finance History", logo: <FaMoneyCheckAlt /> },
    { name: "Session History", logo: <IoTimerSharp /> },
    { name: "Security", logo: <IoKeySharp /> },
    { name: "Logout", logo: <RiLogoutCircleRFill /> },
  ];

  let { setUser, user } = mainState();
  let nav = useNavigate();

  function onMenuClick(name) {
    if (name == "Logout") {
      setUser("");
      localStorage.removeItem("token");
      nav("/");
    } else {
      setScreenName(name);
      setIsSidebarOpen(false);
    }
  }

  return (
    <div className="flex h-full flex-col bg-black text-white">
      {/* Profile Section (Fixed Height) */}
      <div className="h-24 flex items-center justify-center  mt-4">
        <img
          alt="User"
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="size-16 md:size-20 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="text-blue-100 font-medium uppercase">{user}</p>
          <p className="text-xs text-gray-500 uppercase">CCDC</p>
          <p className="text-xs text-gray-500 uppercase">000 TRY</p>
        </div>
      </div>

      <div className="flex flex-1  flex-col gap-4 overflow-y-auto mt-7">
        <div className=" md:w-[90%]  h-full  ml-auto">
          {data.map((item) => (
            <span
              key={item}
              className={` flex items-center gap-5 justify-end ${
                screenName == item.name && "bg-[#09a9d9]"
              } p-2 md:px-14  uppercase cursor-pointer hover:scale-95 font-semibold`}
              onClick={() => onMenuClick(item.name)}
            >
              {item.name}
              {item.logo}
              {/* <RiAdminFill /> */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
