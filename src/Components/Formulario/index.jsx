import styles from "./Formulario.module.css";
import Campo from "../Campo/index";
import ListaOpciones from "../ListaOpciones/index";

const Formulario = ({ datos, manejarCambio, guardarCambios, onClose, }) => {

  const initialData = {
    titulo: datos?.titulo || '',
    imagen: datos?.imagen || '',
    url: datos?.url || '',
    descripcion: datos?.descripcion || '',
    categoria: datos?.categoria || '',
  };

  return (
    <form className={styles.formulario} onSubmit={guardarCambios}>
      
     
      <Campo
        titulo="Título"
        name="titulo"
        value={initialData.titulo}
        onChange={manejarCambio}
        placeholder="Ingresar título"
        type="text"
      />

      
      <Campo
        titulo="Imagen"
        name="imagen"
        value={initialData.imagen}
        onChange={manejarCambio}
        placeholder="Ingresar URL de la imagen"
        type="text"
      />

      
      <Campo
        titulo="Video"
        name="url"
        value={initialData.url}
        onChange={manejarCambio}
        placeholder="Ingresar URL del video"
        type="text"
      />

      
      <Campo
        titulo="Descripción"
        name="descripcion"
        value={initialData.descripcion}
        onChange={manejarCambio}
        placeholder="Ingresar descripción"
        type="textArea"
      />

      
      <ListaOpciones
        titulo="Categoría"
        name="categoria"
        opciones={["Front End", "Back End", "Innovación y Gestion"]}
        valorSeleccionado={initialData.categoria}
        onChange={manejarCambio}
      />

      
      <button type="submit"> {datos?.id ? 'Actualizar Video' : 'Guardar Video'} </button>
      <button type="button" onClick={onClose}>
        Cancelar
      </button>

     
    </form>
  
  );
};

export default Formulario;
