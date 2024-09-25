import { Outlet } from "react-router-dom";
import Chat from "../features/Chats/Chat";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <main className="flex h-dvh flex-col">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <div className="flex w-full h-full">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default AppLayout;
