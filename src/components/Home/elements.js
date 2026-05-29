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

const glowPulse = keyframes`
  0%, 100% { opacity: 0.15; }
  50%       { opacity: 0.3; }
`;

const pulseRing = keyframes`
  0%   { transform: scale(1);   opacity: 0.6; }
  70%  { transform: scale(1.5); opacity: 0; }
  100% { transform: scale(1);   opacity: 0; }
`;

const noteBounce = keyframes`
  from { transform: scale(1) rotate(-5deg); }
  to   { transform: scale(1.2) rotate(5deg); }
`;

const btnFadeUp = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
`;

// ─── Scene ────────────────────────────────────────────────────────────────────

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

// ─── Dust ─────────────────────────────────────────────────────────────────────

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
  height: 3.75rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
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
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 3vw, 2rem);
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 0.625rem;
    text-transform: uppercase;
    text-shadow: 0 0 2.5rem rgba(245, 166, 35, 0.3);
  }

  .brand-sub {
    font-size: clamp(0.4rem, 1vw, 0.5625rem);
    color: rgba(245, 166, 35, 0.5);
    letter-spacing: 0.3125rem;
    text-transform: uppercase;
    margin-top: 0.25rem;
    font-family: var(--font-mono);
  }

  .nav-links {
    display: flex;
    gap: 2rem;

    @media (max-width: 30rem) {
      gap: 1rem;
    }
  }

  .nav-link {
    font-size: clamp(0.5rem, 1.2vw, 0.8rem);
    font-weight: 800;
    color: rgba(220, 180, 80, 0.7);
    letter-spacing: 0.1875rem;
    cursor: pointer;
    transition: color 0.2s;
    text-transform: uppercase;
    padding-bottom: 0.1875rem;
    border-bottom: 1px solid transparent;
    font-family: var(--font-mono);

    &.active {
      color: #f0c866;
      border-bottom-color: rgba(240, 180, 60, 0.5);
    }

    &:hover {
      color: rgba(232, 184, 74, 0.9);
    }
  }

  .nav-icons {
    display: flex;
    gap: 0.625rem;
    margin-left: 2rem;

    @media (max-width: 30rem) {
      margin-left: 1rem;
      gap: 0.375rem;
    }
  }

  .nav-icon {
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    border: 1px solid rgba(180, 120, 40, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:
      border-color 0.2s,
      color 0.2s;
    font-size: 0.75rem;
    color: rgba(200, 155, 55, 0.55);

    &:hover {
      border-color: rgba(232, 184, 74, 0.55);
      color: rgba(232, 184, 74, 0.9);
    }
  }
`;

// ─── Music Button ─────────────────────────────────────────────────────────────

export const MusicBtn = styled.button`
  position: absolute;
  top: 4.25rem;
  right: 1.25rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: rgba(15, 9, 3, 0.65);
  border: 1px solid rgba(245, 166, 35, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: all 0.2s;
  cursor: pointer;

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
    font-size: 0.9375rem;
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
        animation: none;
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
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(14rem, 30vw, 26rem);
  height: clamp(18rem, 40vh, 29rem);
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
    width: clamp(8rem, 15vw, 11rem);
    height: 1rem;
    background: rgba(220, 170, 50, 0.18);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
    animation: ${glowPulse} 2.5s ease-in-out infinite;
  }

  .tip {
    position: absolute;
    top: -2.25rem;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(232, 184, 74, 0.93);
    color: #1a0800;
    font-size: 0.625rem;
    font-weight: 700;
    padding: 0.25rem 0.875rem;
    border-radius: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
    letter-spacing: 0.03125rem;
    font-family: var(--font-mono);
  }
`;

// ─── Counter ──────────────────────────────────────────────────────────────────

export const Counter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5.5rem;
  z-index: 6;
  pointer-events: none;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 0.875rem;
    background: #3a1a06;
    border-top: 2px solid #7a3c10;
    box-shadow: 0 -6px 30px rgba(0, 0, 0, 0.6);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0.875rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1e0d04;
  }
`;

// ─── Dialog Box ───────────────────────────────────────────────────────────────

export const DialogBox = styled.div`
  position: absolute;
  bottom: 6.25rem;
  left: 1.75rem;
  right: 1.75rem;
  background: var(--dialog-bg);
  border: 1px solid var(--dialog-border);
  border-radius: 0.25rem;
  padding: 0.875rem 1.125rem 0.75rem;
  z-index: 8;
  animation: ${fadeIn} 0.4s ease both;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 1px solid rgba(220, 165, 45, 0.55);
    border-left: 1px solid rgba(220, 165, 45, 0.55);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: 0.625rem;
    height: 0.625rem;
    border-bottom: 1px solid rgba(220, 165, 45, 0.55);
    border-right: 1px solid rgba(220, 165, 45, 0.55);
  }

  .corner-tr {
    position: absolute;
    top: -1px;
    right: -1px;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 1px solid rgba(220, 165, 45, 0.55);
    border-right: 1px solid rgba(220, 165, 45, 0.55);
  }

  .corner-bl {
    position: absolute;
    bottom: -1px;
    left: -1px;
    width: 0.625rem;
    height: 0.625rem;
    border-bottom: 1px solid rgba(220, 165, 45, 0.55);
    border-left: 1px solid rgba(220, 165, 45, 0.55);
  }

  .tag {
    font-size: 0.5rem;
    color: rgba(220, 165, 45, 0.42);
    letter-spacing: 0.15625rem;
    margin-bottom: 0.375rem;
    font-family: var(--font-mono);
  }

  .text {
    font-size: clamp(0.8125rem, 2vw, 0.9375rem);
    color: var(--neutral);
    line-height: 1.65;
    font-family: var(--font-body);
    font-style: italic;
    transition: opacity 0.2s;
    min-height: 1.625rem;
  }

  .hint {
    font-size: 0.5rem;
    color: rgba(180, 130, 40, 0.35);
    letter-spacing: 0.09375rem;
    margin-top: 0.5rem;
    text-align: right;
    font-family: var(--font-mono);
  }

  /* nav buttons — shown on hover */
  .nav-btns {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.75rem;
    flex-wrap: wrap;
  }
`;

export const NavBtn = styled.button`
  font-family: var(--font-mono);
  font-size: clamp(0.5rem, 1.2vw, 0.625rem);
  font-weight: 700;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  padding: 0.375rem 1rem;
  border-radius: 0.1875rem;
  cursor: pointer;
  transition: all 0.18s;
  animation: ${btnFadeUp} 0.25s ${({ $delay }) => $delay || "0s"} ease both;
  opacity: 0;
  animation-fill-mode: forwards;

  ${({ $variant }) =>
    $variant === "primary"
      ? css`
          background: var(--primary);
          color: var(--tertiary);
          border: 1px solid var(--primary);
          &:hover {
            background: transparent;
            color: var(--primary);
          }
        `
      : css`
          background: transparent;
          color: var(--primary-dim);
          border: 1px solid var(--dialog-border);
          &:hover {
            border-color: var(--primary-dim);
            color: var(--primary);
          }
        `}
`;
