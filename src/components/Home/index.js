import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/router";
import {
  Scene,
  BgImage,
  Overlay,
  MouseGlow,
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
  { label: "About", path: "/about", variant: "ghost", delay: "0.07s" },
  { label: "Skills", path: "/skills", variant: "ghost", delay: "0.14s" },
  { label: "Contact", path: "/contact", variant: "ghost", delay: "0.21s" },
];

const TIMEOUT_SEC = 15;

// ─── Parallax strength (lower = more subtle) ──────────────────────────────────
const PARALLAX_STRENGTH = 12; // px max offset

// ─── Component ────────────────────────────────────────────────────────────────

export default function Home() {
  const router = useRouter();
  const { playing, toggleMusic } = useMusic();

  const [isTouch, setIsTouch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dialogText, setDialog] = useState(IDLE_DIALOG);
  const [timeLeft, setTimeLeft] = useState(TIMEOUT_SEC);

  // Parallax & mouse glow state
  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: -999, y: -999 });

  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);
  const rafRef = useRef(null);

  // ── Touch detection ──────────────────────────────────────────────────────────
  useEffect(() => {
    setIsTouch(
      typeof window !== "undefined" &&
        window.matchMedia("(hover: none)").matches,
    );
  }, []);

  // ── Preload hover image ──────────────────────────────────────────────────────
  useEffect(() => {
    const img = new Image();
    img.src = "/images/bartender-nix-2.png";
  }, []);

  // ── Mouse parallax & glow ────────────────────────────────────────────────────
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Raw mouse position for glow
      setMousePos({ x: e.clientX, y: e.clientY });

      // Normalise -1 to 1 for parallax
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;

      // rAF so we don't thrash layout
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setBgOffset({
          x: -nx * PARALLAX_STRENGTH,
          y: -ny * PARALLAX_STRENGTH,
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── Cleanup timers on unmount ─────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
    };
  }, []);

  // ── Menu logic ────────────────────────────────────────────────────────────────
  const openMenu = useCallback(() => {
    sessionStorage.setItem("nix_visited", "1");

    const line =
      HOVER_DIALOGS[Math.floor(Math.random() * HOVER_DIALOGS.length)];
    setDialog(line);
    setMenuOpen(true);
    setTimeLeft(TIMEOUT_SEC);

    clearTimeout(timeoutRef.current);
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    timeoutRef.current = setTimeout(() => closeMenu(), TIMEOUT_SEC * 1000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── sessionStorage: return visit → skip idle ──────────────────────────────────
  useEffect(() => {
    const hasVisited = sessionStorage.getItem("nix_visited");
    if (hasVisited) openMenu();
  }, [openMenu]);

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

  function handleSceneClick() {
    if (menuOpen) closeMenu();
  }

  const timeoutPct = (timeLeft / TIMEOUT_SEC) * 100;

  return (
    <Scene onClick={handleSceneClick}>
      {/* ── Parallax background ── */}
      <BgImage
        src="/images/tavern-bg.png"
        alt="tavern"
        $x={bgOffset.x}
        $y={bgOffset.y}
      />

      <Overlay />

      {/* ── Mouse-follow ambient glow ── */}
      <MouseGlow $x={mousePos.x} $y={mousePos.y} />

      {/* ── Dust particles ── */}
      {DUST.map((d, i) => (
        <DustParticle key={i} {...d} />
      ))}

      {/* ── Brand ── */}
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
          if (!menuOpen) openMenu();
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
