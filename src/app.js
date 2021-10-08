import { useEffect, useState } from 'react';
import './style.scss';

export default function ChristmasCountdown() {

   const numberOfSnowflakes = Array.from({ length: 500 }, (k, i) => i++);

   const christmasDate = new Date("Dec 25, 2021 00:00:00").getTime();
   let [today, setToday] = useState(new Date().getTime());

   useEffect(() => {
      const interval = setInterval(() => {
         setToday(new Date().getTime());
      }, 1000);
      return () => clearInterval(interval);
   }, []);

   let timeLeft = christmasDate - today;
   let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
   let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

   const data = [
      {
         number: days,
         value: "days"
      },
      {
         number: hours,
         value: "hours"
      },
      {
         number: minutes,
         value: "minutes"
      },
      {
         number: seconds,
         value: "seconds"
      }
   ];

   return (
      <div className="christmas-countdown h-100 position-relative py-5 overflow-hidden centered bg-cover">
         <div className="w-100">
            <h1 className="header text-white text-uppercase">Christmas is coming</h1>
            <div className="text-center text-white text-uppercase mt-5 ls-3 text-shadow">It's the most wonderful time of the year!</div>
            <div className="d-flex flex-column flex-md-row justify-content-around align-items-center text-white text-center mt-5 mx-auto py-4 circles">
               {data.map((item, index) => {
                  return (
                     <div key={index} className="circle centered rounded-circle border border-white border-5 mb-4 mb-md-0">
                        <h1>{item.number}</h1>
                        <h5>{item.value}</h5>
                     </div>
                  );
               })}
            </div>
            <div className="text-center text-white text-uppercase mt-5 ls-3 text-shadow">"We wish you a Merry Christmas and a Happy New Year"</div>
            <div className="snow position-absolute">
               {numberOfSnowflakes.map((index) => {
                  let randomX = Math.floor(Math.random() * window.innerWidth);
                  let randomY = Math.floor(Math.random() * window.innerHeight);
                  return (
                     <div
                        key={index}
                        className="snowflake rounded-circle position-absolute"
                        style={{ left: randomX, top: randomY }}
                     ></div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};