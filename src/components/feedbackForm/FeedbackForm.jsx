import React from 'react';
import styles from "./styles.module.scss"

const FeedbackForm = () => {
  return (
    <form className={styles.form}>
        {/* <input type="number" id="" placeholder='+7 999 999 99'> */}
        <input type="number" name="" id={styles.from_inp} placeholder='+7 (999) 999 99-99'/>
        <button className={styles.form_button}>
            Отправить
        </button>
    </form>
  );
};

export default FeedbackForm;
