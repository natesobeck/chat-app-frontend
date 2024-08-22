import SearchChat from "../features/Chats/SearchChat";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="flex h-16 items-center bg-green-400 p-2">
      <Logo className="h-12 absolute right-2 top-2"/>
      <SearchChat className="mx-auto" />
    </nav>
  );
};

export default Header;
