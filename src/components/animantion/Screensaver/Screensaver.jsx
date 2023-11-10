import styles from "./styles.module.scss"
import logo from "../../../img/logo/logo.xml"
import { useEffect, useState } from "react";
const Screensaver = ({ language }) => {
    const [screensaverDisplay, setScreensaverDisplay] = useState('flex')
    const [screensaverOpacity, setScreensaverOpacity] = useState(1)
    const [sloganOpacity, setSloganOpacity] = useState(0)
    const SlogansRU = ['С нами вы на верном пути'];
    const SlogansEN = ['With us, you are on the right path',];
    useEffect(() => {
        setSloganOpacity(1);        
      }, []);
    setTimeout(() => {
        setScreensaverDisplay('none');
    }, 5000);
    setTimeout(() => {
        setScreensaverOpacity(0);
    }, 3000);
    return (
        <div className={styles.screensaver} style={{display: screensaverDisplay, opacity: screensaverOpacity}}>
            <iframe src={logo} width="200px" className={styles.logo}></iframe>
            <h2 className={styles.slogan} style={{opacity: sloganOpacity}}>{language === 0 ? `${SlogansEN[0]}` : `${SlogansRU[0]}`}</h2>
        </div>
    );
}

export default Screensaver;