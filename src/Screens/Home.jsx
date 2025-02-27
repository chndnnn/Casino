import { useEffect, useState } from "react";
import { games, Poker, jackpot, liveGames, OyuGames } from "../../helpers/Data";
import Carousal from "../components/Carousel";
import Footer from "../components/Footer";
import GamesList from "../components/GamesList";
import GamesScreen from "../components/GamesScreen";
import Nav from "../components/Nav";
import PromAndLastWinner from "../components/PromAndLastWinner";

const Home = () => {
  let data = games;
  let JackpotData = jackpot;
  let liveGameData = liveGames;
  let Oyu_Games = OyuGames;
  const [dynamicHeight, setDynamicHeight] = useState("md:h-[200px]");
  const [dynamicHeightLive, setDynamicHeightLive] = useState("md:h-[200px]");

  useEffect(() => {
    if (window.innerHeight > 650) {
      setDynamicHeight("md:h-[320px]");
      setDynamicHeightLive("md:h-[600px]");
    } else {
      setDynamicHeight("md:h-[260px]");
      setDynamicHeightLive("md:h-[520px]");
    }
  }, []);

  return (
    <div className=" md:p-1">
      <Nav />
      <div className="p-5 mb-2">
        <Carousal />
      </div>
      <div className="md:p-5 p-1">
        <div className="p-2 shadow-[-4px_4px_6px_rgba(0,20,255,0.2)]  md:mb-10 ">
          <div className={`h-48 ${dynamicHeight} `}>
            <GamesList name={"Top Games"} data={data} />
          </div>
          <div className={`h-48 ${dynamicHeight} md:mb-3 `}>
            <GamesList name={"Jackpot Play"} data={JackpotData} />
          </div>
        </div>
        <div
          className={`h-[360px] mb-3 ${dynamicHeightLive} border border-neutral-500 rounded p-2 bg-[#16122D] md:mb-10`}
        >
          <GamesList name={"Live Casino"} data={liveGameData} show={true} />
        </div>

        <div className="p-1 md:mb-7">
          <PromAndLastWinner />
        </div>
        <div className="h-96 md:h-[470px] shadow-[-4px_4px_6px_rgba(0,20,255,0.2)]  rounded p-2 bg-black md:mb-14">
          <GamesList
            name={"Casino Oyu"}
            data={Oyu_Games}
            show={true}
            size={true}
            height="170"
          />
        </div>
        <GamesScreen />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
