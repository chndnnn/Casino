import MainContextProvider from "../context/mainContext";
import Home from "./Screens/Home";

function App() {
  return (
    <MainContextProvider>
      <div className="min-h-screen bg-black">
        <Home />
      </div>
    </MainContextProvider>
  );
}

export default App;
