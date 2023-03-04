import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import Player from "./components/Player";
import neonCity from "/src/img/neon-city.jpg";
import Footer from "./components/Footer";

function App() {
  const [end, setEnd] = useState(true);
  const [checkbox, setCheckbox] = useState(
    JSON.parse(localStorage.getItem("checkbox") || "false")
  );
  
  useEffect(() => {
    localStorage.setItem("checkbox", JSON.stringify(checkbox));
  }, [checkbox]);

  return (
    <div
      className="w-screen"
      style={{
        backgroundImage: `url(${neonCity})`,
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
