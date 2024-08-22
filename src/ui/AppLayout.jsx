import ChatLayout from "../features/Chats/ChatLayout";
import ChatInput from "../features/Chats/ChatInput";
import ChatMessages from "../features/Chats/ChatMessages";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <main className="flex flex-col h-dvh">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <ChatLayout>
          <ChatMessages />
          <ChatInput />
        </ChatLayout>
      </div>
    </main>
  );
};

export default AppLayout;
