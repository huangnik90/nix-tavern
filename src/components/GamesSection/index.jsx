// ═══════════════════════════════════════════════════════════════════════════
// STEP 2: Create src/components/GamesSection/index.js with this code
// ═══════════════════════════════════════════════════════════════════════════

import { useState } from "react";
import styled from "styled-components";
import SudokuGame from "../SudokuGame";
import MemoryGame from "../MemoryGame";
import OddEvenGame from "../OddEvenGame";
import { useMusic } from "../../pages/_app";
import { MusicBtn, BgImage } from "../Home/elements";
import NixNavbar from "../shared/NixNavbar";

// ─── Styled Components ────────────────────────────────────────────────────────

const Wrapper = styled.div`
  display: flex;
  min-height: 100dvh;
  height: 100dvh;
  background: #0d0d0d;
  font-family: monospace;
  color: #f0e6c8;
  position: relative;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10;
`;

const Sidebar = styled.aside`
  width: 220px;
  flex-shrink: 0;
  border-right: 1px solid #222;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transform: ${({ $open }) => ($open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.25s ease;
  background: #0d0d0d;
  z-index: 20;
`;

const SidebarHeader = styled.div`
  padding: 0 24px 24px;
  border-bottom: 1px solid #222;
  margin-bottom: 8px;
  font-size: 10px;
  color: #555;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const SidebarButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 24px;
  background: ${({ $active }) =>
    $active ? "rgba(247,201,72,0.08)" : "transparent"};
  border: none;
  border-left: ${({ $active }) =>
    $active ? "2px solid #f7c948" : "2px solid transparent"};
  color: ${({ $active }) => ($active ? "#f7c948" : "#666")};
  cursor: pointer;
  text-align: left;
  width: 100%;
  transition: all 0.15s;
  -webkit-tap-highlight-color: transparent;
`;

const SidebarInitial = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  flex-shrink: 0;
  background: ${({ $active }) =>
    $active ? "rgba(247,201,72,0.15)" : "#1a1a1a"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: ${({ $active }) => ($active ? "#f7c948" : "#555")};
`;

const SidebarLabel = styled.div`
  font-size: 13px;
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
`;

const SidebarSub = styled.div`
  font-size: 10px;
  color: #444;
  margin-top: 1px;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: clamp(24px, 5vw, 48px) clamp(20px, 6vw, 60px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  min-width: 0;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

const HamburgerButton = styled.button`
  background: transparent;
  border: 1px solid #2a2a2a;
  border-radius: 6px;
  padding: 6px 10px;
  color: #888;
  cursor: pointer;
  font-family: monospace;
  font-size: 16px;
  line-height: 1;
  -webkit-tap-highlight-color: transparent;
`;

const GameEyebrow = styled.div`
  font-size: 10px;
  color: #555;
  letter-spacing: 3px;
  text-transform: uppercase;
`;

const GameTitle = styled.h1`
  font-size: clamp(20px, 5vw, 28px);
  font-weight: 700;
  margin: 0;
  color: #f0e6c8;
  line-height: 1.2;
`;

const GameSub = styled.div`
  font-size: 11px;
  color: #555;
  margin-top: 2px;
`;

const GameArea = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 8px;
`;

// ─── Games Config ────────────────────────────────────────────────────────────

const GAMES = [
  {
    id: "sudoku",
    initial: "S",
    label: "Sudoku",
    sub: "Fill the grid",
    component: SudokuGame,
  },
  {
    id: "memory",
    initial: "M",
    label: "Memory Cards",
    sub: "Tavern edition",
    component: MemoryGame,
  },
  {
    id: "oddeven",
    initial: "O",
    label: "Odd or Even",
    sub: "Dice gamble",
    component: OddEvenGame,
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function GamesSection() {
  const [active, setActive] = useState("sudoku");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { playing, toggleMusic } = useMusic();

  const activeGame = GAMES.find((g) => g.id === active);
  const ActiveGame = activeGame.component;

  function selectGame(id) {
    setActive(id);
    setSidebarOpen(false);
  }

  return (
    <>
      <NixNavbar />
      <Wrapper>
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
        {sidebarOpen && <Overlay onClick={() => setSidebarOpen(false)} />}

        <Sidebar $open={sidebarOpen}>
          <SidebarHeader>Games«</SidebarHeader>
          {GAMES.map((g) => (
            <SidebarButton
              key={g.id}
              $active={active === g.id}
              onClick={() => selectGame(g.id)}
            >
              <SidebarInitial $active={active === g.id}>
                {g.initial}
              </SidebarInitial>
              <div>
                <SidebarLabel $active={active === g.id}>{g.label}</SidebarLabel>
                <SidebarSub>{g.sub}</SidebarSub>
              </div>
            </SidebarButton>
          ))}
        </Sidebar>

        <Main>
          <TopBar>
            <HamburgerButton
              onClick={() => setSidebarOpen(true)}
              aria-label="Open games menu"
            >
              ☰
            </HamburgerButton>
            <div>
              <GameTitle>{activeGame.label}</GameTitle>
              <GameSub>{activeGame.sub}</GameSub>
            </div>
          </TopBar>

          <GameArea>
            <ActiveGame key={active} />
          </GameArea>
        </Main>
      </Wrapper>
    </>
  );
}
