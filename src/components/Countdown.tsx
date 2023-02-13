import { createRef, useEffect, useState } from 'react';
import alarm from '../assets/alarm.mp3';

function Countdown() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const alarmRef = createRef<HTMLAudioElement>();

  const startTimer = () => { setIsActive(!isActive) }

  const resetTimer = () => { setSeconds(0); setMinutes(0); setIsActive(false); }

  useEffect(() => {
    let interval = 0;
    if (isActive) { interval = setInterval(() => {
      if (seconds > 0) { setSeconds(seconds -1); }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          setIsActive(false);
          alarmRef.current?.play();
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    } else if (!isActive && seconds !== 0) { clearInterval(interval); }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  return (
    <div className='lg:mr-10 p-6 md:p-10 mb-8 md:mb-0 bg-[#f1fa8c] bg-opacity-80 rounded-2xl flex flex-col items-center'>
      <div>
        <h1 className='md:text-4xl text-3xl text-center mb-4 lg:mb-6 font-mono'>୵୵countify</h1>
        <input className='text-center text-4xl lg:text-6xl w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 pl-4 pr-1 md:pl-7 md:pr-4 font-mono text-[#ff79c6] bg-gray-900 rounded-2xl'
          type="number"
          value={minutes}
          onChange={e => setMinutes(parseInt(e.target.value))}
        />
        <span className='text-5xl lg:text-7xl md:text-6xl'> : </span>
        <input className='text-center text-4xl lg:text-6xl w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 pl-4 pr-1 md:pl-7 md:pr-4 font-mono text-[#ff79c6] bg-gray-900 rounded-2xl'
          type="number"
          value={seconds}
          onChange={e => setSeconds(parseInt(e.target.value))}
        />
      </div>
      <div className='flex items-center flex-col md:flex-col lg:flex-row'>
        <h6 className='font-mono px-2 pt-4 lg:pt-6 text-[#282a36] font-extrabold'>⚙ cntrls</h6>
        <div>
          <button className='font-mono px-4 pt-2 lg:pt-6 text-[#282a36] hover:text-[#ff79c6]' onClick={startTimer}>
          {isActive ? '⏸ Pause' : ' ⏵ Start'}
          </button>
          <button className='font-mono px-4 pt-2 lg:pt-6 text-[#282a36] hover:text-[#ff79c6]' onClick={resetTimer}>↺ Reset</button>
          <audio src={ alarm } ref={ alarmRef } />
        </div>
      </div>
    </div>
  );
}

export default Countdown;
