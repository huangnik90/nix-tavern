import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Scene,
  BgImage,
  Overlay,
  DustParticle,
  Navbar,
  MusicBtn,
  BartenderWrap,
  Counter,
  DialogBox,
} from "./elements";
import { useMusic } from "../../pages/_app";
const DUST = [
  { $left: "10%", $top: "70%", $size: "4px", $duration: "7s", $delay: "0s" },
  { $left: "20%", $top: "60%", $size: "3px", $duration: "9s", $delay: "1s" },
  { $left: "30%", $top: "75%", $size: "5px", $duration: "8s", $delay: "2s" },
  { $left: "42%", $top: "65%", $size: "3px", $duration: "11s", $delay: "0.5s" },
  { $left: "55%", $top: "72%", $size: "4px", $duration: "7s", $delay: "3s" },
  { $left: "63%", $top: "68%", $size: "3px", $duration: "10s", $delay: "1.5s" },
  { $left: "75%", $top: "74%", $size: "5px", $duration: "8s", $delay: "4s" },
  { $left: "85%", $top: "62%", $size: "3px", $duration: "9s", $delay: "2s" },
  { $left: "15%", $top: "55%", $size: "3px", $duration: "12s", $delay: "5s" },
  { $left: "90%", $top: "70%", $size: "4px", $duration: "6s", $delay: "0s" },
];

const IDLE_DIALOG =
  "Welcome to NIX. A quiet tavern where a web developer keeps his records. Try hovering over the bartender.";

const HOVER_DIALOGS = [
  "Need something? I've got a few projects lined up.",
  "Take a look. Been working on some things.",
];

export default function Home() {
  const router = useRouter();
  const [dialogText, setDialog] = useState(IDLE_DIALOG);

  const { playing, toggleMusic } = useMusic();

  function onBartenderEnter() {
    const line =
      HOVER_DIALOGS[Math.floor(Math.random() * HOVER_DIALOGS.length)];
    setDialog(line);
  }

  function onBartenderLeave() {
    setDialog(IDLE_DIALOG);
  }

  function goProjects() {
    router.push("/projects");
  }
  useEffect(() => {
    const img = new Image();
    img.src = "/images/bartender-nix-2.png";
  }, []);
  return (
    <Scene>
      {/* ── Background ── */}
      <BgImage src="/images/tavern-bg.png" alt="tavern" />
      <Overlay />

      {/* ── Dust ── */}
      {DUST.map((d, i) => (
        <DustParticle key={i} {...d} />
      ))}

      {/* ── Navbar ── */}
      <Navbar>
        <div className="brand">
          <span className="brand-main">NIX</span>
          <span className="brand-sub">portfolio &amp; works</span>
        </div>
        <div className="nav-links">
          <span className="nav-link active" onClick={goProjects}>
            Projects
          </span>
          <span className="nav-link" onClick={() => router.push("/skills")}>
            Skills
          </span>
          <span className="nav-link" onClick={() => router.push("/contact")}>
            Contact
          </span>
        </div>
        <div className="nav-icons">
          <div
            className="nav-icon"
            title="About me"
            onClick={() => router.push("/about")}
          >
            ○
          </div>
          <div className="nav-icon" title="Resume">
            ↓
          </div>
        </div>
      </Navbar>

      {/* ── Music ── */}
      <MusicBtn
        $playing={playing}
        onClick={toggleMusic}
        aria-label="toggle music"
      >
        <span className="note">{playing ? "♫" : "♪"}</span>
      </MusicBtn>

      {/* ── Bartender ── */}
      <BartenderWrap
        onMouseEnter={onBartenderEnter}
        onMouseLeave={onBartenderLeave}
        onClick={goProjects}
      >
        <span className="tip">view projects</span>
        <img
          className="idle"
          src="/images/bartender-nix-1.png"
          alt="bartender"
        />
        <img
          className="glass"
          src="/images/bartender-nix-2.png"
          alt="bartender holding glass-2"
        />
        <div className="glow" />
      </BartenderWrap>

      {/* ── Counter (foreground) ── */}
      <Counter />

      {/* ── Dialog ── */}
      <DialogBox>
        <div className="corner-tr" />
        <div className="corner-bl" />
        <div className="tag">SYSTEM MESSAGE</div>
        <div className="text">{dialogText}</div>
        <div className="hint">CLICK TO INTERACT ˅</div>
      </DialogBox>
    </Scene>
  );
}
