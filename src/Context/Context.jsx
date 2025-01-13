import React, { createContext, useState, useContext, useEffect } from "react";

//const API_BASE_URL = "http://localhost:5000";

const API_BASE_URL = "https://678466941ec630ca33a460a0.mockapi.io/videos";

const apiFetch = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Error en la API");
  }
  return response.json();
};

const Context = createContext();

export const Provider = ({ children }) => {
  
  // Estados compartidos entre componentes
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [mostrarEditar, setMostrarEditar] = useState(false);
  const [videoEnEdicion, setVideoEnEdicion] = useState(null);

  // Cargar base de datos
  useEffect(() => {
    const cargarVideos = async () => {
      try {
        const data = await apiFetch("/videos");
        setVideos(data);
        const categoriasUnicas = [
          ...new Set(data.map((video) => video.categoria)),
        ];
        setCategorias(categoriasUnicas);
      } catch (error) {
        console.error("Error cargando el JSON:", error);
      }
    };

    cargarVideos();
  }, []);

  // Guardar video
  const agregarVideo = async (nuevoVideo) => {
    try {
      const data = await apiFetch("/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevoVideo),
      });
      setVideos((prevVideos) => [...prevVideos, data]);
      return { success: true, video: data };
    } catch (error) {
      console.error("Error en agregarVideo:", error);
      return { success: false, error };
    }
  };

  // Editar video
  const editarVideo = async (id, nuevosDatos) => {
    try {
      const data = await apiFetch(`/videos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevosDatos),
      });

      setVideos((prevVideos) =>
        prevVideos.map((video) =>
          video.id === id ? { ...video, ...data } : video
        )
      );

      return { success: true, video: data };
    } catch (error) {
      console.error("Error en editarVideo:", error);
      return { success: false, error };
    }
  };

  // Eliminar video
  const eliminarVideo = async (id) => {
    try {
      await apiFetch(`/videos/${id}`, {
        method: "DELETE",
      });

      setVideos((prevVideos) => prevVideos.filter((video) => video.id !== id));
    } catch (error) {
      console.error("Error eliminando el video:", error);
    }
  };

  return (
    <Context.Provider
      value={{
        videoEnEdicion,
        setVideoEnEdicion,
        mostrarEditar,
        setMostrarEditar,
        videos,
        categorias,
        agregarVideo,
        editarVideo,
        eliminarVideo,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Exportar el contexto para uso en otros componentes
export const UseContext = () => useContext(Context);
