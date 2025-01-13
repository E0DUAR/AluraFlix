import styles from "./Card.module.css";
import React, { useContext, useState } from "react";
import { UseContext } from "../../Context/Context";
import EditarVideo from "../EditarVideo";
import Boton from "../Boton";
import borrar from '../../assets/iconos/borrar.png';
import editar from '../../assets/iconos/editar.png';

// Función para obtener el ID de YouTube a partir de la URL del video
const obtenerIdVideo = (url) => {
  const regex =
    /(?:youtube\.com\/(?:[^/]+\/[^/]+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const matches = url.match(regex);
  return matches ? matches[1] : null;
};

const Card = ({ datos, color }) => {

  
  const { videoEnEdicion, setVideoEnEdicion, eliminarVideo } = UseContext();


  console.log("Videos: Categoria => card: ", datos.id);

  const videoId = obtenerIdVideo(datos.url);
  const miniaturaUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : "";


  return (

    <div className={styles.card} style={{ border: `5px solid ${color}`, boxShadow: `inset 0px 0px 20px ${color}` }}>

      <div className={styles.imagen}>
        {miniaturaUrl && (
          <a href={datos.url} target="_blank" rel="noopener noreferrer">
            <img src={miniaturaUrl} alt={datos.titulo} />

          </a>
        )}
      </div>

      <div className={styles.acciones} style={{ borderTop: `5px solid ${color}` }}>
        
        <Boton 
            onClick={() => { eliminarVideo(datos.id) }}
            BotonType="eliminar" 
            texto="Borrar" 
            icono={  <img src={borrar} alt="Eliminar" />  } 
        />

        <Boton 
            mostrar={true} 
            BotonType="editar" 
            texto="Editar" 
            icono={  <img src={editar} alt="Editar" />  }
            onClick={() => { setVideoEnEdicion(datos.id) }}
        /> 

      </div>

      {videoEnEdicion === datos.id && (
        <EditarVideo
          video={datos}
          onClose={() => setVideoEnEdicion(null)}
        />
      )}

    </div>
  );
};

export default Card;