import SearchChat from "../features/Chats/SearchChat";
import Logo from "./Logo";

const Header = () => {
  return <h1 className="bg-green-400 p-2 flex items-center h-16"><Logo /><SearchChat className="mx-auto"/></h1>;
};

export default Header;
