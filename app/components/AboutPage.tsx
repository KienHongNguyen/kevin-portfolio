/* eslint-disable @next/next/no-img-element */
import React from "react";

const AboutPage = () => {
  //   const API_KEY = "b669701dcbdfcfc6972324c9fb2933b5";
  //   const BASE_URL = "https://api.openweathermap.org/data/2.5/";
  //   async function getWeather() {
  //     const city = document.getElementById('cityInput').value;
  //     if (!city) {
  //         alert('Please enter a city name.');
  //         return;
  //     }

  //     try {
  //         // Fetch current weather
  //         const weatherResponse = await fetch(`${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`);
  //         const weatherData = await weatherResponse.json();
  //         displayCurrentWeather(weatherData);
  //     } catch (error) {
  //         console.error('Error fetching data:', error);
  //         alert('Failed to fetch weather data.');
  //     }
  // }

  return (
    <main className='flex flex-col gap-12 xl:gap-18 max-w-[1440px] mx-auto px-4 py-18 xl:px-18 xl:py-27'>
      <h1 className='font-bold text-center text-4xl xl:text-[6rem] leading-32 text-grape'>
        I&apos;m Kevin.
      </h1>

      {/* Content Container */}
      <div className='flex border border-red'>
        <div className='w-2/5 border border-blue px-20'>
          <img
            src='/profile-picture.jpg'
            alt='Kevin Nguyen'
            className='w-full rounded-t-full'
          ></img>
        </div>
        <div className='flex justify-between h-fit w-3/5'>
          <div>
            I&apos;m a Web Developer working remotely from 8°C Melbourne,
            Australia.
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
