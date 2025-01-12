import React from "react";
import PropTypes from "prop-types";
import styles from "./Boton.module.css";
import { UseContext } from "../../Context/Context";

const Boton = ({ BotonType, texto, icono, onClick }) => {

  const clases = BotonType ? styles[BotonType] : "";

  return (
    <button className={`${clases} ${styles.boton}`} onClick={onClick} >
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
