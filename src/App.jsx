import MainContextProvider from "../context/mainContext";
import Home from "./Screens/Home";

function App() {
  return (
    <MainContextProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#050008] to-[#00456E]">
        <Home />
      </div>
    </MainContextProvider>
  );
}

export default App;
