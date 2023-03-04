import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import Player from "./components/Player";
import { getPlaylist } from "./service/api";
import city from "/src/assets/img/city.jpg";
import city2 from "/src/assets/img/city-2.jpg";
import girl from "/src/assets/img/girl.jpg";
import lofi from "/src/assets/img/lofi.jpg";
import lonelyMan from "/src/assets/img/lonely-man.jpg";
import neonCity from "/src/assets/img/neon-city.jpg";
import sadGirl from "/src/assets/img/sad-girl.jpg";
import sky from "/src/assets/img/sky.jpg";
import space from "/src/assets/img/space.jpg";
import Footer from "./components/Footer";

function App() {
  const [end, setEnd] = useState(true);
  const [checkbox, setCheckbox] = useState(
    JSON.parse(localStorage.getItem("checkbox") || "false")
  );

  useEffect(() => {
    localStorage.setItem("checkbox", JSON.stringify(checkbox));
  }, [checkbox]);

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
    <div
      className="w-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="mx-auto w-screen md:gap-8 lg:gap-24 md:max-w-2xl lg:max-w-6xl h-screen flex md:flex-row flex-col items-center justify-evenly">
        <Countdown
          setEnd={setEnd}
          setCheckbox={setCheckbox}
          checkbox={checkbox}
        />
        <Player end={end} checkbox={checkbox} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
