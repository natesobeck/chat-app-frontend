const SearchChat = ({className}) => {
  const classes = `max-w-96 rounded-full bg-green-100 px-4 py-1 font-light text-green-900 text-sm ${className ? className : ""}`

  return (
    <h1 className={classes}>
      This is a search component
    </h1>
  );
};

export default SearchChat;
