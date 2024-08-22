import Button from "../ui/Button";
import Logo from "../ui/Logo";

const Login = () => {
  return (
    <main className="bg-sun-tornado flex h-dvh flex-col items-center justify-center gap-12 bg-cover text-green-950">
      <Logo />
      <div className="flex flex-col items-center justify-center gap-8 rounded-lg bg-green-200 p-8">
        <h1 className="font-header text-[2rem]">Log In</h1>
        <form action="" className="text-md flex flex-col gap-2 font-light">
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              className="rounded px-2 py-1 outline-none ring-green-400 transition-all focus:ring-2 focus:ring-offset-2"
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="password">Password: </label>
            <input
              type="text"
              id="password"
              autoComplete="off"
              className="rounded px-2 py-1 outline-none ring-green-400 transition-all focus:ring-2 focus:ring-offset-2"
            />
          </div>
          <Button type="primary" className="mt-2 font-medium text-green-50">Log In</Button>
        </form>
        <p className="font-medium">
          Don&apos;t have an account?{" "}
          <span className="font-medium">Sign up.</span>
        </p>
      </div>
    </main>
  );
};

export default Login;
