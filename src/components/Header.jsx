import styles from "./header.module.css";
export default function Header() {
  return (
    <div className={`${styles.header} container`}>
      <h1 className="text-green-primary">TaskFlow 🚀</h1>
      <h4 className="text-green-primary">Type your list item & just hit 'Add'.</h4>
    </div>
  );
}
