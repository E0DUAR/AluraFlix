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

  const guardarCambios = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/videos/${video.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevosDatos),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        return response.json();
      })
      .then((data) => {
        editarVideo(video.id, data);
        onClose();
      })
      .catch((error) => {
        console.error("Error actualizando el video:", error);
        setMensajeError("Hubo un error al actualizar el video.");
      });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={onClose}>Cerrar</button>

        <h2>Editar Video</h2>

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
