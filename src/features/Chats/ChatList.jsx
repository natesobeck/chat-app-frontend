import { Link } from "react-router-dom";
import { chats } from "../../dummyData";

const ChatList = () => {
  return (
    <ul className="font-medium">
      {chats.map(chat => <li key={chat.chatId}>
        <Link to={`chats/${chat.chatId}`} className="p-2 uppercase text-green-900 hover:bg-green-200 transition-all hover:cursor-pointer rounded-lg">{chat.chatId}</Link>
      </li>)}

    </ul>
  );
};

export default ChatList;
