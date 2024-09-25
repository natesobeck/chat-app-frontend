// import { chat } from "../../dummyData";
import Message from "../Messages/Message";

const ChatMessages = ({chat}) => {
  return <section className="bg-green-50">

    {chat.messages.map(message => <Message message={message} key={message.messageId} />)}
  </section>;
};

export default ChatMessages;
