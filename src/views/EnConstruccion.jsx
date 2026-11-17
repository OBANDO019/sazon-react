import styles from "./Vista.module.css";

export default function EnConstruccion({ titulo }) {
  return (
    <section className={styles.pagina}>
      <div className={styles.bloque}>
        <h1>{titulo}</h1>
        <p>Este módulo está en construcción.</p>
      </div>
    </section>
  );
}
