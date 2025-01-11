import styles from "./Card.module.css";
import React, { useContext, useState } from "react";
import { UseContext  } from "../../Context/Context";
import EditarVideo from "../EditarVideo";

const Card = ({ datos }) => {
  const { eliminarVideo } = UseContext();
  const [mostrarEditar, setMostrarEditar] = useState(false);

  console.log("Videos enviados desde Categoria a Card", datos);

  return (
    <div className={styles.card}>
        
      <h4>{datos.titulo}</h4>
      <p>{datos.descripcion}</p>
      <a href={datos.url} target="_blank" rel="noopener noreferrer">
        {" "}
        Ver video{" "}
      </a>
      

      <div className="acciones">
        <button onClick={() => setMostrarEditar(true)}>Editar</button>
        <button onClick={() => eliminarVideo(datos.id)}>Eliminar</button> 
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
