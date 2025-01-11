import styles from "./Card.module.css";
import React, { useContext, useState } from "react";
import { UseContext } from "../../Context/Context";
import EditarVideo from "../EditarVideo";
import Boton from "../Boton";

// Función para obtener el ID de YouTube a partir de la URL del video
const obtenerIdVideo = (url) => {
  const regex =
    /(?:youtube\.com\/(?:[^/]+\/[^/]+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const matches = url.match(regex);
  return matches ? matches[1] : null;
};

const Card = ({ datos }) => {


  const { eliminarVideo, mostrarEditar, setMostrarEditar } = UseContext();

  //console.log("id: ", datos.id);


  // Obtener el ID del video de YouTube para construir la URL de la miniatura
  const videoId = obtenerIdVideo(datos.url);
  const miniaturaUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : "";

  return (
    <div className={styles.card}>

      <div className={styles.imagen}>
        {miniaturaUrl && (
          <a href={datos.url} target="_blank" rel="noopener noreferrer">
            <img src={miniaturaUrl} alt={datos.titulo} />
          </a>
        )}
      </div>

      <div className={styles.acciones}>
        <Boton idEliminar={datos.id} BotonType="eliminar" texto="Borrar" icono={  <img src="/src/assets/iconos/borrar.png" alt="Eliminar" />  } />
        <Boton mostrar={true} BotonType="editar" texto="Editar" icono={  <img src="/src/assets/iconos/editar.png" alt="Editar" />  } />   
        
      </div>

      {mostrarEditar && (
        <div className={styles.modal}>
          <div className={styles.modalContenido}>
            <EditarVideo
              video={datos}
              onClose={() => setMostrarEditar(false)}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default Card;
