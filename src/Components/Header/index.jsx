import styles from "./Header.module.css";
import Inicio from "../../Pages/Inicio";
import NuevoVideo from "../../Pages/NuevoVideo";
import { Link } from "react-router-dom";
import Boton from "../../Components/Boton";

const Header = ({ page }) => {
  const container =
    page === "inicio"
      ? styles.container_inicio
      : page === "nuevoVideo"
      ? styles.container_nuevo_video
      : null;

  return (
    <>
      <div className={container}>
      <Link to="/" element={<Inicio />}>
        <img src="/.src/.assets/.logo.png" alt="Logo Alura" />
        </Link>

        <div className={styles.menu}>
          <Link to="/" element={<Inicio />}>
            <Boton
              BotonType={page === "inicio" ? "principal" : "secundario"}
              texto="HOME"
            />
          </Link>

          <Link to="/nuevoVideo" element={<NuevoVideo />}>
            <Boton
              BotonType={page === "nuevoVideo" ? "principal" : "secundario"}
              texto="NUEVO VIDEO"
            />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
