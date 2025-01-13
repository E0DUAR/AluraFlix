import styles from "./NuevoVideo.module.css";
import Header from "../../Components/Header/";
import Footer from "../../Components/Footer";
import { useState, useContext } from "react";
import { UseContext } from "../../Context/Context";
import Formulario from "../../Components/Formulario";
import { useNavigate } from "react-router-dom";


const NuevoVideo = () => {
  const { agregarVideo } = UseContext();
  const navigate = useNavigate();

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

  const guardarCambios = async (e) => {
    e.preventDefault();
  
    const resultado = await agregarVideo(formData);
  
    if (resultado.success) {
      setMensajeExito("Video guardado exitosamente.");
      setFormData({
        titulo: "",
        imagen: "",
        url: "",
        descripcion: "",
        categoria: "",
      });
      navigate("/");
    } else {
      console.error("Error guardando el video:", resultado.error);
      setMensajeError("Hubo un error al guardar el video.");
    }
  };
  

  // Función para manejar el cierre
  const onClose = () => {
    console.log("Formulario cerrado");
    navigate("/");
  };

  return (
    <>
      <Header page="nuevoVideo" />

      <section className={styles.container}>

        <div className={styles.content}>
        <h2>NUEVO VIDEO</h2>
          <p>Complete el formulario para crear una nueva tarjeta de video</p>

          <span></span>
          <h3>Crear Tarjeta</h3>
          <span></span>

          <Formulario
            datos={formData}
            manejarCambio={manejarCambio}
            guardarCambios={guardarCambios}
            onClose={onClose}
          />
          {mensajeError && <div className="mensajeError">{mensajeError}</div>}
        </div>

      </section>

      <Footer />
    </>
  );
};

export default NuevoVideo;
