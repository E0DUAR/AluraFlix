import React, { createContext, useState, useContext, useEffect } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
  //*** Aqui van los estados que se van a compartir entre componentes
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [mostrarEditar, setMostrarEditar] = useState(false);

  const [videoEnEdicion, setVideoEnEdicion] = useState(null);

  //*** Aqui van los métodos que se van a compartir entre componentes

  // Cargar base de datos
  useEffect(() => {
    fetch("http://localhost:5000/videos")
      .then((response) => {
        console.log("Estado de la respuesta:", response.status);
        return response.json();
      })
      .then((data) => {
  
        
        setVideos(data);
  
       
        const categoriasUnicas = [...new Set(data.map((video) => video.categoria))];
        setCategorias(categoriasUnicas);
      })
      .catch((error) => console.error("Error cargando el JSON:", error));
  }, []);
 

  // Función para crear videos
  const agregarVideo = (nuevoVideo) => {
    setVideos((prevVideos) => [...prevVideos, nuevoVideo]);
  };

  // Función para editar un video
  const editarVideo = (id, nuevosDatos) => {
    setVideos((prevVideos) =>
      prevVideos.map((video) =>
        video.id === id ? { ...video, ...nuevosDatos } : video
      )
    );
    setVideoEnEdicion(null);
  };

  const eliminarVideo = (id) => {

    fetch(`http://localhost:5000/videos/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        
        setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
      })
      .catch((error) => {
        console.error("Error eliminando el video:", error);

      });
  };

  return (
    //*** Aqui se envía el estado y los métodos a los componentes
    <Context.Provider value={{ videoEnEdicion, setVideoEnEdicion ,mostrarEditar, setMostrarEditar, videos, categorias, agregarVideo, editarVideo, eliminarVideo }} >
      {children}
    </Context.Provider>
  );
};

// Aqui se exporta el contexto para que los componentes puedan acceder a él
// Ejemplo: const { state, updateState } = useContext();
export const UseContext = () => useContext(Context);