const Button = ({ type, className, children }) => {
  const types = 
    {
      primary: "bg-green-400 px-4 py-2 rounded hover:bg-green-500 transition-all",
      secondary: ""
    }

  const classes = `${types[type]} ${className}`

  return (
    <button className={classes}>{children}</button>
  );
};

export default Button;
