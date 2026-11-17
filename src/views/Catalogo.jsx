import { useState } from "react";
import ProductCard from "../components/catalogo/ProductCard/ProductCard";
import { productosIniciales } from "../data/productos";
import styles from "./Vista.module.css";

export default function Catalogo() {
  const [productos] = useState(productosIniciales);
  return (
    <section className={styles.pagina}>
      <div className={styles.bloque}>
        <h1>Catálogo</h1>
        <p>Productos de las marcas Grupo Nutresa.</p>
      </div>
      <div className={styles.grid}>
        {productos.map((p) => <ProductCard key={p.idProducto} producto={p} />)}
      </div>
    </section>
  );
}
