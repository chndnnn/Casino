import { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Accounts from "../components/profile/Accounts";
import SideBar from "../components/SideBar";
import Deposite from "../components/profile/Desposite";
import WithDraw from "../components/profile/Withdraw";
import GameHistory from "../components/profile/GameHistory";
import FinancialHistory from "../components/profile/FinancialHistory";
import Security from "../components/profile/Security";
import Session from "../components/profile/Session";
import Bonus from "../components/profile/Bonus";
import { mainState } from "../../context/mainContext";
import { useNavigate } from "react-router-dom";
import { GrDatabase } from "react-icons/gr";
import { FaWindowClose } from "react-icons/fa";

const ProfileScreen = () => {
  let [screenName, setScreenName] = useState("Account");
  let { user } = mainState();
  let nav = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user) {
      nav("/");
    }
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r from-[#082857] to-[#101618] flex flex-col">
      <Nav />
      <button
        className="md:hidden  ml-auto text-white p-2 m-2 bg-[#09a9d9] rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaWindowClose /> : <GrDatabase />}
      </button>

      <div className="flex flex-1 overflow-hidden ">
        <div
          className={`fixed md:relative top-0 left-0 h-full w-64 bg-black text-white  transition-transform duration-300 md:w-[30%] ${
            isSidebarOpen ? "translate-x-0 z-10" : "-translate-x-full"
          } md:translate-x-0`}
        >
          <SideBar
            setScreenName={setScreenName}
            screenName={screenName}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>
        <div className="flex-1 overflow-y-auto text-white p-4 md:p-6 ">
          {screenName === "Account" && <Accounts />}
          {screenName === "Deposit" && <Deposite />}
          {screenName === "Withdraw" && <WithDraw />}
          {screenName === "Game History" && <GameHistory />}
          {screenName === "Finance History" && <FinancialHistory />}
          {screenName === "Security" && <Security />}
          {screenName === "Session History" && <Session />}
          {screenName === "Bonus" && <Bonus />}
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
