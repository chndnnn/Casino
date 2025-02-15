import Nav from "../components/Nav";
import Accounts from "../components/profile/Accounts";
import SideBar from "../components/SideBar";

const ProfileScreen = () => {
  return (
    <div className="h-screen flex flex-col">
      <Nav />

      <div className="flex ">
        <div className="w-[25%]">
          <SideBar />
        </div>
        <div className="w-[75%] bg-neutral-900 text-white p-6">
          <Accounts />
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
