import styles from "./Footer.module.css"
import logo from '../../assets/logo.png';

const Footer = () => {
    return(
        <div className={styles.container}>
            <img src={logo} alt="Logo Alura" />
        </div>
    )   
}
export default Footer;