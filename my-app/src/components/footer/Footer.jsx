import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>VooPROGue</div>
      <div className={styles.text}>
        VooPROGue creative thoughts agency © all rights reserved.
      </div>
    </div>
  );
};

export default Footer;
