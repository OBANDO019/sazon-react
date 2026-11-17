import { Link, NavLink } from "react-router-dom";
import { modulos } from "../../../data/modulos";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.topbar}>
      <div className={`contenedor ${styles.interno}`}>
        <Link className={styles.marca} to="/">Sazón</Link>

        <nav className={styles.navegacion} aria-label="Módulos">
          {modulos.filter((m) => m.enNavbar).map((m) => (
            <NavLink
              key={m.id}
              to={m.ruta}
              className={({ isActive }) => (isActive ? styles.activo : undefined)}
            >
              {m.titulo}
            </NavLink>
          ))}
        </nav>

        <div className={styles.acciones}>
          <Link className={`${styles.btn} ${styles.secundario}`} to="/usuarios#login">Iniciar sesión</Link>
          <Link className={`${styles.btn} ${styles.primario}`} to="/usuarios#registro">Regístrese</Link>
        </div>
      </div>
    </header>
  );
}
