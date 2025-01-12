import styles from "./EditarVideo.module.css";
import { useState, useContext, useEffect  } from "react";
import { UseContext } from "../../Context/Context";
import Formulario from "../Formulario/index";

const EditarVideo = ({ video, onClose }) => {

  const { editarVideo } = UseContext();
  const [nuevosDatos, setNuevosDatos] = useState({ ...video });

  // Sincronizar el estado con el video que se edita
  useEffect(() => {
    setNuevosDatos({ ...video });
  }, [video]);

  // Manejar cambios en los campos de edición
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevosDatos({ ...nuevosDatos, [name]: value });
  };

  // Guardar los cambios al editar
  const guardarCambios = (e) => {
    e.preventDefault();
    editarVideo(video.id, nuevosDatos); // Llamar a la función del contexto
    onClose(); // Cerrar el modal
  };

  console.log("Datos recibidos desde Card hacia editarVideo: ", video, onClose);

  return (
    <div className="editar-video">
      <h2>Editar Video</h2>
      
      <Formulario
        datos={nuevosDatos}
        manejarCambio={manejarCambio}
        guardarCambios={guardarCambios}
        onClose={onClose}
      />
      
    </div>
  );
};

export default EditarVideo;
