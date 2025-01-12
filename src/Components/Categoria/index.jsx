import styles from "./Categoria.module.css";
import { UseContext  } from "../../Context/Context";
import Card from "../Card/"

const Categoria = ({ datos }) => {
  
  const { videos } = UseContext(); 

  console.log("categorias enviadas desde section y enviadas a categoria: ", datos);
  console.log("videos llamados desde context: ", videos);


  
  const colorCategoria = () => {
    switch (datos) {
      case "Front End":
        return "#6bd1ff";
      case "Back End":
        return "#00c86f";
      case "Innovación y Gestion":
        return "#ffba05";
      default:
        return "#000000"; // Color predeterminado
    }
  };
 

    

  return (

    <div className={styles.categoria}>

       <span className={styles.titulo} style={{ backgroundColor: colorCategoria() }}>{datos}</span>

      <div className={styles.container}>

        {videos
          .filter((video) => video.categoria === datos)
          .map((video) => (
            <Card key={video.id} datos={video} color={colorCategoria()}/>
          ))}

      </div>

    </div>
  );
};

export default Categoria;
