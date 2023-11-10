import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import styles from "./styles.module.scss"

const Location = ({language}) => {
    return (
        <>
        <main>
            <Navbar language={language}/>
            <div className={styles.location}>
                <div className={styles.location__text__wrapper}>
                    <h1 className={styles.location__title}>{language === 0 ? `Location:` : `Адрес:`}</h1>
                    <p className={styles.location__text}>{language === 0 ? `12 Presnenskaya Embankment, Moscow, 56th floor, office 18, 123317` : `Пресненская наб., 12, Москва, 56 этаж, офис 18, 123317`}</p>
                </div>
                <div className={styles.map__wrapper}>
                <iframe className={styles.map_desktop} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.4962049238015!2d37.53528321317528!3d55.74988197297086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdcbfd1b72d%3A0x433d48214f76b256!2z0J_RgNC10YHQvdC10L3RgdC60LDRjyDQvdCw0LEuLCAxMiwg0JzQvtGB0LrQstCwLCAxMjMzMTc!5e0!3m2!1sru!2sru!4v1698702496341!5m2!1sru!2sru" width="100%" height="500px" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <iframe className={styles.map_mob} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.4962049238015!2d37.53528321317528!3d55.74988197297086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdcbfd1b72d%3A0x433d48214f76b256!2z0J_RgNC10YHQvdC10L3RgdC60LDRjyDQvdCw0LEuLCAxMiwg0JzQvtGB0LrQstCwLCAxMjMzMTc!5e0!3m2!1sru!2sru!4v1698702496341!5m2!1sru!2sru" width="300px" height="400px" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
                </div>
            </div>
            
        </main>
        <Footer language={language}/>
        </>
    );
}

export default Location;