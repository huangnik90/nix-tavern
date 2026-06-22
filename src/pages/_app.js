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
        <title>Nikolas Wijaya | Web Developer</title>
        <meta
          name="description"
          content="Frontend Developer specializing in React, Next.js, and TypeScript. Based in Indonesia."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Open Graph */}
        <meta property="og:title" content="Nikolas Wijaya | Web Developer" />
        <meta
          property="og:description"
          content="Frontend Developer specializing in React, Next.js, and TypeScript. Based in Indonesia."
        />
        <meta
          property="og:image"
          content="https://www.bynik.my.id/images/og-preview.webp"
        />
        <meta property="og:url" content="https://www.bynik.my.id" />
        <meta property="og:type" content="website" />

        {/* Twitter/X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nikolas Wijaya | Web Developer" />
        <meta
          name="twitter:description"
          content="Frontend Developer specializing in React, Next.js, and TypeScript. Based in Indonesia."
        />
        <meta
          name="twitter:image"
          content="https://www.bynik.my.id/images/og-preview.webp"
        />
      </Head>
      <Component {...pageProps} />
    </MusicContext.Provider>
  );
}
