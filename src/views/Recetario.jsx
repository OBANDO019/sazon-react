import { useState } from "react";
import RecetaCard from "../components/recetario/RecetaCard/RecetaCard";
import { recetasIniciales } from "../data/recetas";
import styles from "./Vista.module.css";

export default function Recetario() {
  const [recetas] = useState(recetasIniciales);
  return (
    <section className={styles.pagina}>
      <div className={styles.bloque}>
        <h1>Recetario</h1>
        <p>Recetas con productos Nutresa.</p>
      </div>
      <div className={styles.grid}>
        {recetas.map((r) => <RecetaCard key={r.idReceta} receta={r} />)}
      </div>
    </section>
  );
}
