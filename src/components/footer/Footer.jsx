import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>afeezdev</div>
      <div className={styles.text}>
        Afeezdev © 2024.
      </div>
    </div>
  );
};

export default Footer;
