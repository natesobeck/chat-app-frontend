const ChatLayout = ({children}) => {
  return (
    <div className="bg-green-50 font-light w-full grid grid-rows-[auto_240px] row">
      {children}
    </div>
  );
};

export default ChatLayout;
