import styles from "./NuevoVideo.module.css"
import Header from "../../Components/Header/";
import Footer from "../../Components/Footer";
import { Provider } from "../../Context/Context";
import Formulario from "../../Components/Formulario"

const NuevoVideo = () => {
    return (
        <Provider>
        <Header page="nuevoVideo" />
            <Formulario />
        <Footer />
    </Provider>
    )
}
export default NuevoVideo;