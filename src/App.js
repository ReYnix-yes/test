import { Route, Routes } from 'react-router-dom';
import './App.css';
import React, { useEffect, useState } from 'react';
import Mainpage from './pages/mainpage/Mainpage';
import { useGeolocated } from 'react-geolocated';
import Contacts from './pages/contacts/Contacts';
import About from './pages/about/About';
import Location from './pages/location/Location';

function App() {
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = useGeolocated();
  const [language, setLanguage] = useState(0); // Используем состояние, изначально установлено на 0
  const [animationPlayed, setAnimationPlayed] = useState(true)
  async function fetchCountryCode() {
    if (isGeolocationAvailable && isGeolocationEnabled && coords) {
      const countryCode = await getCountryCode(coords.latitude, coords.longitude);
      console.log(countryCode);
      // Устанавливаем значение language в зависимости от кода страны
      setLanguage(countryCode === "RU" ? 1 : 0);
    }
  }

  useEffect(() => {
    fetchCountryCode();
  }, [isGeolocationAvailable, isGeolocationEnabled, coords]);

  setTimeout(()=> {
    setAnimationPlayed(false); 
  }, 5000);

  return (
    <Routes>
      <Route path="/" element={<Mainpage language={language} animationPlayed={animationPlayed}/>} />
      <Route path="/Contacts" element={<Contacts language={language}/>}/>
      <Route path="/about" element={<About language={language}/>}/>
      <Route path="/location" element={<Location language={language}/>}/>
    </Routes>
  );
}

async function getCountryCode(latitude, longitude) {
  const apiUrl = `https://geolocation-db.com/json/${latitude},${longitude}&position=true`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const countryCode = data.country_code;
    console.log("Country Code:", countryCode);
    return countryCode;
  } catch (error) {
    console.error("Error fetching location data:", error);
    return null;
  }
}

export default App;
