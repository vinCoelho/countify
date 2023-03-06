import { useEffect, useRef, useState } from "react";
import Countdown from "./components/Countdown";
import Player from "./components/Player";
import Footer from "./components/Footer";

function App() {
  const [end, setEnd] = useState(true);
  const [checkbox, setCheckbox] = useState(
    JSON.parse(localStorage.getItem("checkbox") || "false")
  );
  const bgDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("checkbox", JSON.stringify(checkbox));
  }, [checkbox]);

  useEffect(() => {
    const imgClassArr = [
      "city-2",
      "city",
      "girl",
      "lofi",
      "lonely-man",
      "neon-city",
      "sad-girl",
      "sky",
      "space",
    ];

    const randomImg = Math.floor(Math.random() * imgClassArr.length);
    const classToAdd = imgClassArr[randomImg];

    const divRef = bgDiv.current;
    if (divRef) divRef.className = `w-screen ${classToAdd}`;
  }, []);

  return (
    <div ref={ bgDiv } className="w-screen">
      <div className="mx-auto w-screen md:gap-8 lg:gap-24 md:max-w-2xl lg:max-w-6xl h-screen flex md:flex-row flex-col items-center justify-evenly">
        <Countdown
          setEnd={ setEnd }
          setCheckbox={ setCheckbox }
          checkbox={ checkbox }
        />
        <Player end={ end } checkbox={ checkbox } />
        <Footer />
      </div>
    </div>
  );
}

export default App;
