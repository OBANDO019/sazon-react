import styles from "./Button.module.css";

export default function Button({ variante = "primario", type = "button", children, ...resto }) {
  return (
    <button type={type} className={`${styles.btn} ${styles[variante]}`} {...resto}>
      {children}
    </button>
  );
}
