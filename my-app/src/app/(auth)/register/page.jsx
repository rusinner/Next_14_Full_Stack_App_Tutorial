import styles from "./register.module.css";
import { register } from "@/lib/actions";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form className={styles.form} action={register}>
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="email" name="email" />
          <input type="text" placeholder="password" name="password" />
          <input
            type="text"
            placeholder="confirm password"
            name="confirmPassword"
          />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
