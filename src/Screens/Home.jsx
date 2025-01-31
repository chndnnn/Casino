import { games, Poker, jackpot, liveGames } from "../../helpers/Data";
import Carousal from "../components/Carousel";
import Footer from "../components/Footer";
import GamesList from "../components/GamesList";
import GamesScreen from "../components/GamesScreen";
import PopupLogin from "../components/Login";
import Nav from "../components/Nav";
import PromAndLastWinner from "../components/PromAndLastWinner";

const Home = () => {
  let data = games;
  let poker = Poker;
  let JackpotData = jackpot;
  let liveGameData = liveGames;
  return (
    <div className=" p-1 md:p-3">
      <Nav />
      {/* <div className="p-2 md:p-4 h-60 md:h-96"> */}
      <div className="p-5">
        {/* <img src="./Cover.jpg" alt="" className="w-full h-full" /> */}
        <Carousal />
      </div>
      <div className="p-2">
        <div className="h-48 md:h-60 ">
          <GamesList name={"Top Games"} data={data} />
        </div>
        <div className="h-48 md:h-60 md:mb-5">
          <GamesList name={"Jackpot Play"} data={JackpotData} />
        </div>
        <div className="h-96 md:h-[480px] border border-blue-500 rounded p-2 bg-blue-950">
          <GamesList name={"Live Games"} data={liveGameData} show={true} />
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-800 via-neutral-900 to-black">
        <PromAndLastWinner />
      </div>
      <div className="h-96 md:h-[480px] border rounded p-2 bg-black">
        <GamesList name={"Casino Oyu"} data={poker} show={true} />
      </div>
      <GamesScreen />
      <Footer />
    </div>
  );
};

export default Home;
