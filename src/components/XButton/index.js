import styles from "./xbutton.module.css";

const Xbutton = ({ onClick }) => {
  return (
    <div className={styles.circle} onClick={onClick}>
      <span className={styles.theX}>&#10006;</span>
    </div>
  );
};

export { Xbutton };
