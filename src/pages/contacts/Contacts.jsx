import Navbar from "../../components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss"
import Footer from "../../components/footer/Footer";
const Contacts = ({ language }) => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    // // const handleSubmit = (e) => {
    // //     e.preventDefault();


    // // };
    // const [formNAME, setFormNAME] = useState('Name');
    // const [formMASSAGE, setFormMASSAGE] = useState('Massage');
    // function fromTranslate() {
    //     if (language) {
    //         setFormMASSAGE('Massage');
    //         setFormNAME('Name');
    //     } else {
    //         setFormMASSAGE('Сообщение');
    //         setFormNAME('Имя');
    //     }
    // }
    // useEffect(() => {
    //     fromTranslate();
    // }, []);





    const phrases = {
        en: {
            formTitle: 'Contact Us',
            namePlaceholder: 'Name',
            emailPlaceholder: 'Email',
            messagePlaceholder: 'Message',
            nameWarning: 'Please enter your name',
            emailWarning: 'Please enter a valid email',
            messageWarning: 'Please enter a message',
            submitButton: 'Submit',
        },
        ru: {
            formTitle: 'Связь с нами',
            namePlaceholder: 'Имя',
            emailPlaceholder: 'Email',
            messagePlaceholder: 'Сообщение',
            nameWarning: 'Введите ваше имя',
            emailWarning: 'Введите корректный email',
            messageWarning: 'Введите сообщение',
            submitButton: 'Отправить',
        },
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Проверка ввода перед отправкой
        if (!name) {
            setNameError(true);
        } else {
            setNameError(false);
        }

        if (!email || !validateEmail(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (!message) {
            setMessageError(true);
        } else {
            setMessageError(false);
        }

        // Если все обязательные поля заполнены, отправляем форму
        if (name && email && validateEmail(email) && message) {
            fetch("/send_email.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            })
                .then((response) => response.text())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => {
                    console.error("Ошибка:", error);
                });
        }
    };

    // Проверка корректности email
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
    return (
        <>
        <Navbar language={language}/>
        <main>
            
            <div className={styles.contact}>
                <section className={styles.section}>
                    <div className={styles.section__text__wrapper}>
                        <h1 id={styles.ourinfo}>{language === 0 ? `Our contact information` : 'Наши контакты'}</h1>
                        <div className={styles.section__title__wrapper}>
                            <h2 id={styles.nameChief}>{language === 0 ? `IRINA VLADIMIROVNA RUDAKOVA` : 'РУДАКОВА ИРИНА ВЛАДИМИРОВНА'}</h2>
                            <h4 id={styles.Chief_text}>{language === 0 ? `Chief Executive Officer` : 'Генеральный директор'}</h4>
                        </div>
                        <p className={styles.section__text}>+7 921 773 58 10</p>
                        <p className={styles.section__text}>okros-contact@mail.ru</p>
                        <p className={styles.section__text}>www.okros-trade.com</p>
                    </div>


                    <img src="http://qrcoder.ru/code/?https%3A%2F%2Fokros-trade.com%2F&4&0" width="132" height="132" border="0" title="QR код" />

                </section>
                
                <form className={styles.contact_form} onSubmit={handleSubmit}>
                    <h2 className={styles.form_title}>
                        {language === 0 ? phrases.en.formTitle : phrases.ru.formTitle}
                    </h2>
                    <hr id={styles.contact__line}/>
                    <div className={styles.form_group}>
                        <input
                            type="text"
                            id={styles.name}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            placeholder={
                                language === 0
                                    ? phrases.en.namePlaceholder
                                    : phrases.ru.namePlaceholder
                            }
                            className={nameError ? 'error' : ''}
                        />
                        {nameError && (
                            <p className={styles.error_message}>
                                {language === 0 ? phrases.en.nameWarning : phrases.ru.nameWarning}
                            </p>
                        )}
                    </div>
                    <div className={styles.form_group}>
                        <input
                            type="email"
                            id={styles.email}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder={
                                language === 0
                                    ? phrases.en.emailPlaceholder
                                    : phrases.ru.emailPlaceholder
                            }
                            className={emailError ? 'error' : ''}
                        />
                        {emailError && (
                            <p className={styles.error-message}>
                                {language === 0
                                    ? phrases.en.emailWarning
                                    : phrases.ru.emailWarning}
                            </p>
                        )}
                    </div>
                    <div className={styles.form_group}>
                        <textarea
                            id={styles.message}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            placeholder={
                                language === 0
                                    ? phrases.en.messagePlaceholder
                                    : phrases.ru.messagePlaceholder
                            }
                            className={messageError ? 'error' : ''}
                        ></textarea>
                        {messageError && (
                            <p className={styles.error_message}>
                                {language === 0
                                    ? phrases.en.messageWarning
                                    : phrases.ru.messageWarning}
                            </p>
                        )}
                    </div>
                    <button id={styles.form__btn} type="submit">
                        {language === 0 ? phrases.en.submitButton : phrases.ru.submitButton}
                    </button>
                </form>
            </div>
        </main>
        <Footer language={language}/>
        </>
    );
};
export default Contacts;