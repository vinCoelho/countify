import Countdown from "./components/Countdown"
import Player from "./components/player"

export default function App() {


  return (
    <div className='m-auto w-10/12 h-screen flex flex-row items-center justify-evenly'>
      <Countdown />
      <Player />
    </div>
  )
}