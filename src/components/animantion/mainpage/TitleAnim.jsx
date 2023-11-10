import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';

const TitleAnim = ({ language }) => {
  const [isActive, setIsActive] = useState(false);
  const [randomIndex, setRandomIndex] = useState(null);

  const SlogansRU = ['С нами вы на верном пути', 'Искусство нефтяных сделок', 'Наша цель - ваш успех', 'Трейдинг с доверием и опытом', 'Качество в каждой капле нефти', 'Партнерство, которому можно доверять'];
  const SlogansEN = ['With us, you are on the right path', 'The art of oil deals', 'Our goal is your success', 'Trading with trust and expertise', 'Quality in every drop of oil', 'Partnership you can trust'];

  useEffect(() => {
    setRandomIndex(getRandomSloganIndex());
  }, []);

  setTimeout(()=> {
    setIsActive(true);
  }, 5000);

  function getRandomSloganIndex() {
    return Math.floor(Math.random() * SlogansRU.length);
  }

  return (
    <div className={`${styles['title-anim']} ${isActive ? styles.active : ''}`}>
      <span className={styles.anim__text}>
        {language === 0 ? SlogansEN[randomIndex] : SlogansRU[randomIndex]}
      </span>
    </div>
  );
};

export default TitleAnim;
