import { useState, useEffect } from "react";
import styles from "./footer.module.css";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);
  return (
    <div className={`container ${styles.footer}`}>
      © {year} Sankalpa Senevirathne
    </div>
  );
}
