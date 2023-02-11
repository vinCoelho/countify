import Countdown from "./components/Countdown";
import Player from "./components/Player";

export default function App() {
  return (
    <div className='m-auto w-10/12 h-screen flex md:flex-row flex-col items-center justify-evenly'>
      <Countdown />
      <Player />
    </div>
  )
}
