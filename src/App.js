import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect, useRef} from 'react'

function App() {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('June 15, 2022 13:30:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current)
      }else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000)
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  });

  return (
    <div className='h-screen flex justify-center items-center background'>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-96 h-64 my-4 md:my-0'>
          <img src='./bitcoverse-cover.png' alt='' />
        </div>
        <h1 className='text-3xl font-bold p-4 text-center'>Coming soon!</h1>
        <h2 className='text-xl italic font-extrabold p-4 text-center text-[#112B3C]'>BITCOVERSE, A Community For Everyone</h2>
        <table className='text-center my-4 md:my-0'>
          <th className='text-black text-xl px-2 py-4 uppercase italic'>Days</th>
          <th className='text-black text-xl px-2 py-4 uppercase italic'>Hours</th>
          <th className='text-black text-xl px-2 py-4 uppercase italic'>Mins</th>
          <th className='text-black text-xl px-2 py-4 uppercase italic'>Secs</th>
          <tr>
            <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-black'>{timerDays}:</td>
            <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-black'>{timerHours}:</td>
            <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-black'>{timerMinutes}:</td>
            <td className='md:text-8xl text-3xl px-2 py-4 font-extrabold text-black'>{timerSeconds}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;
