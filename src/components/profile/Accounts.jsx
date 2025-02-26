import { TbSettingsStar } from "react-icons/tb";

const AccountSettings = () => {
  return (
    <div className=" p-4">
      <div className="flex items-center  text-2xl gap-5 p-2">
        <TbSettingsStar />
        ACCOUNT
      </div>
      <div className="mt-4 space-y-4 px-2 bg-[#0d181a] pb-16 pr-10">
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1 text-neutral-400">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 border bg-black border-blue-700"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1 text-neutral-400">
            Surname
          </label>
          <input
            type="text"
            className="w-full p-2 border bg-black border-blue-700 "
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium  mb-1 text-neutral-400">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 border bg-black border-blue-700"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium  mb-1 text-neutral-400">
            Phone
          </label>
          <input
            type="tel"
            className="w-full p-2 border bg-black border-blue-700"
          />
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
