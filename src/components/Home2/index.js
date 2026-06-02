import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  Scene,
  BgImage,
  Overlay,
  DustParticle,
  Brand,
  MusicBtn,
  BartenderWrap,
  Counter,
  DialogBox,
  NavBtn,
} from "./elements";
import { useMusic } from "../../pages/_app";

// ─── Constants ────────────────────────────────────────────────────────────────

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
  "Welcome to NIX Tavern. A frontend developer's digital records. Hover over the bartender to begin.";
const HOVER_DIALOGS = [
  "What'll it be tonight?",
  "Need something? I keep records of everything here.",
  "Take your time. The night is young.",
];

const NAV_BTNS = [
  { label: "Projects", path: "/projects", variant: "ghost", delay: "0s" },

  { label: "About", path: "/about", variant: "ghost", delay: "0.21s" },

  { label: "Skills", path: "/skills", variant: "ghost", delay: "0.07s" },
  { label: "Contact", path: "/contact", variant: "ghost", delay: "0.14s" },
];

const TIMEOUT_SEC = 15;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  const isTouchDevice = () =>
    typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  // di dalam component
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(isTouchDevice());
  }, []);
  const router = useRouter();
  const { playing, toggleMusic } = useMusic();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogText, setDialog] = useState(IDLE_DIALOG);
  const [timeLeft, setTimeLeft] = useState(TIMEOUT_SEC);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  // preload hover image
  useEffect(() => {
    const img = new Image();
    img.src = "/images/bartender-nix-2.png";
  }, []);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  function openMenu() {
    // pick a random hover dialog
    const line =
      HOVER_DIALOGS[Math.floor(Math.random() * HOVER_DIALOGS.length)];
    setDialog(line);
    setMenuOpen(true);
    setTimeLeft(TIMEOUT_SEC);

    // clear any existing timers
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);

    // countdown ticker
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // auto-close after 15s
    timeoutRef.current = setTimeout(() => {
      closeMenu();
    }, TIMEOUT_SEC * 1000);
  }

  function closeMenu() {
    setMenuOpen(false);
    setDialog(IDLE_DIALOG);
    setTimeLeft(TIMEOUT_SEC);
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
  }

  function handleBartenderEnter() {
    if (!menuOpen) openMenu();
  }

  function handleNavClick(e, path) {
    e.stopPropagation();
    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);
    router.push(path);
  }

  // click outside dialog to close menu
  function handleSceneClick() {
    if (menuOpen) closeMenu();
  }

  const timeoutPct = (timeLeft / TIMEOUT_SEC) * 100;

  return (
    <Scene onClick={handleSceneClick}>
      <BgImage src="/images/tavern-bg.png" alt="tavern" />
      <Overlay />

      {DUST.map((d, i) => (
        <DustParticle key={i} {...d} />
      ))}

      {/* ── Brand only — no navbar ── */}
      <Brand>
        <span className="brand-main">NIX</span>
        <span className="brand-sub">portfolio &amp; works</span>
      </Brand>

      {/* ── Music ── */}
      <MusicBtn
        $playing={playing}
        onClick={(e) => {
          e.stopPropagation();
          toggleMusic();
        }}
        aria-label="toggle music"
      >
        <span className="note">{playing ? "♫" : "♪"}</span>
      </MusicBtn>

      {/* ── Bartender ── */}
      <BartenderWrap
        onMouseEnter={handleBartenderEnter}
        onClick={(e) => {
          e.stopPropagation();
          if (!menuOpen) {
            openMenu();
          }
        }}
      >
        <img
          className="idle"
          src="/images/bartender-nix-1.png"
          alt="bartender"
        />
        <img
          className="glass"
          src="/images/bartender-nix-2.png"
          alt="bartender with glass"
        />
        <div className="glow" />
      </BartenderWrap>

      <Counter />

      {/* ── Dialog ── */}
      <DialogBox onClick={(e) => e.stopPropagation()}>
        <div className="corner-tr" />
        <div className="corner-bl" />
        <div className="tag">SYSTEM MESSAGE</div>
        <div className="text">{dialogText}</div>

        {menuOpen ? (
          <>
            <div className="nav-btns">
              {NAV_BTNS.map((btn) => (
                <NavBtn
                  key={btn.label}
                  $variant={btn.variant}
                  $delay={btn.delay}
                  onClick={(e) => handleNavClick(e, btn.path)}
                >
                  {btn.label}
                </NavBtn>
              ))}
            </div>
            {/* timeout progress bar */}
            <div className="timeout-bar-wrap">
              <div
                className="timeout-bar"
                style={{ width: `${timeoutPct}%` }}
              />
            </div>
          </>
        ) : (
          <div className="hint">
            {isTouch
              ? "↑ TAP THE BARTENDER TO BEGIN"
              : "↑ HOVER THE BARTENDER TO BEGIN"}
          </div>
        )}
      </DialogBox>
    </Scene>
  );
}
