import styles from "./NuevoVideo.module.css";
import Header from "../../Components/Header/";
import Footer from "../../Components/Footer";
import { useState, useContext } from "react";
import { UseContext } from "../../Context/Context";
import Formulario from "../../Components/Formulario";

const NuevoVideo = () => {
  const { agregarVideo } = UseContext();

  const [formData, setFormData] = useState({
    titulo: "",
    imagen: "",
    url: "",
    descripcion: "",
    categoria: "",
  });

  const [mensajeExito, setMensajeExito] = useState(null);
  const [mensajeError, setMensajeError] = useState(null);

  // Función para manejar los cambios en los campos del formulario
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Función para manejar el guardado de los datos
  const guardarCambios = (e) => {
    e.preventDefault();

    // Enviar el nuevo video a la API usando fetch
    fetch("http://localhost:5000/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // 1. Guardar el video en el estado local si la respuesta es exitosa
        agregarVideo(data);  // Asegúrate de pasar la respuesta completa si quieres el video con ID asignado

        // 2. Mostrar mensaje de éxito
        setMensajeExito("Video guardado exitosamente.");

        // 3. Restablecer formulario
        setFormData({
          titulo: "",
          imagen: "",
          url: "",
          descripcion: "",
          categoria: "",
        });
      })
      .catch((error) => {
        console.error("Error guardando el video:", error);
        setMensajeError("Hubo un error al guardar el video.");
      });
  };

  // Función para manejar el cierre
  const onClose = () => {
    console.log("Formulario cerrado");
    // Lógica para cerrar el formulario o redirigir
  };

  return (
    <>
      <Header page="nuevoVideo" />
      <Formulario
        datos={formData}
        manejarCambio={manejarCambio}
        guardarCambios={guardarCambios}
        onClose={onClose}
      />
      {mensajeExito && <div className="mensajeExito">{mensajeExito}</div>}
      {mensajeError && <div className="mensajeError">{mensajeError}</div>}
      <Footer />
    </>
  );
};

export default NuevoVideo;
