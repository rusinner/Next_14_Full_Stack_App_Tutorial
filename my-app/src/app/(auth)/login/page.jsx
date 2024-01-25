import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";
import { handleGitHubLogin } from "@/lib/actions";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGitHubLogin}>
          <button className={styles.github}>Login with GitHub</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
