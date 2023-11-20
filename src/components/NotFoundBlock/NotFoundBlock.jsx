import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Not Found</h1>
      <p className={styles.description}>Unfortunately this page not found.</p>
    </div>
  );
};
