import { RiAdminFill } from "react-icons/ri";

const SideBar = () => {
  return (
    <div className="flex h-full flex-col border-e bg-black text-white">
      {/* Profile Section (Fixed Height) */}
      <div className="h-24 flex items-center justify-center ">
        <img
          alt="User"
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="size-16 rounded-full object-cover"
        />
        <div className="ml-3">
          <p className="text-sm font-medium uppercase">New Member</p>
          <p className="text-xs text-gray-500 uppercase">CCDC</p>
          <p className="text-xs text-gray-500 uppercase">000 TRY</p>
        </div>
      </div>

      <div className="flex flex-1  flex-col justify-start gap-4 overflow-y-auto">
        <div className=" w-[90%] ml-auto">
          {[
            "Account",
            "Deposit",
            "Withdraw",
            "Bonus",
            "Game History",
            "Finance History",
            "Session History",
            "Security",
            "Logout",
          ].map((item) => (
            <span
              key={item}
              className="flex items-center gap-5 justify-end hover:bg-[#09a9d9] p-2 px-14  uppercase cursor-pointer"
            >
              {item}
              <RiAdminFill />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
