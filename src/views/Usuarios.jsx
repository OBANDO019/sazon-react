import { useState } from "react";
import UsuarioTabla from "../components/usuarios/UsuarioTabla/UsuarioTabla";
import Button from "../components/ui/Button/Button";
import Alert from "../components/ui/Alert/Alert";
import { usuariosIniciales } from "../data/usuarios";
import styles from "./Vista.module.css";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState(usuariosIniciales);
  const [mensaje, setMensaje] = useState("");

  const registrar = (e) => {
    e.preventDefault();
    const datos = new FormData(e.target);
    const mayor = usuarios.reduce((m, u) => Math.max(m, u.idUsuario), 0);
    setUsuarios([...usuarios, {
      idUsuario: mayor + 1,
      nombreUsuario: datos.get("nombreUsuario").trim(),
      correo: datos.get("correo").trim(),
      rol: datos.get("rol")
    }]);
    e.target.reset();
    setMensaje("Usuario registrado correctamente.");
  };

  return (
    <section className={styles.pagina}>
      <div className={styles.bloque}>
        <h1>Usuarios</h1>
        <p>Registro de usuarios con datos de ejemplo.</p>
        <Alert>{mensaje}</Alert>
      </div>

      <div className={styles.bloque}>
        <h2 id="registro">Registro de usuario</h2>
        <form onSubmit={registrar}>
          <fieldset>
            <legend>Nuevo usuario</legend>
            <label htmlFor="registro-nombre">Nombre</label>
            <input id="registro-nombre" name="nombreUsuario" type="text" required />
            <label htmlFor="registro-correo">Correo</label>
            <input id="registro-correo" name="correo" type="email" required />
            <label htmlFor="registro-rol">Rol</label>
            <select id="registro-rol" name="rol" required>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
            <Button type="submit">Registrar</Button>
          </fieldset>
        </form>
      </div>

      <div className={styles.bloque}>
        <h2 id="login">Iniciar sesión</h2>
        <p>Disponible en el siguiente momento del proyecto.</p>
      </div>

      <div className={styles.bloque}>
        <UsuarioTabla usuarios={usuarios} />
      </div>
    </section>
  );
}
