import { IoKeySharp } from "react-icons/io5";
    
const Security = () => {
  return (
    <div className=" p-4">
      {/* Header */}
      <div className="flex items-center  text-2xl gap-5 p-2">
        <IoKeySharp />
        Security
      </div>

      {/* Form Fields */}
      <div className="mt-4 space-y-4 px-2 ">
        <span className="text-xl text-neutral-500">Update Password</span>
        <div className=" px-4 mt-5">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-neutral-400">
              Current Password
            </label>
            <input
              type="text"
              className="w-full p-2 border bg-black border-[#09a9d9] rounded"
            />
          </div>
          {/* Surname */}
          <div className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-neutral-400">
              New Password
            </label>
            <input
              type="text"
              className="w-full p-2 border bg-black border-[#09a9d9] rounded"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-sm font-medium  mb-1 text-neutral-400">
              Retype New Password
            </label>
            <input
              type="email"
              className="w-full p-2 border bg-black border-[#09a9d9]  rounded"
            />
          </div>
          <button className="w-full bg-[#09a9d9] mt-4 py-2 rounded">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;
