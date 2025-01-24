import { useState } from "react";
import { mainState } from "../../context/mainContext";

const GamesScreen = () => {
  const { showPopup, setShowPopup } = mainState();

  return (
    <div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-neutral-800 p-2 rounded-lg shadow-lg w-[90%] h-[90%] flex flex-col  ">
            <div className="flex-1 bg-white">
              <iframe
                src="https://memorychan.netlify.app/"
                title="Browser"
                className="w-full h-full rounded-md"
              ></iframe>
            </div>

            <button
              onClick={() => setShowPopup(false)}
              className="absolute  bg-red-500 font-bold text-white px-2  rounded-full hover:bg-red-600 transition self-end"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamesScreen;
