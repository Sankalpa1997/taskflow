import styles from "./header.module.css";
import taskflowlogo from "../assets/taskflow.png";
export default function Header() {
  return (
    <div className={`${styles.header} container`}>
      <div className={styles.headerLogoWrapper}>
        <img
          src={taskflowlogo}
          alt="TaskFlow Logo"
          className={styles.headerLogo}
        />
        <h1 className="text-green-primary">TaskFlow</h1>
      </div>
      <h4 className="text-green-primary">
        Type your list item & just hit 'Add'.
      </h4>
    </div>
  );
}
