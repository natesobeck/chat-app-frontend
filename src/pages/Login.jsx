import Logo from "../ui/Logo";

const Login = () => {
  return (
    <main className="flex h-dvh flex-col gap-12 items-center justify-center bg-green-300 text-green-950">
      <Logo />
      <div className="flex flex-col items-center justify-center gap-8 p-8 bg-green-200 rounded-lg">
        <h1 className="font-medium text-[2rem] font-header">Log In</h1>
        <form action="" className="flex flex-col gap-2 font-light text-md">
          <div className="flex justify-between gap-4 items-center">
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" autoComplete="off" className="rounded outline-none px-2 py-1 focus:ring-2 ring-green-400"/>
          </div>
          <div className="flex justify-between gap-4 items-center">
            <label htmlFor="password">Password: </label>
            <input type="text"  id="password" autoComplete="off" className="rounded outline-none px-2 py-1 focus:ring-2 ring-green-400"/>
          </div>
        </form>
        <p className="font-medium">Don&apos;t have an account? Sign up.</p>
      </div>
    </main>
  );
};

export default Login;
