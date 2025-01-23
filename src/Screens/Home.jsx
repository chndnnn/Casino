import GamesList from "../components/GamesList";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <div className=" p-1">
      <Nav />
      <div className="p-2 h-60">
        <img src="./Cover.jpg" alt="" className="w-full h-full" />
      </div>
      <div className="p-2">
        <div className="h-44">
          <GamesList name={"Top Games"} />
        </div>
        <div className="h-44">
          <GamesList name={"Jackpot Play"} />
        </div>
        <div className="h-44">
          <GamesList name={"Jackpot Play"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
