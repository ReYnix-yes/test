import { Link } from "react-router-dom";
import logo from "../../img/logo/logo.xml"
import styles from "./styles.module.scss"
const Footer = ({language}) => {
    return (
        <div className={styles.footer}>
            <section className={styles.footer_left}>
                <ul className={styles.footer_left_list}>
                    <li className={styles.footer_left_item} id={styles.logo__wrapper}><Link className={styles.footer_left_link} to="/" ><iframe src={logo} width="200px" className={styles.logo}></iframe></Link></li>
                    <li className={styles.footer_left_item}>+7 921 773 58 10</li>
                    <li className={styles.footer_left_item}><a className={styles.footer_left_link} id={styles.link_mail} href="mailto:okros-contact@mail.ru">okros-contact@mail.ru</a></li>
                </ul>
            </section>
            <section className={styles.footer_right}>
                <ul className={styles.footer_right_list}>
                    <li className={styles.footer_right_item}><Link to="/" className={styles.footer_right_link}>Главная</Link></li>
                    <li className={styles.footer_right_item}><Link to="/about" className={styles.footer_right_link}>О компании</Link></li>
                    <li className={styles.footer_right_item}><Link to="/" className={styles.footer_right_link}>Продукция</Link></li>
                    <li className={styles.footer_right_item}><Link to="/contacts" className={styles.footer_right_link}>Связь с нами</Link></li>
                </ul>
            </section>
        </div>
    );
}

export default Footer;