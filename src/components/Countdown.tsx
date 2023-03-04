import { createRef, useEffect, useState } from "react";
import alarm from "../assets/alarm.mp3";
import {
  VscDebugStart,
  VscDebugPause,
  VscDebugRestart,
  VscGear,
} from "react-icons/vsc";

function Countdown({
  setEnd,
  setCheckbox,
  checkbox,
}: {
  setEnd: React.Dispatch<React.SetStateAction<boolean>>,
  setCheckbox: React.Dispatch<React.SetStateAction<boolean>>,
  checkbox: boolean;
}) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const alarmRef = createRef<HTMLAudioElement>();

  const startTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setSeconds(0);
    setMinutes(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = 0;
    if (isActive) {
      setEnd(false);
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            alarmRef.current?.play();
            setEnd(true);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  return (
    <div className="lg:ml-20 md:ml-10 p-6 md:p-10 mb-8 md:mb-0 bg-[#f1fa8c] bg-opacity-80 rounded-2xl flex flex-col items-center">
      <h1 className="md:text-4xl text-3xl text-center mb-4 lg:mb-6 font-mono">
        ୵୵countify
      </h1>
      <div className="flex items-center justify-center">
        <article className="flex flex-col w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl bg-gray-900 items-center justify-center">
          <input
            className="ml-3 outline-none text-center text-4xl lg:text-6xl lg:h-20 lg:w-24 h-12 w-16 font-mono text-[#ff79c6] bg-transparent"
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
          />
          <p className="text-gray-500 font-mono text-sm">minutes</p>
        </article>
        <span className="animate-pulse px-1 lg:mb-3 text-5xl lg:text-7xl md:text-6xl">
          {" "}
          :{" "}
        </span>
        <article className="flex flex-col w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl bg-gray-900 items-center justify-center">
          <input
            className="ml-3 outline-none text-center text-4xl lg:text-6xl lg:h-20 lg:w-24 h-12 w-16 font-mono text-[#ff79c6] bg-transparent"
            type="number"
            value={seconds}
            onChange={(e) => setSeconds(parseInt(e.target.value))}
          />
          <p className="text-gray-500 font-mono text-sm">seconds</p>
        </article>
      </div>
      <div className="flex items-center flex-col">
        <div className="flex mt-6 gap-5">
          <button
            className="font-mono text-[#282a36] hover:text-white bg-[#ff79c6] px-3 py-1 rounded-lg"
            onClick={startTimer}
          >
            {isActive ? (
              <span className="flex items-center gap-1">
                <VscDebugPause className="mb-0.5" />
                Pause
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <VscDebugStart className="mb-0.5" />
                Start
              </span>
            )}
          </button>
          <button
            className="font-mono text-[#282a36] hover:text-[#ff79c6]"
            onClick={resetTimer}
          >
            <span className="flex items-center gap-1">
              <VscDebugRestart className="mb-0.5" /> Reset
            </span>
          </button>
          <audio src={alarm} ref={alarmRef} />
        </div>
        <div className="flex gap-2 items-center mt-4">
          <input id="stop-music" type="checkbox" checked={ checkbox } onClick={() => setCheckbox((check) => !check)} />
          <label htmlFor="stop-music">
            <span className="font-mono text-sm">Stop music in the end</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
