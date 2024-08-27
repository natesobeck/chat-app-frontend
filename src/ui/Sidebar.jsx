import ChatList from "../features/Chats/ChatList";
import Search from "../features/Chats/Search";
import Button from "./Button";
import SidebarFooter from "./SidebarFooter";
import { CiSettings } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="relative flex h-full w-80 flex-grow flex-col gap-3 bg-green-300 p-4">
      <Search />
      <ChatList />
      <SidebarFooter className="absolute bottom-4 right-0 flex w-full justify-around border-t border-green-200 pt-4">
        <Link>
          <CiSettings className="rounded-full bg-green-200 fill-green-400 text-[50px] hover:bg-green-400 hover:fill-green-200" />
        </Link>
        <Link>
          <CgProfile className="rounded-full bg-green-200 p-1 text-[50px] text-green-400 hover:bg-green-400 hover:text-green-200" />
        </Link>
      </SidebarFooter>
    </div>
  );
};

export default Sidebar;
