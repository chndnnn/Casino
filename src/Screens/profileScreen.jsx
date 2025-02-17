import { useState } from "react";
import Nav from "../components/Nav";
import Accounts from "../components/profile/Accounts";
import SideBar from "../components/SideBar";
import Deposite from "../components/profile/Desposite";
import WithDraw from "../components/profile/Withdraw";
import GameHistory from "../components/profile/GameHistory";
import FinancialHistory from "../components/profile/FinancialHistory";

const ProfileScreen = () => {
  let [screenName, setScreenName] = useState("Account");

  return (
    <div className="h-screen bg-black flex flex-col p-1 ">
      <Nav />

      <div className="flex overflow-y-scroll border border-green-500 p-2">
        <div className="w-[30%]">
          <SideBar setScreenName={setScreenName} screenName={screenName} />
        </div>
        <div className="w-[70%] overflow-y-scroll bg-neutral-900 text-white p-6 ">
          {screenName == "Account" && <Accounts />}
          {screenName == "Deposit" && <Deposite />}
          {screenName == "Withdraw" && <WithDraw />}
          {screenName == "Game History" && <GameHistory />}
          {screenName == "Finance History" && <FinancialHistory />}
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
