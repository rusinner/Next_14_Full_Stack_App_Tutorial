import Image from "next/image";
import styles from "./singlePost.module.css";
const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/post.jpg" fill alt="Post" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/post.jpg"
            width={50}
            height={50}
            alt="Post"
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Username</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          pariatur odio eum nam alias provident libero quas tempore, aperiam vel
          nesciunt voluptatum repudiandae id, laborum recusandae praesentium ab
          tempora ex iusto distinctio quod cum sint autem. Sint, id accusantium
          quasi minus cum velit itaque inventore distinctio libero, est pariatur
          saepe.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
