const Logo = ({className}) => {
  return (
    <div>
      <img src="/logo.png" alt="Banter: do you want to go for a chat?" className={`rounded-full ${className}`}/>
    </div>
  );
};

export default Logo;
