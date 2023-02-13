import Countdown from "./components/Countdown";
import Player from "./components/Player";

export default function App() {
  return (
    <div className='m-auto w-screen lg:max-w-6xl h-screen flex md:flex-row flex-col items-center justify-center'>
      <Countdown />
      <Player />
    </div>
  )
}
