import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import TitleAnim from "../../components/animantion/mainpage/TitleAnim";
import styles from "./styles.module.scss";
import Screensaver from "../../components/animantion/Screensaver/Screensaver";
import mainBG from "../../img/mainbg.jpg"
import Footer from "../../components/footer/Footer";
import arrow from "../../img/icons/arrow/arrow.png"
import { useForm, Controller } from 'react-hook-form';
import FeedbackForm from "../../components/feedbackForm/FeedbackForm";
// import mainbg from "../../img/mainbg.jpg"

const Mainpage = ({ language, animationPlayed }) => {
    const [randomIndex, setRandomIndex] = useState(null);
    const MainTextRu = ["Мы стремимся к установлению долгосрочных партнерских отношений с нашими клиентами в сфере нефтетрейдинга. Наша цель - обеспечить взаимовыгодное и стабильное сотрудничество, основанное на взаимном доверии и уважении.", "Наша компания полагает основу своей деятельности на стратегическом подходе к нефтетрейдингу. Мы активно работаем над развитием долгосрочных планов, чтобы удовлетворить потребности наших клиентов и обеспечить их успех на рынке нефти.", "Мы придаем особое значение долгосрочной устойчивости в нефтетрейдинге. Наша фокусировка на стратегических аспектах позволяет нам с уверенностью прогнозировать и адаптироваться к изменениям в отрасли, ведя к постепенному и устойчивому росту.", "Ведение долгосрочного партнерства - основной принцип нашей компании в нефтетрейдинге. Мы ищем клиентов, с которыми можем развивать взаимовыгодные отношения на долгие годы, чтобы вместе преуспевать и достигать поставленных целей.", "Наша компания осуществляет нефтетрейдинг, руководствуясь стратегией предложения долгосрочных решений. Мы стремимся удовлетворять потребности рынка не только сегодня, но и в будущем, позволяя нам построить доверительные отношения с нашими клиентами на долгие годы.", "В основе нашей деятельности в нефтетрейдинге лежит стратегия устойчивого роста. Мы ищем возможности для налаживания долгосрочного сотрудничества, чтобы создать стойкую основу для успеха нашего бизнеса и наших клиентов."];
    const MainTextEn = ["We strive to establish long-term partnerships with our clients in the field of oil trading. Our goal is to ensure mutually beneficial and stable cooperation based on mutual trust and respect.", "Our company bases its operations on a strategic approach to oil trading. We actively work on developing long-term plans to meet the needs of our clients and ensure their success in the oil market.", "We place special emphasis on long-term stability in oil trading. Our focus on strategic aspects allows us to confidently forecast and adapt to changes in the industry, leading to gradual and sustainable growth.", "Building long-term partnerships is a core principle of our company in oil trading. We seek clients with whom we can develop mutually beneficial relationships for many years to come, to prosper and achieve our goals together.", "Our company carries out oil trading guided by a strategy of providing long-term solutions. We strive to meet the market's needs not only today but also in the future, allowing us to build trusted relationships with our clients for years to come.", "At the core of our activities in oil trading is a strategy of sustainable growth. We seek opportunities to establish long-term partnerships, creating a solid foundation for the success of our business and our clients."];
    useEffect(() => {

        setRandomIndex(getRandomSloganIndex());
    }, []);
    function getRandomSloganIndex() {
        return Math.floor(Math.random() * MainTextEn.length);
    }
    function isPlayed() {
        return;
    }
    const [currentGalleryOffset, setCurrentGalleryOffset] = useState(-300);
  const [idexOffset, setIndexOffset] = useState(0);
  let isMobile = window.innerWidth < 800;
  let step = isMobile ? 800 : 400; // Измените 800 и 400 на нужные значения

  useEffect(() => {
    // Обновляем начальное положение и шаг движения при изменении размера окна
    const handleResize = () => {
      let newIsMobile = window.innerWidth < 800;
      let newStep = newIsMobile ? 800 : 400;
      if (newIsMobile !== isMobile) {
        isMobile = newIsMobile;
        setCurrentGalleryOffset(-300);
        setIndexOffset(0);
      }
      step = newStep;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function arrowRight() {
    let index = idexOffset + 1;
    if (index * step <= 7 * step) {
      setIndexOffset(index);
      setCurrentGalleryOffset(-300 - index * step);
    }
  }

  function arrowLeft() {
    let index = idexOffset - 1;
    if (index >= 0) {
      setIndexOffset(index);
      setCurrentGalleryOffset(-300 - index * step);
    }
  }
      
    return (
        <main>

            {animationPlayed ? <Screensaver language={language} /> : isPlayed()}
            <Navbar language={language} />
            <section className={styles.main_first_section}>
                <img id={styles.mainBG} src={mainBG} alt="" />
                <TitleAnim language={language} />
                <aside className={styles.main_first_section_aside}>
                    <h1 className={styles.main_first_section_aside_title}>Okros</h1>
                    <h2 className={styles.main_first_section_aside_text}>
                        {language === 0 ? MainTextEn[randomIndex] : MainTextRu[randomIndex]}
                    </h2>
                </aside>
            </section>

            <section className={styles.second_section}>
                <div className={styles.second_section_wrapper}>
                    <div className={styles.second_section_title_wrapper}>
                        <h1 className={styles.second_section_title}>
                            {language === 0 ? 'Our Service' : 'Новости ТЭК'}
                        </h1>
                    </div>
                    <section className={styles.news}>
                        <ul className={styles.news_list}>
                            <li className={styles.news_item}>
                                <h4 className={styles.news_item_title}>17.07.2023</h4>
                                <p className={styles.news_item_text}>Минэнерго объявило о сокращении экспортного графика нефти на август</p>
                            </li>
                            <li className={styles.news_item}>
                                <h4 className={styles.news_item_title}>01.07.2023</h4>
                                <p className={styles.news_item_text}>Пошлина на экспорт нефти из России снижается до 15,6 доллара за тонну</p>
                            </li>
                            <li className={styles.news_item}>
                                <h4 className={styles.news_item_title}>21.06.2023</h4>
                                <p className={styles.news_item_text}>Fitch понизило прогноз цены нефти Brent на 2023 год</p>
                            </li>
                            <li className={styles.news_item}>
                                <h4 className={styles.news_item_title}>21.03.2022</h4>
                                <p className={styles.news_item_text}>Новак выступил против введения госрегулирования цен на топливо в РФ</p>
                            </li>
                            <li className={styles.news_item}>
                                <h4 className={styles.news_item_title}>16.03.2022</h4>
                                <p className={styles.news_item_text}>61,2 доллара за тонну составит размер пошлины на экспорт нефти из РФ</p>
                            </li>
                            <li className={styles.news_item}>
                                <h4 className={styles.news_item_title}>15.07.2021</h4>
                                <p className={styles.news_item_text}>Минфин повысит экспортную пошлину на нефть с 1 августа на $6,3</p>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
            <section>
                <div className={styles.our_service}>
                    <h1>{language === 0 ? 'Our Service' : 'Наш сервис'}</h1>
                </div>
                <div className={styles.second_section_text_wrapper}>
                    <div className={styles.second_section_text_item}>
                        <h1 className={styles.second_section_text_h1}>{language === 0 ? 'INDIVIDUAL APPROACH' : 'ИНДИВИДУАЛЬНЫЙ ПОДХОД'}</h1>
                        <hr className={styles.second_section_line} />
                        <p className={styles.second_section_text_p}>{language === 0 ? 'We understand that each client has unique needs and requirements. Therefore, we offer an individual approach to each order, providing our clients with the most efficient and optimal solutions.' : 'Мы понимаем, что каждый клиент имеет свои уникальные потребности и требования. Поэтому мы предлагаем индивидуальный подход к каждому заказу, обеспечивая наших клиентов самыми эффективными и оптимальными решениями.'}</p>
                    </div>
                    <div className={styles.second_section_text_item}>
                        <h1 className={styles.second_section_text_h1}>{language === 0 ? 'GUARANTEED QUALITY' : 'ГАРАНТИРОВАННОЕ КАЧЕСТВО'}</h1>
                        <hr className={styles.second_section_line} />
                        <p className={styles.second_section_text_p}>{language === 0 ? 'We carefully verify all oil products offered in our service to ensure high quality and compliance with standards. We only work with reliable suppliers, providing customers with reliability and long-term stability.' : 'Мы тщательно проверяем все нефтепродукты, предлагаемые в нашем сервисе, чтобы гарантировать высокое качество и соответствие стандартам. Мы работаем только с надежными поставщиками, что обеспечивает клиентам надежность и долгосрочную стабильность.'}</p>
                    </div>
                    <div className={styles.second_section_text_item}>
                        <h1 className={styles.second_section_text_h1}>
                            {language === 0 ? 'DIRECT' : 'БЕЗ'}
                            <br />
                            {language === 0 ? 'CONNECTIONS' : 'ПОСРЕДНИКОВ'}
                        </h1>
                        <hr className={styles.second_section_line} />
                        <p className={styles.second_section_text_p}>{language === 0 ? 'Oil product sales without intermediaries and overpayments. We provide a direct link between sellers and buyers, which helps to reduce costs on commissions and maintain competitive prices.' : 'Продажа нефтепродуктов: без посредников и переплат. Мы обеспечиваем прямую связь между продавцами и покупателями, что позволяет снизить затраты на комиссии и сохранить конкурентоспособные цены.'}</p>
                    </div>
                    <div className={styles.second_section_text_item}>
                        <h1 className={styles.second_section_text_h1}>
                            {language === 0 ? 'ANALYTICS AND STATISTICS' : 'ОПЕРАТИВНАЯ'}
                            <br />
                            {language === 0 ? 'CONNECTIONS' : 'РАБОТА'}
                        </h1>
                        <hr className={styles.second_section_line} />
                        <p className={styles.second_section_text_p}>{language === 0 ? 'Our service offers up-to-date analytics and statistics that will help you make informed decisions when investing in the oil market.' : 'В нефтегазовой индустрии скорость является ключевым фактором успеха. Поэтому наша команда профессионалов обеспечивает оперативное выполнение всех сделок, сокращая время от момента заказа до поставки продуктов до минимума.'} </p>
                    </div>
                </div>
            </section>
            <section className={styles.our_product}>
                <div className={styles.our_product_title_wrapper}>
                    <h1>Поставляемая продукция</h1>
                </div>
                <div className={styles.gallery}>
                <button className={styles.gallery_arrow_left} onClick={arrowLeft}><img src={arrow} className={styles.arrrow_icon_left} alt="left" /></button>
                    <div className={styles.gallery_wrapper}>
                        <ul className={styles.gallery_list} style={{transform: `translateX(${currentGalleryOffset}px)`}}>
                            <div className={styles.gallery_item}>
                                <div className={styles.gallery_item_img_wrapper}>
                                    <img src="" alt="" />
                                </div>
                                <h3>Бензин</h3>
                            </div>
                            <div className={styles.gallery_item}>
                                <div className={styles.gallery_item_img_wrapper}>
                                    <img src="" alt="" />
                                </div>
                                <h3>Дизельное топливо</h3>
                            </div>
                            <div className={styles.gallery_item}>
                                <div className={styles.gallery_item_img_wrapper}>
                                    <img src="" alt="" />
                                </div>
                                <h3>Реактивное топливо</h3>
                            </div>
                            <div className={styles.gallery_item}>
                                <div className={styles.gallery_item_img_wrapper}>
                                    <img src="" alt="" />
                                </div>
                                <h3>Мазут</h3>
                            </div>
                            <div className={styles.gallery_item}>
                                <div className={styles.gallery_item_img_wrapper}>
                                    <img src="" alt="" />
                                </div>
                                <h3>Битум</h3>
                            </div>
                            <div className={styles.gallery_item}>
                                <div className={styles.gallery_item_img_wrapper}>
                                    <img src="" alt="" />
                                </div>
                                <h3>Гудрон</h3>
                            </div>
                            <div className={styles.gallery_item}>
                                <div className={styles.gallery_item_img_wrapper}>
                                    <img src="" alt="" />
                                </div>
                                <h3>Газойль</h3>
                            </div>
                            <div className={styles.gallery_item}>
                                <div className={styles.gallery_item_img_wrapper}>
                                    <img src="" alt="" />
                                </div>
                                <h3>Сера</h3>
                            </div>
                            <div className={styles.gallery_item}>
                                <div className={styles.gallery_item_img_wrapper}>
                                    <img src="" alt="" />
                                </div>
                                <h3>СУГ</h3>
                            </div>  
                        </ul>
                    </div>
                    <button className={styles.gallery_arrow_right} onClick={arrowRight}><img src={arrow} className={styles.arrrow_icon_right} alt="right" /></button>
                </div>
            </section>
            <section>
                <FeedbackForm language={language}/>
            </section>
            <Footer language={language} />
        </main>
    );
}

export default Mainpage;