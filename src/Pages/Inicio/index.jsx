import styles from "./Inicio.module.css";
import Header from "../../Components/Header/";
import Banner from "../../Components/Banner";
import Section from "../../Components/Section";
import Footer from "../../Components/Footer";
import { Provider } from "../../Context/Context";

const Inicio = () => {
  return (
    <Provider>
      <Header page="inicio" />
      <Banner />
      <Section />
      <Footer />
    </Provider>
  );
};
export default Inicio;
