import { useEffect, useState } from 'react';

function Countdown() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => { setIsActive(!isActive) }

  const resetTimer = () => { setSeconds(0); setMinutes(0); setIsActive(false); }

  useEffect(() => {
    let interval = null;
    if (isActive) { interval = setInterval(() => {
      if (seconds > 0) { setSeconds(seconds -1); }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
          setIsActive(false);
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
    <div className='mr-10 p-10 bg-[#f1fa8c] bg-opacity-80 rounded-2xl flex flex-col items-center'>
      <div>
        <h1 className='text-4xl text-center mb-6 font-mono'>//countify</h1>
        <input className='text-center text-6xl w-32 h-32 pl-7 pr-4 font-mono text-[#ff79c6] bg-gray-900 rounded-2xl'
          type="number"
          value={minutes}
          onChange={e => setMinutes(parseInt(e.target.value))}
        />
        <span className='text-7xl'> : </span>
        <input className='text-center text-6xl w-32 h-32 pl-7 pr-4 font-mono text-[#ff79c6] bg-gray-900 rounded-2xl'
          type="number"
          value={seconds}
          onChange={e => setSeconds(parseInt(e.target.value))}
        />
      </div>
      <div className='flex flex-row'>
      <h6 className='font-mono px-2 pt-6 text-[#282a36]'>//controls:</h6>
      <button className='font-mono px-4 pt-6 text-[#282a36] hover:text-[#ff79c6]' onClick={startTimer}>
        {isActive ? '⏸ Pause' : ' ⏵ Start'}
      </button>
      <button className='font-mono px-4 pt-6 text-[#282a36] hover:text-[#ff79c6]' onClick={resetTimer}>↺ Reset</button>
      </div>
    </div>
  );
}

export default Countdown;
