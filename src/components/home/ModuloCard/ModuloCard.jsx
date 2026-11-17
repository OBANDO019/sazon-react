import { Link } from "react-router-dom";
import styles from "./ModuloCard.module.css";

export default function ModuloCard({ modulo }) {
  return (
    <Link className={styles.tarjeta} style={{ borderLeftColor: modulo.color }} to={modulo.ruta}>
      <h2>{modulo.titulo}</h2>
      <p>{modulo.descripcion}</p>
    </Link>
  );
}
