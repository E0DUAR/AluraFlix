import styles from "./Categoria.module.css";
import { UseContext  } from "../../Context/Context";
import Card from "../Card/"

const Categoria = ({ nombreCategoria }) => {
  
  const { videos } = UseContext(); 

  console.log("categorias: section => categoria: ", nombreCategoria);
  
  const colorCategoria = () => {
    switch (nombreCategoria) {
      case "Front End":
        return "#6bd1ff";
      case "Back End":
        return "#00c86f";
      case "Innovación y Gestion":
        return "#ffba05";
      default:
        return "#000000";
    }
  };

  return (

    <div className={styles.categoria}>

       <span className={styles.titulo} style={{ backgroundColor: colorCategoria() }}>{nombreCategoria}</span>

      <div className={styles.container}>

        {videos
          .filter((video) => video.categoria === nombreCategoria)
          .map((video) => (
            <Card key={video.id} datos={video} color={colorCategoria()}/>
          ))}

      </div>

    </div>
  );
};

export default Categoria;
