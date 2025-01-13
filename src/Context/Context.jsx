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
 

  // guardar video
  const agregarVideo = async (nuevoVideo) => {
    try {
      const response = await fetch("http://localhost:5000/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoVideo),
      });
  
      if (!response.ok) {
        throw new Error("Error al guardar el video en la API.");
      }
  
      const data = await response.json();
  
      setVideos((prevVideos) => [...prevVideos, data]);
  
      return { success: true, video: data }; 
    } catch (error) {
      console.error("Error en agregarVideo:", error);
      return { success: false, error }; 
    }
  };
  

  const editarVideo = async (id, nuevosDatos) => {
    try {
      const response = await fetch(`http://localhost:5000/videos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevosDatos),
      });
  
      if (!response.ok) {
        throw new Error("Error al editar el video en la API.");
      }
  
      const data = await response.json();
  
      // Actualizar el estado con el video editado
      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === id ? { ...video, ...data } : video
        )
      );
  
      return { success: true, video: data }; // Devuelve el video editado
    } catch (error) {
      console.error("Error en editarVideo:", error);
      return { success: false, error }; // Devuelve información del error
    }
  };
  


  // eliminar videos
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