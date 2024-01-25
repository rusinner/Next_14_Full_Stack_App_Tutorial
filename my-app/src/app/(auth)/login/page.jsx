import { handleGitHubLogin, login } from "@/lib/actions";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGitHubLogin}>
        <button>Login with GitHub</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="password" name="password" />
        <button>Login with credentials</button>
      </form>
    </div>
  );
};

export default LoginPage;
