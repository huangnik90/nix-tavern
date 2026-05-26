import { useState, useRef, useEffect, createContext, useContext } from "react";
import "../styles/globals.css";

export const MusicContext = createContext();

export function useMusic() {
  return useContext(MusicContext);
}

export default function App({ Component, pageProps }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/audio/lounge.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    return () => audioRef.current?.pause();
  }, []);

  function toggleMusic() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying((p) => !p);
  }

  return (
    <MusicContext.Provider value={{ playing, toggleMusic }}>
      <Component {...pageProps} />
    </MusicContext.Provider>
  );
}
