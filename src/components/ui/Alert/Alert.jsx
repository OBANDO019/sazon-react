import styles from "./Alert.module.css";

export default function Alert({ tipo = "estado", children }) {
  if (!children) return null;
  const esError = tipo === "error";
  return (
    <p className={`${styles.alerta} ${esError ? styles.error : ""}`} role={esError ? "alert" : "status"}>
      {children}
    </p>
  );
}
