import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { mainState } from "../../context/mainContext";

const DropDown = () => {
  const [show, setShow] = useState(false);
  const { user, setUser } = mainState();

  function onLogoutClick() {
    localStorage.removeItem("token");
    setUser("");
  }
  return (
    <div className="relative ">
      <div className="overflow-hidden rounded-md border ">
        <FaUser onClick={() => setShow(!show)} />
      </div>
      {show && (
        <div className="absolute flex flex-col justify-end end-[-10px] z-10 mt-2 w-fit px-2  rounded-md  border border-black rounded-tr-none bg-gradient-to-bl from-blue-900 to-blue-950 shadow-lg">
          <span className="p-1 text-yellow-400 ml-auto font-semibold">
            {user.toUpperCase()}
          </span>
          <span
            onClick={onLogoutClick}
            className="p-1 text-red-400 ml-auto font-semibold"
          >
            Logout
          </span>
        </div>
      )}
    </div>
  );
};

export default DropDown;
