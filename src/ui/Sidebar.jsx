import ChatList from "../features/Chats/ChatList";
import Search from "../features/Chats/Search";
import Button from "./Button";
import SidebarFooter from "./SidebarFooter";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div className="flex h-full w-80 flex-grow flex-col gap-3 bg-green-300 p-4 relative">
      <Search />
      <ChatList />
      <SidebarFooter className="flex w-full justify-around absolute bottom-4 right-2 border-t border-green-400">
        <Button type="secondary">
          <CiSettings className="text-[50px] fill-green-400"/>
        </Button>
        <Button type="secondary">
          <CgProfile className="text-[40px] text-green-400"/>
        </Button>
      </SidebarFooter>
    </div>
  );
};

export default Sidebar;
