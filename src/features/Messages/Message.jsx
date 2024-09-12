const Message = ({ message }) => {
  const senderName = message.senderId === 101 ? "Bob" : "Sally";

  function addMarks(marks, text) {
    let wrappedText = text;

    marks.forEach((mark) => {
      switch (mark.type) {
        case "bold":
          wrappedText = <strong>{wrappedText}</strong>;
          break;
        case "italic":
          wrappedText = <em>{wrappedText}</em>;
          break;
        case "code":
          wrappedText = <code>{wrappedText}</code>;
          break;
        default:
          break;
      }
    });

    return wrappedText;
  }

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

  return (
    <section className="">
      <h3 className="p-1 text-sm text-green-950 bg-green-100">
        <strong>{senderName}</strong> at{" "}
        <span className="italic">
          {new Date(message.timeStamp).toLocaleTimeString()}
        </span>
      </h3>
      <div className="p-2 bg-green-50">{flattenMessage(message.content)}</div>
    </section>
  );
};

export default Message;
