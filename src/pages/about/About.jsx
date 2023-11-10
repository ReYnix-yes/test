import Navbar from "../../components/Navbar/Navbar";
import styles from "./styles.module.scss"
import aboutIMG from "../../img/about/about.jpg"
import Footer from "../../components/footer/Footer";
const About = ({language}) => {
    const aboutTextENG = '';
    return (
        <main>
            <Navbar language={language}/>
            <div className={styles.about}>
                <div className={styles.about__text__wrapper}>
                    <h1 className={styles.about__title}>{language === 0 ? `About us` : `О нас`}</h1>
                    <p className={styles.about__text}>
                        {language === 0 ? `OOO "Okros" is proud of its active business partnerships with leading international producers of gas and oil refining products.`  : `ООО "Окрос" - успешная компания, зарегистрированная в Ханты-Мансийском автономном округе-Югре.`}
                        <br /><br />
                        {language === 0 ? `OOO "Okros" is a dynamic and rapidly growing company. We are  the largest supplier of more than 20 types of high-quality gas and oil refining products, including oils, lubricants, and other technical fluids. The company has established itself as a reliable and successful supplier.` : `ООО "Окрос" - динамично развивающаяся организация, специализирующаяся в поставке более 20 видов высококачественных продуктов газо-нефтепереработки, включая масла, смазки и другие технические жидкости. Мы гордимся нашей репутацией надежного и успешного поставщика.`}
                        <br /><br />
                        {language === 0 ? `Our strategy is focused on expanding the range of high-quality products and services we offer, developing a network of trusted partners, ensuring fast delivery, achieving set goals, and ensuring success.` : `Наша стратегия направлена на постоянное расширение ассортимента предлагаемых продуктов и услуг, развитие сети надежных партнеров, обеспечение быстрой и своевременной отгрузки, достижение поставленных целей и обеспечение успеха нашего бизнеса.`}
                        <br /><br />
                        {language === 0 ? `We strive for mutually beneficial partnerships and cooperation with clients and suppliers to provide high-quality products and meet the needs of our customers.` : ` Мы стремимся к взаимовыгодному партнерству и сотрудничеству с клиентами и поставщиками, чтобы обеспечить высокое качество наших продуктов и максимальное удовлетворение потребностей наших клиентов. `}
                        <br /><br />
                        {language === 0 ? `We take pride in our achievements and reputation as a reliable and successful supplier of gas and oil refining products, and we continue to grow and exceed our customers' expectations.` : ` Мы гордимся нашими активными деловыми связями с ведущими международными производителями продуктов газо-нефтепереработки.Мы гордимся нашими достижениями и нашей репутацией надежного и успешного поставщика продуктов газо-нефтепереработки, и продолжаем развиваться и превосходить ожидания наших клиентов.`}
                    </p>
                </div>
                <aside className={styles.about__img__wrapper}>
                    <img className={styles.about__img} src={aboutIMG} alt="About photo" />
                </aside>
            </div>
            <Footer language={language}/>
        </main>
    );
}

export default About;