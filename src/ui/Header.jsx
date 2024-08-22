import Search from "../features/Chats/Search";
import Logo from "./Logo";

const Header = () => {
  return (
    <nav className="flex h-16 items-center bg-green-400 p-2">
      <Logo className="absolute right-2 top-2 h-12" />
      <Search className="mx-auto focus:px-8" />
    </nav>
  );
};

export default Header;
