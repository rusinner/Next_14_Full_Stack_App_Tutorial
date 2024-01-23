import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

// FETCH DATA USING API
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`
//   );

//   if (!res.ok) {
//     throw new Error("Error");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  // FETCH DATA USING API
  // const user = await getData(userId);

  // FETCH DATA WITHOUT USING API
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
};

export default PostUser;
