import ConversationList from "../features/Chats/ChatList";
import SearchChat from "../features/Chats/SearchChat";

const Sidebar = () => {
  return (
    <div className="flex h-full w-80 flex-grow flex-col gap-3 border-r border-green-200 bg-green-300 p-4">
      <SearchChat />
      <ConversationList />
    </div>
  );
};

export default Sidebar;
