import React from "react";
import PropTypes from "prop-types";
import styles from "./Boton.module.css";
import { UseContext } from "../../Context/Context";

const Boton = ({ mostrar, idEliminar, BotonType, texto, icono }) => {

  const { setMostrarEditar, eliminarVideo } = UseContext();
  const clases = BotonType ? styles[BotonType] : "";

  const handleClick = () => {
    if (mostrar === true || mostrar === false) {
      setMostrarEditar(true);
    } else {
      eliminarVideo(idEliminar);
      console.log("id: ", idEliminar);
    }
  };

  return (
    <button className={`${clases} ${styles.boton}`} onClick={handleClick}>
      {icono && <span className={styles.icono}>{icono}</span>} {texto}
    </button>
  );
};

Boton.propTypes = {
  className: PropTypes.string,
  texto: PropTypes.string.isRequired,
  icono: PropTypes.node,
};

export default Boton;
