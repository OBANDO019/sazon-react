import { marcas, categorias } from "../../../data/productos";
import styles from "./ProductCard.module.css";

export default function ProductCard({ producto }) {
  const precio = producto.precioRef.toLocaleString("es-CO");
  return (
    <article className={styles.tarjeta}>
      <span className={styles.marca}>{marcas[producto.idMarca]}</span>
      <h3>{producto.nombreProducto}</h3>
      <p className={styles.categoria}>{categorias[producto.idCategoria]}</p>
      <p className={styles.precio}>$ {precio}</p>
    </article>
  );
}
