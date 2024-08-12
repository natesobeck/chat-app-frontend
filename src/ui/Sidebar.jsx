import ConversationList from "../features/Chats/ChatList";
import SearchChat from "../features/Chats/SearchChat";

const Sidebar = () => {
  return (
    <div className="bg-green-300 flex h-dvh w-80 flex-col gap-3 border-r border-green-200 p-4">
      <SearchChat />
      <ConversationList />
    </div>
  );
};

export default Sidebar;
