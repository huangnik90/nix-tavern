import styled, { keyframes, css } from "styled-components";

// ─── Animations ───────────────────────────────────────────────────────────────
const breathe = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0px); }
  50%       { transform: translateX(-50%) translateY(-6px); }
`;
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const floatDust = keyframes`
  0%   { opacity: 0;   transform: translateY(0) translateX(0); }
  15%  { opacity: 1; }
  85%  { opacity: 0.4; }
  100% { opacity: 0;   transform: translateY(-110px) translateX(12px); }
`;

const noteBouce = keyframes`
  from { transform: scale(1) rotate(-5deg); }
  to   { transform: scale(1.2) rotate(5deg); }
`;

const glowPulse = keyframes`
  0%, 100% { opacity: 0.15; }
  50%       { opacity: 0.3; }
`;

// ─── Scene Shell ──────────────────────────────────────────────────────────────

export const Scene = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  cursor: default;
`;

export const BgImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  user-select: none;
  pointer-events: none;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: var(--overlay);
  pointer-events: none;
`;

// ─── Dust Particles ───────────────────────────────────────────────────────────
export const DustParticle = styled.span`
  position: absolute;
  border-radius: 50%;
  background: rgba(245, 166, 35, 0.2);
  box-shadow: 0 0 6px rgba(245, 166, 35, 0.25);
  pointer-events: none;
  animation: ${floatDust} ${({ $duration }) => $duration || "9s"} linear
    infinite;
  animation-delay: ${({ $delay }) => $delay || "0s"};
  width: ${({ $size }) => $size || "3px"};
  height: ${({ $size }) => $size || "3px"};
  left: ${({ $left }) => $left};
  top: ${({ $top }) => $top};
`;

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const Navbar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 32px;
  z-index: 10;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7) 0%,
    transparent 100%
  );

  .brand {
    flex: 1;
    display: flex;
    flex-direction: column;
    line-height: 1;
  }

  .brand-main {
    font-family: "Cinzel", serif;
    font-size: 32px;
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 10px;
    text-transform: uppercase;
    text-shadow: 0 0 40px rgba(245, 166, 35, 0.3);
  }

  .brand-sub {
    font-size: 9px;
    color: rgba(245, 166, 35, 0.5);
    letter-spacing: 5px;
    text-transform: uppercase;
    margin-top: 4px;
    font-family: "JetBrains Mono", monospace;
  }

  .nav-links {
    display: flex;
    gap: 32px;
  }

  .nav-link {
    font-size: 0.8rem; /* naik dari 10px */
    font-weight: 800;
    color: rgba(220, 180, 80, 0.7); /* lebih terang */
    letter-spacing: 3px;
    cursor: pointer;
    transition: color 0.2s;
    text-transform: uppercase;
    padding-bottom: 3px;
    border-bottom: 1px solid transparent;
    font-family: var(--font-mono);

    &.active {
      color: #f0c866;
      border-bottom-color: rgba(240, 180, 60, 0.5);
    }

    &:hover {
      color: rgba(232, 184, 74, 0.8);
    }
  }

  .nav-icons {
    display: flex;
    gap: 10px;
    margin-left: 32px;
  }

  .nav-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid rgba(180, 120, 40, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:
      border-color 0.2s,
      color 0.2s;
    font-size: 12px;
    color: rgba(200, 155, 55, 0.55);

    &:hover {
      border-color: rgba(232, 184, 74, 0.55);
      color: rgba(232, 184, 74, 0.9);
    }
  }
`;

// ─── Music Toggle ─────────────────────────────────────────────────────────────
const pulseRing = keyframes`
  0%   { transform: scale(1);   opacity: 0.6; }
  70%  { transform: scale(1.5); opacity: 0; }
  100% { transform: scale(1);   opacity: 0; }
`;
const noteBounce = keyframes`
  from { transform: scale(1) rotate(-5deg); }
  to   { transform: scale(1.2) rotate(5deg); }
`;
export const MusicBtn = styled.button`
  position: absolute;
  top: 68px;
  right: 20px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(15, 9, 3, 0.65);
  border: 1px solid rgba(245, 166, 35, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s;
  cursor: pointer;

  /* pulse ring saat belum playing */
  &::before {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 1px solid rgba(245, 166, 35, 0.4);
    animation: ${pulseRing} 2s ease-out infinite;
    pointer-events: none;
  }

  &:hover {
    border-color: var(--primary);
    background: rgba(245, 166, 35, 0.15);
    transform: scale(1.1);
  }

  .note {
    font-size: 15px;
    color: rgba(245, 166, 35, 0.8);
    user-select: none;
    transition: color 0.2s;
  }

  ${({ $playing }) =>
    $playing &&
    css`
      border-color: var(--primary);
      background: rgba(245, 166, 35, 0.12);

      &::before {
        animation: none; /* stop pulse saat playing */
      }

      .note {
        color: var(--primary);
        animation: ${noteBounce} 0.7s infinite alternate;
      }
    `}
`;

// ─── Bartender ────────────────────────────────────────────────────────────────

export const BartenderWrap = styled.div`
  animation: ${breathe} 3.5s ease-in-out infinite;
  position: absolute;
  /* sits behind the counter — bottom aligns with counter top */
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: 720px;
  height: 760px;
  cursor: pointer;
  z-index: 5;

  &:hover .idle {
    opacity: 0;
  }
  &:hover .glass {
    opacity: 1;
  }
  &:hover .glow {
    opacity: 1;
  }
  &:hover .tip {
    opacity: 1;
  }

  .idle,
  .glass {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: bottom center;
    transition: opacity 0.22s ease;
    user-select: none;
    pointer-events: none;
  }

  .idle {
    opacity: 1;
  }
  .glass {
    opacity: 0;
  }

  .glow {
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 16px;
    background: rgba(220, 170, 50, 0.18);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
    animation: ${glowPulse} 2.5s ease-in-out infinite;
  }

  .tip {
    position: absolute;
    top: -36px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(232, 184, 74, 0.93);
    color: #1a0800;
    font-size: 10px;
    font-weight: 700;
    padding: 4px 14px;
    border-radius: 12px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
    letter-spacing: 0.5px;
    font-family: var(--font-mono);
  }
`;

// ─── Counter foreground strip ─────────────────────────────────────────────────

export const Counter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 88px;
  z-index: 6;
  pointer-events: none;

  /* dark wood top edge */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 14px;
    background: #3a1a06;
    border-top: 2px solid #7a3c10;
    box-shadow: 0 -6px 30px rgba(0, 0, 0, 0.6);
  }

  /* counter face */
  &::after {
    content: "";
    position: absolute;
    top: 14px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1e0d04;
  }
`;

// ─── Dialog Box ───────────────────────────────────────────────────────────────

export const DialogBox = styled.div`
  position: absolute;
  bottom: 100px; /* sits just above the counter */
  left: 28px;
  right: 28px;
  background: var(--dialog-bg);
  border: 1px solid var(--dialog-border);
  border-radius: 4px;
  padding: 14px 18px 12px;
  z-index: 8;
  animation: ${fadeIn} 0.4s ease both;

  /* corner decorations */
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-color: rgba(220, 165, 45, 0.55);
  }
  &::before {
    top: -1px;
    left: -1px;
    border-top: 1px solid;
    border-left: 1px solid;
  }
  &::after {
    bottom: -1px;
    right: -1px;
    border-bottom: 1px solid;
    border-right: 1px solid;
  }

  .corner-tr {
    position: absolute;
    top: -1px;
    right: -1px;
    width: 10px;
    height: 10px;
    border-top: 1px solid rgba(220, 165, 45, 0.55);
    border-right: 1px solid rgba(220, 165, 45, 0.55);
  }
  .corner-bl {
    position: absolute;
    bottom: -1px;
    left: -1px;
    width: 10px;
    height: 10px;
    border-bottom: 1px solid rgba(220, 165, 45, 0.55);
    border-left: 1px solid rgba(220, 165, 45, 0.55);
  }

  .tag {
    font-size: 8px;
    color: rgba(220, 165, 45, 0.42);
    letter-spacing: 2.5px;
    margin-bottom: 6px;
    font-family: var(--font-mono);
  }

  .text {
    font-size: 15px;
    color: var(--cream);
    line-height: 1.65;
    font-family: var(--font-body);
    font-style: italic;
    transition: opacity 0.2s;
    min-height: 26px;
  }

  .hint {
    font-size: 8px;
    color: rgba(180, 130, 40, 0.35);
    letter-spacing: 1.5px;
    margin-top: 8px;
    text-align: right;
    font-family: var(--font-mono);
  }
`;
