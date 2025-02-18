import MainContextProvider from "../context/mainContext";
import Home from "./Screens/Home";
import ProfileScreen from "./Screens/profileScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <ProfileScreen />,
  },
]);

function App() {
  return (
    <MainContextProvider>
      <div className="min-h-screen bg-gradient-to-b from-[#050008] to-[#00456E]">
        <RouterProvider router={router} />
      </div>
    </MainContextProvider>
  );
}

export default App;
