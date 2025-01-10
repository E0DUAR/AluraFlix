import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.container}>

        <div className={styles.inner_container}>

            <div className={styles.inner_container_left}>

                <span className={styles.afterTitle}>FRONT END</span>

                <h1>Challenge React</h1>

                <p>
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde
                    podrás comprometerte en la resolución de un problema para poder
                    aplicar todos los conocimientos adquiridos en la formación React.
                </p>

            </div>

            <img className={styles.imagen} src="/src/assets/player.png" alt="Imagen principal" />

        </div>

    </div>
  );
};
export default Banner;
