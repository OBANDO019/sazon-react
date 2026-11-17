import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.etiqueta}>Recetario digital · Front I</p>
      <h1>Sazón</h1>
      <p className={styles.texto}>
        Espacio base para construir los módulos del proyecto integrador, ahora con React.
      </p>
    </section>
  );
}
