import { games } from "../../helpers/Data";
import Carousal from "../components/Carousel";
import Footer from "../components/Footer";
import GamesList from "../components/GamesList";
import GamesScreen from "../components/GamesScreen";
import PopupLogin from "../components/Login";
import Nav from "../components/Nav";
import PromAndLastWinner from "../components/PromAndLastWinner";

const Home = () => {
  let data = games;
  return (
    <div className=" p-1">
      <Nav />
      <div className="p-2 h-60 overflow-hidden">
        {/* <img src="./Cover.jpg" alt="" className="w-full h-full" /> */}
        <Carousal />
      </div>
      <div className="p-2">
        <div className="h-48">
          <GamesList name={"Top Games"} data={data} />
        </div>
        <div className="h-48">
          <GamesList name={"Jackpot Play"} data={data} />
        </div>
        <div className="h-96 border border-blue-500 rounded p-2 bg-blue-950">
          <GamesList name={"Live Games"} data={data} show={true} />
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-800 via-neutral-900 to-black">
        <PromAndLastWinner />
      </div>
      <div className="h-96 border rounded p-2 bg-black">
        <GamesList name={"Casino Oyu"} data={data} show={true} />
      </div>
      <GamesScreen />
      <Footer />
    </div>
  );
};

export default Home;
