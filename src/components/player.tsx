import { useEffect, useRef, useState } from "react";
import { getPlaylist } from "../service/api";

function Player({ end, checkbox } : { end: boolean, checkbox: boolean }) {
  const [html, setHtml] = useState("");
  const [input, setInput] = useState<string>("");
  const [load, setLoad] = useState(false);

  const getList = async () => {
    const retrievedUrl = localStorage.getItem("savedUrl");
    setLoad(true);

    const response = await getPlaylist(
      input.length > 0
        ? input
        : retrievedUrl ||
            "https://open.spotify.com/playlist/739UpZIZldjAMBSiAZjz1q?si=4e351f648aa348b3"
    );
    setHtml(response.html);

    setLoad(false);

    input && localStorage.setItem("savedUrl", input);
    setInput("");
  };

  useEffect(() => {
    if (end && checkbox) getList();
  }, [end]);

  useEffect(() => {
    getList();
  }, [])

  return (
    <div className="w-full lg:mr-16 md:mr-8 text-center flex flex-col sm:items-center">
      <section className="flex justify-between mx-16 md:mx-0 md:w-full">
        <input
          className="w-full bg-[#44475a] bg-opacity-80 text-white py-1 px-2 border-2 outline- border-[#ff79c6] font-mono rounded-lg mb-4"
          type="text"
          value={input}
          placeholder="insert a url..."
          onChange={({ target }: { target: HTMLInputElement }) =>
            setInput(target.value)
          }
        />
        <button
          className="w-38 h-9 py-1.5 px-4 ml-4 font-mono bg-[#ff79c6] rounded-lg text-white disabled:opacity-50"
          disabled={input.length <= 24}
          onClick={getList}
        >
          load!
        </button>
      </section>
      {load ? (
        <p className="text-white font-mono">Loading...</p>
      ) : (
        html && (
          <section className="w-full">
            <div
              className="opacity-90 mx-16 md:mx-0"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </section>
        )
      )}
      <h3 className="m-auto w-auto max-w-xs bg-[#ff79c6]/80 text-white text-xs rounded-lg px-3 py-2 font-mono mt-4">
        Log in to Spotify to play full songs.
      </h3>
    </div>
  );
}

export default Player;
