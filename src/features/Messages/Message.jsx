// This function adds marks such as Italic and Bold to display to the final UI
function addMarks(marks, text) {
  let wrappedText = text;

  const markClasses = {
    code: "bg-slate-200 w-fit px-2 py-1 rounded-md text-sm"
  }

  marks.forEach((mark) => {
    switch (mark.type) {
      case "bold":
        wrappedText = <strong>{wrappedText}</strong>;
        break;
      case "italic":
        wrappedText = <em>{wrappedText}</em>;
        break;
      case "code":
        wrappedText = <code className={markClasses.code}>{wrappedText}</code>;
        break;
      default:
        break;
    }
  });

  return wrappedText;
}

// This function flattens and restitches the message content recieved from TipTap
function flattenMessage(content) {
  switch (content.type) {
    case "doc":
      return content.content.map((contentFragment) =>
        flattenMessage(contentFragment),
      );

    case "paragraph":
      return (
        <p>
          {content.content.map((contentFragment) =>
            flattenMessage(contentFragment),
          )}
        </p>
      );

    case "text":
      return addMarks(content.marks || [], content.text);

    default:
      return null;
  }
}

const Message = ({ message }) => {
  const senderName = message.senderId === 101 ? "Bob" : "Sally";

  return (
    <section className="border-b border-green-200 py-1 text-sm">
      <h3 className="px-1 text-green-950 bg-green-50">
        <strong className="font-semibold">{senderName}</strong>
        <span className="italic text-sm text-slate-400 pl-1 text-[11px]">
          {new Date(message.timeStamp).toLocaleTimeString()}
        </span>
      </h3>
      <div className="px-1 bg-green-50">{flattenMessage(message.content)}</div>
    </section>
  );
};

export default Message;
