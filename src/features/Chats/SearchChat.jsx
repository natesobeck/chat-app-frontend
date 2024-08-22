const SearchChat = ({ className }) => {
  const classes = `max-w-96 rounded-full bg-green-100 px-4 py-1 text-sm font-light text-green-900 outline-0 ring-green-600 ring-offset-2 ring-offset-green-100 transition-all focus:py-1 focus:ring-2 ${className ? className : ""}`;

  return (
    <input
      className={classes}
      placeholder="search"
    />
  );
};

export default SearchChat;
