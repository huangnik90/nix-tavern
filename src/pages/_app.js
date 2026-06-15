import { useState, useRef, useEffect, createContext, useContext } from "react";
import "../styles/globals.css";
import Head from "next/head";
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
      <Head>
        {/* Pindahkan tag viewport dari _document.js ke sini */}
        <title>Nikolas Wijaya | Software Engineer</title>

        <meta
          name="description"
          content="Software Engineer specializing in React, Next.js, TypeScript, and modern web development. Explore my projects, skills, and experience."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </MusicContext.Provider>
  );
}
