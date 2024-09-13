const ChatLayout = ({children}) => {
  return (
    <div className="bg-green-50 font-light w-full grid grid-rows-[auto_160px] p-4">
      {children}
    </div>
  );
};

export default ChatLayout;
