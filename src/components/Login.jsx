import { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { loginData } from "../../helpers/logindata";
import { mainState } from "../../context/mainContext";
import { FaAt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PopupLogin = ({ children }) => {
  const { isOpen, setIsOpen } = mainState();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [invalid, setInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  let { user, setUser } = mainState();
  let data = loginData;
  let nav = useNavigate();

  function clearData() {
    setFormData({ username: "", password: "" });
    setInvalid(false);
  }

  const togglePopup = () => {
    if (!user) {
      setIsOpen(true);
    } else {
      nav("/profile");
    }
  };

  const closPopUp = () => {
    setIsOpen(false);
    clearData();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    let login = data.filter((ele) => {
      return ele.name == formData.username && ele.password == formData.password;
    });
    if (login.length > 0) {
      localStorage.setItem("token", formData.username);
      setUser(formData.username);
      setInvalid(false);
      setIsOpen(false);
      clearData();
    } else {
      setInvalid(true);
    }
  };

  function onSignupClick() {
    setShowLogin(true);
  }
  function onLoginClick() {
    setShowLogin(false);
  }

  return (
    <div className="flex items-center justify-center bg-black ">
      <button onClick={togglePopup}>{children}</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10">
          <div className="bg-neutral-900 text-white  rounded-lg  h-auto shadow-lg w-full max-w-xl  relative  md:flex">
            <div className=" w-[40%] hidden md:block">
              <img
                src="./loginImage.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" md:w-[60%] ">
              <div className=" flex gap-5 border-b border-b-neutral-700 px-4  mb-5">
                <h2
                  onClick={onSignupClick}
                  className={`relative font-semibold text-center ${
                    showLogin &&
                    "border-b-2 border-[#09a9d9] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#09a9d9] after:blur-[4px] after:animate-pulse"
                  } cursor-pointer py-3 ${
                    !showLogin ? "text-neutral-600" : "text-white"
                  }`}
                >
                  Sign Up
                </h2>

                <h2
                  onClick={onLoginClick}
                  className={`relative font-semibold text-center ${
                    !showLogin &&
                    "border-b-2 border-[#09a9d9] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#09a9d9] after:blur-[4px] after:animate-pulse"
                  } cursor-pointer py-3 ${
                    showLogin ? "text-neutral-600" : "text-white"
                  }`}
                >
                  Login
                </h2>
              </div>
              <div className=" h-[370px] px-4">
                {showLogin ? (
                  // Sign up page ******************************************************************
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username Field */}
                    <div className="relative">
                      <label
                        htmlFor="username"
                        className="block text-neutral-300 mb-1 text-xs"
                      >
                        USERNAME
                      </label>
                      <FaUser className="absolute left-3 top-9 text-neutral-500" />
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-4 bg-neutral-800 border border-neutral-700  focus:ring-1 focus:ring-[#09a9d9] outline-none text-xs"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-neutral-300   mb-1 text-xs"
                      >
                        EMAIL OR PHONE
                      </label>
                      <FaAt className="absolute left-3 top-9 text-neutral-500" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@google.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-4 bg-neutral-800 border border-neutral-700  focus:ring-1 focus:ring-[#09a9d9] outline-none text-xs"
                        required
                      />
                    </div>

                    {/* Password Field */}
                    <div className="relative ">
                      <label
                        htmlFor="password"
                        className="block text-neutral-300  mb-1 text-xs"
                      >
                        PASSWORD
                      </label>
                      <FaLock className="absolute left-3 top-9 text-neutral-500" />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-10 py-4 bg-neutral-800 border border-neutral-700  focus:ring-1 focus:ring-[#09a9d9] outline-none text-xs"
                        required
                      />
                      <span
                        className="absolute right-3 top-9 cursor-pointer text-gray-400 hover:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>

                    <p className="text-[11px] text-neutral-500 ">
                      This site is protected by recapta Google privacy policy
                      and terms of service
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-2 text-black font-semibold bg-[#09a9d9] hover:bg-purple-700  shadow-md transition-all"
                    >
                      START PLAYING
                    </button>
                  </form>
                ) : (
                  // For login page ************************************************************
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <label
                        htmlFor="username"
                        className="block text-neutral-300 mb-1 text-xs"
                      >
                        USERNAME
                      </label>
                      <FaUser className="absolute left-3 top-9 text-neutral-500" />
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-4 bg-neutral-800 border border-neutral-700  focus:ring-1 focus:ring-[#09a9d9] outline-none text-xs"
                        required
                      />
                    </div>
                    <div className="relative ">
                      <label
                        htmlFor="password"
                        className="block text-neutral-300  mb-1 text-xs"
                      >
                        PASSWORD
                      </label>
                      <FaLock className="absolute left-3 top-9 text-neutral-500" />
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full pl-10 pr-10 py-4 bg-neutral-800 border border-neutral-700  focus:ring-1 focus:ring-[#09a9d9] outline-none text-xs"
                        required
                      />
                      <span
                        className="absolute right-3 top-9 cursor-pointer text-gray-400 hover:text-white"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </div>

                    {invalid && (
                      <span className="text-red-500">Invalid Cred!!</span>
                    )}

                    <button
                      type="submit"
                      className="w-full py-2 text-black font-semibold bg-[#09a9d9] hover:bg-purple-700  shadow-md transition-all"
                    >
                      Login
                    </button>
                  </form>
                )}
              </div>
              <button
                onClick={closPopUp}
                className="absolute top-2 right-4 text-gray-400 hover:text-white text-xl"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupLogin;
