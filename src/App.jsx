import MainContextProvider from "../context/mainContext";
import Home from "./Screens/Home";
import ProfileScreen from "./Screens/profileScreen";

function App() {
  return (
    <MainContextProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#050008] to-[#00456E]">
        {/* <Home /> */}
        <ProfileScreen />
      </div>
    </MainContextProvider>
  );
}

export default App;
