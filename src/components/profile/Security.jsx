import { TbSettingsStar } from "react-icons/tb";

const Security = () => {
  return (
    <div className=" p-4">
      {/* Header */}
      <div className="flex items-center  text-2xl gap-5 p-2">
        <TbSettingsStar />
        Security
      </div>

      {/* Form Fields */}
      <div className="mt-4 space-y-4 px-2">
        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1 text-neutral-400">
            Name
          </label>
          <input
            type="text"
            className="w-full p-2 border bg-black border-[#09a9d9]"
          />
        </div>

        {/* Surname */}
        <div className="flex flex-col">
          <label className="text-sm font-medium mb-1 text-neutral-400">
            Surname
          </label>
          <input
            type="text"
            className="w-full p-2 border bg-black border-[#09a9d9] "
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium  mb-1 text-neutral-400">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 border bg-black border-[#09a9d9]"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-sm font-medium  mb-1 text-neutral-400">
            Phone
          </label>
          <input
            type="tel"
            className="w-full p-2 border bg-black border-[#09a9d9]"
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
