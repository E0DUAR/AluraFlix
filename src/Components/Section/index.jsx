import React from "react";
import Categoria from "../Categoria/index";
import styles from "./Section.module.css";
import { UseContext  } from "../../Context/Context";

const Section = () => {


const { categorias  } = UseContext(); 

console.log("Categorias: Context => Section", categorias);

  return (
    <section className={styles.section}>

      {categorias && categorias.length > 0 ? (
        categorias.map((categoria) => (
          <Categoria key={categoria} nombreCategoria={categoria} />
        ))
      ) : (
        <p>Cargando categorías...</p>
      )}
      
    </section>
  );
};

export default Section;