import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import logo from "../../img/logo/logo.xml"

const Navbar = ({ language }) => {
    const [burgerVisibility, setBurgerVisibility] = useState("none");
    const [burgerTrasform, setBurgerTrasform] = useState('-100%');
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    function burgerBtn() {
        setIsBurgerOpen(!isBurgerOpen);
        if (burgerVisibility === "none") {
            setBurgerVisibility("flex");
            setTimeout(() => {
                setBurgerTrasform('0');
            }, 0);
        } else {
            setBurgerTrasform('-100%');
            setTimeout(() => {
                setBurgerVisibility("none");
            }, 300);
        }
    }
    const xmlString = "<example><item>Item 1</item><item>Item 2</item></example>";
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    burgerBtn();
  };
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <iframe src={logo} width="200px" className={styles.logo}></iframe>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link to='/' className={styles.li__text}>
                            {language === 0 ? 'Home' : 'Главная'}
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link to='/about' className={styles.li__text}>
                            {language === 0 ? 'About Us' : 'О нас'}
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link to='/location' className={styles.li__text}>
                            {language === 0 ? 'Location' : 'Расположение'}
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link to='/contacts' className={styles.li__text}>
                            {language === 0 ? 'Contact' : 'Контакты'}
                        </Link>
                    </li>
                </ul>
                <button className={`${styles.burger} ${isOpen ? styles.burgerOpen : ''}`} onClick={handleClick}>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                </button>
            </nav>
            <nav className={styles.burger_nav} style={{ display: burgerVisibility, transform: `translateY(${burgerTrasform})` }}>
                <iframe src={logo} width="200px" className={styles.logo}></iframe> 
                <hr className={styles.burger__hr}/>
                               <ul className={styles.burger_ul}>
                    
                    <li className={styles.burger_li}>
                        <Link to='/' className={styles.li__text}>
                            {language === 0 ? 'Home' : 'Главная'}
                        </Link>
                    </li>
                    <li className={styles.burger_li}>
                        <Link to='/about' className={styles.li__text}>
                            {language === 0 ? 'About Us' : 'О нас'}
                        </Link>
                    </li>
                    <li className={styles.burger_li}>
                        <Link to='/location' className={styles.li__text}>
                            {language === 0 ? 'Location' : 'Где находимся?'}
                        </Link>
                    </li>
                    <li className={styles.burger_li}>
                        <Link to='/contacts' className={styles.li__text}>
                            {language === 0 ? 'Contact' : 'Контакты'}
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
