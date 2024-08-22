const Search = ({ className }) => {
  const classes = `max-w-96 rounded-full bg-green-100 px-4 py-1 text-sm font-light text-green-900 outline-0 ring-green-400 ring-offset-2 ring-offset-green-100 transition-all focus:py-1 focus:ring-2 focus:ring-offset-2 focus:placeholder-transparent transition-all ${className ? className : ""}`;

  return (
    <input
      className={classes}
      placeholder="&#128270; search"
    />
  );
};

export default Search;
