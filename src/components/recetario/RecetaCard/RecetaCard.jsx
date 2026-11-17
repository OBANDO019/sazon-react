import styles from "./RecetaCard.module.css";

export default function RecetaCard({ receta }) {
  return (
    <article className={styles.tarjeta}>
      <h3>{receta.nombreReceta}</h3>
      <p>{receta.porciones} porciones · {receta.minutos} min</p>
    </article>
  );
}
