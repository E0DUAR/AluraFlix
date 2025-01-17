import styles from "./ListaOpciones.module.css";

const ListaOpciones = ({ titulo, name, opciones, valorSeleccionado, onChange }) => {
  return (
    <div className={styles.listaOpciones}>
      <label htmlFor={name}>{titulo}</label>
      <select id={name} name={name} value={valorSeleccionado} onChange={onChange}>
        <option value="" disabled>
          Seleccionar {titulo.toLowerCase()}
        </option>
        {opciones.map((opcion, index) => (
          <option key={index} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListaOpciones;
