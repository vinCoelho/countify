import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import Player from "./components/Player";
import city from "/src/img/city.jpg";
import city2 from "/src/img/city-2.jpg";
import girl from "/src/img/girl.jpg";
import lofi from "/src/img/lofi.jpg";
import lonelyMan from "/src/img/lonely-man.jpg";
import neonCity from "/src/img/neon-city.jpg";
import sadGirl from "/src/img/sad-girl.jpg";
import sky from "/src/img/sky.jpg";
import space from "/src/img/space.jpg";
import Footer from "./components/Footer";

function App() {
  const [bg, setBg] = useState("");

  const randomBg = () => {
    const bgArr = [
      city,
      city2,
      girl,
      lofi,
      lonelyMan,
      neonCity,
      sadGirl,
      sky,
      space,
    ];
    const random = bgArr[Math.floor(Math.random() * bgArr.length)];
    const randomRes = random;
    const bg = randomRes.slice(9);
    setBg(bg);
  };

  useEffect(() => {
    randomBg();
  }, []);

  return (
    <div className="w-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="m-auto w-screen lg:max-w-6xl h-screen flex md:flex-row flex-col items-center justify-center">
        <Countdown />
        <Player />
        <Footer />
      </div>
    </div>
  );
}

export default App;
