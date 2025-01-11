import styles from "./Formulario.module.css";
import Campo from "../Campo/index";
import ListaOpciones from "../ListaOpciones/index";

const Formulario = ({ datos, manejarCambio, guardarCambios, onClose }) => {


  console.log("datos enviados desde editarVideo: ", datos.video);

  return (
    <form className={styles.formulario} onSubmit={guardarCambios}>
      
     
      <Campo
        titulo="Título"
        name="titulo"
        value={datos.titulo}
        onChange={manejarCambio}
        placeholder="Ingresar título"
        type="text"
      />

      
      <Campo
        titulo="Imagen"
        name="imagen"
        value={datos.imagen}
        onChange={manejarCambio}
        placeholder="Ingresar URL de la imagen"
        type="text"
      />

      
      <Campo
        titulo="Video"
        name="video"
        value={datos.url}
        onChange={manejarCambio}
        placeholder="Ingresar URL del video"
        type="text"
      />

      
      <Campo
        titulo="Descripción"
        name="descripcion"
        value={datos.descripcion}
        onChange={manejarCambio}
        placeholder="Ingresar descripción"
        type="textArea"
      />

      
      <ListaOpciones
        titulo="Categoría"
        name="categoria"
        opciones={["front End", "back end", "Innovación y Gestion"]}
        valorSeleccionado={datos.categoria}
        onChange={manejarCambio}
      />

      
      <button type="submit">Guardar Cambios</button>
      <button type="button" onClick={onClose}>
        Cancelar
      </button>

     
    </form>
  
  );
};

export default Formulario;
