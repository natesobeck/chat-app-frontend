import Tiptap from "../../ui/TipTap";

const ChatInput = () => {
  return (
    <section className="h-40 w-full rounded-md border border-green-400 bg-green-300 p-2">
      {/* <ChatInputOptions />
      <textarea
        name=""
        placeholder="Type something..."
        className="w-full resize-none rounded-md bg-green-50 p-2 placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-green-200 text-green-950"
      ></textarea> */}
      <Tiptap />
    </section>
  );
};

export default ChatInput;
