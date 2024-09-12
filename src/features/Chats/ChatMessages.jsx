import { chat } from "../../dummyData";
import Message from "../Messages/Message";

const ChatMessages = () => {
  return <section className="bg-green-100">
    {chat.messages.map(message => <Message message={message} key={message.messageId} />)}
  </section>;
};

export default ChatMessages;
