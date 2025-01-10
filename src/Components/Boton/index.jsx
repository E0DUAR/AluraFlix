import React from "react";
import PropTypes from "prop-types";
import styles from "./Boton.module.css";

const Boton = ({ BotonType, texto, icono }) => {

const clases = BotonType ? styles[BotonType] : styles.botonNormal;

  return (
    <button className={`${clases} ${styles.boton}`} >
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
