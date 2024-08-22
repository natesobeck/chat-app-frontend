import Chat from "../features/Chats/Chat";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <main className="flex flex-col h-dvh">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <Chat />
      </div>
    </main>
  );
};

export default AppLayout;
