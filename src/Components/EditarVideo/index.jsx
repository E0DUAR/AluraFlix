import styles from "./EditarVideo.module.css";
import { useState, useContext, useEffect } from "react";
import { UseContext } from "../../Context/Context";
import Formulario from "../Formulario/index";

const EditarVideo = ({ video, onClose }) => {
  const { editarVideo } = UseContext();
  const [nuevosDatos, setNuevosDatos] = useState({ ...video });

  // Sincronizar el estado con el video que se edita
  useEffect(() => {
    setNuevosDatos({ ...video });
  }, [video]);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevosDatos({ ...nuevosDatos, [name]: value });
  };

  const guardarCambios = async (e) => {
    e.preventDefault();
  
    const resultado = await editarVideo(video.id, nuevosDatos);
  
    if (resultado.success) {
      onClose(); 
    } else {
      console.error("Error actualizando el video:", resultado.error);
      setMensajeError("Hubo un error al actualizar el video.");
    }
  };
  


    // Función para manejar clics en el overlay
    const handleOverlayClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={styles.modalContent}>

        <button className={styles.cerrar} onClick={onClose}>X</button>

        <h2>EDITAR VIDEO</h2>

        <Formulario
          datos={nuevosDatos}
          manejarCambio={manejarCambio}
          guardarCambios={guardarCambios}
          onClose={onClose}
        />
      </div>
    </div>
  );
};

export default EditarVideo;
