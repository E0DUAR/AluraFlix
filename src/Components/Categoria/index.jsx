import styles from "./Categoria.module.css";
import { UseContext  } from "../../Context/Context";
import Card from "../Card/"

const Categoria = ({ datos }) => {
  
  const { videos } = UseContext(); 

  console.log("categorias enviadas desde section y enviadas a categoria: ", datos);
  console.log("videos llamados desde context: ", videos);

  return (


    <div className={styles.categoria}>
       <h2>{datos}</h2>
      <div className={styles.container}>


        {videos
          .filter((video) => video.categoria === datos)
          .map((video) => (
            <Card key={video.id} datos={video} />
          ))}


      </div>
    </div>
  );
};

export default Categoria;
