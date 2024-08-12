import Conversation from "../features/Chats/Chat";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <Conversation />
      </div>
    </main>
  );
};

export default AppLayout;
