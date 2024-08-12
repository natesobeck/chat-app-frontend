const message = {
  messageId: 1,
  chatId: 1,
  senderId: 1,
  content: {
    text: "This is the content of the message",
    attachments: []
  },
  isRead: false,
  reactions: {
    userId: 1,
    type: "happy"
  },
  replyTo: "",
  edited: false,
  deleted: false
}

const Message = () => {
  return <h1>This is a message component</h1>;
};

export default Message;
