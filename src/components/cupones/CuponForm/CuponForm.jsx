import { useEffect, useState } from "react";
import Button from "../../ui/Button/Button";
import Alert from "../../ui/Alert/Alert";
import styles from "./CuponForm.module.css";

const vacio = { codigo: "", descuento: "", fechaInicio: "", fechaFin: "", idCampania: "" };

export default function CuponForm({ cuponEditando, onGuardar, onCancelar }) {
  const [valores, setValores] = useState(vacio);
  const [error, setError] = useState("");

  useEffect(() => {
    setValores(cuponEditando ?? vacio);
    setError("");
  }, [cuponEditando]);

  const cambiar = (e) => setValores({ ...valores, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    if (valores.fechaFin < valores.fechaInicio) {
      setError("La fecha fin no puede ser anterior a la fecha de inicio.");
      return;
    }
    onGuardar({
      codigo: valores.codigo.trim(),
      descuento: Number(valores.descuento),
      fechaInicio: valores.fechaInicio,
      fechaFin: valores.fechaFin,
      idCampania: Number(valores.idCampania)
    });
    setValores(vacio);
    setError("");
  };

  return (
    <form className={styles.form} onSubmit={enviar}>
      <fieldset>
        <legend>{cuponEditando ? "Editar cupón" : "Nuevo cupón"}</legend>
        <div className={styles.campos}>
          <label htmlFor="cupon-codigo">Código
            <input id="cupon-codigo" name="codigo" value={valores.codigo} onChange={cambiar} required />
          </label>
          <label htmlFor="cupon-descuento">Descuento (%)
            <input id="cupon-descuento" name="descuento" type="number" min="1" max="100" value={valores.descuento} onChange={cambiar} required />
          </label>
          <label htmlFor="cupon-inicio">Fecha inicio
            <input id="cupon-inicio" name="fechaInicio" type="date" value={valores.fechaInicio} onChange={cambiar} required />
          </label>
          <label htmlFor="cupon-fin">Fecha fin
            <input id="cupon-fin" name="fechaFin" type="date" value={valores.fechaFin} onChange={cambiar} required />
          </label>
          <label htmlFor="cupon-campania">ID campaña
            <input id="cupon-campania" name="idCampania" type="number" min="1" value={valores.idCampania} onChange={cambiar} required />
          </label>
        </div>
        <div className={styles.acciones}>
          <Button type="submit">{cuponEditando ? "Actualizar cupón" : "Guardar cupón"}</Button>
          {cuponEditando && <Button variante="secundario" onClick={onCancelar}>Cancelar</Button>}
        </div>
        <Alert tipo="error">{error}</Alert>
      </fieldset>
    </form>
  );
}
