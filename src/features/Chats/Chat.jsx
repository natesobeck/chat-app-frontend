import { useParams } from "react-router-dom";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";
import { chats } from "../../dummyData";

const Chat = () => {
  const {chatId} = useParams()
  let activeChat = chats.find(chat => chat.chatId === Number(chatId))

  return (
    <div className="bg-green-50 font-light w-full grid grid-rows-[auto_160px] p-4">
      <ChatMessages chat={activeChat}/>
      <ChatInput />
    </div>
  );
};

export default Chat;
