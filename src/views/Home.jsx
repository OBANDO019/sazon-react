import Hero from "../components/home/Hero/Hero";
import ModuloCard from "../components/home/ModuloCard/ModuloCard";
import { modulos } from "../data/modulos";
import styles from "./Vista.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <section className={styles.gridHome} aria-label="Acceso a módulos">
        {modulos.map((m) => <ModuloCard key={m.id} modulo={m} />)}
      </section>
    </>
  );
}
