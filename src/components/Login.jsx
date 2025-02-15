import { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { loginData } from "../../helpers/logindata";
import { mainState } from "../../context/mainContext";

const PopupLogin = ({ children }) => {
  const { isOpen, setIsOpen } = mainState();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [invalid, setInvalid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  let { user, setUser } = mainState();
  let data = loginData;

  function clearData() {
    setFormData({ username: "", password: "" });
    setInvalid(false);
  }

  const togglePopup = () => {
    if (!user) {
      setIsOpen(true);
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

  return (
    <div className="flex items-center justify-center bg-black ">
      <button onClick={togglePopup}>{children}</button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10">
          <div className="bg-neutral-900 text-white p-8 rounded-lg shadow-lg w-full max-w-sm relative">
            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 bg-neutral-800 border border-neutral-700 rounded focus:ring-2 focus:ring-purple-600 outline-none"
                  required
                />
              </div>

              <div className="relative">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-2 bg-neutral-800 border border-neutral-700 rounded focus:ring-2 focus:ring-purple-600 outline-none"
                  required
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              {invalid && <span className="text-red-500">Invalid Cred!!</span>}

              <button
                type="submit"
                className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-md shadow-md transition-all"
              >
                Login
              </button>
            </form>

            <button
              onClick={closPopUp}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupLogin;
