import styled, { keyframes, css } from "styled-components";

// ─── Animations ───────────────────────────────────────────────────────────────

const breathe = keyframes`
  0%, 100% { transform: translateX(-50%) translateY(0px); }
  50%       { transform: translateX(-50%) translateY(-8px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(0.5rem); }
  to   { opacity: 1; transform: translateY(0); }
`;

const floatDust = keyframes`
  0%   { opacity: 0;   transform: translateY(0) translateX(0); }
  15%  { opacity: 1; }
  85%  { opacity: 0.4; }
  100% { opacity: 0;   transform: translateY(-7rem) translateX(0.75rem); }
`;

const glowPulse = keyframes`
  0%, 100% { opacity: 0.15; }
  50%       { opacity: 0.35; }
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
  from { opacity: 0; transform: translateY(0.375rem); }
  to   { opacity: 1; transform: translateY(0); }
`;

const hintBlink = keyframes`
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 0.9; }
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
  /* stronger at bottom so dialog text is always readable */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.7) 80%,
    rgba(0, 0, 0, 0.85) 100%
  );
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

// ─── Brand (replaces navbar) ──────────────────────────────────────────────────

export const Brand = styled.div`
  position: absolute;
  top: 1.25rem;
  left: 1.75rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  line-height: 1;
  pointer-events: none;

  .brand-main {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 3vw, 2rem);
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 0.625rem;
    text-transform: uppercase;
    text-shadow: 0 0 2rem rgba(245, 166, 35, 0.35);
  }

  .brand-sub {
    font-size: clamp(0.375rem, 0.9vw, 0.5rem);
    color: rgba(245, 166, 35, 0.45);
    letter-spacing: 0.3125rem;
    text-transform: uppercase;
    margin-top: 0.25rem;
    font-family: var(--font-mono);
  }
`;

// ─── Music Button ─────────────────────────────────────────────────────────────

export const MusicBtn = styled.button`
  position: absolute;
  top: 1.25rem;
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
  position: absolute;
  bottom: 12rem;
  left: 50%;
  transform: translateX(-50%);
  width: clamp(16rem, 38vw, 32rem);
  height: clamp(20rem, 55vh, 38rem);
  cursor: pointer;
  z-index: 5;
  animation: ${breathe} 4s ease-in-out infinite;

  /* mobile */
  @media (max-width: 30rem) {
    width: clamp(16rem, 75vw, 22rem);
    height: clamp(20rem, 52vh, 28rem);
    bottom: 16rem;
  }

  @media (min-width: 48rem) and (max-width: 80rem) {
    bottom: 17rem; /* atur posisi vertikal */
    width: clamp(26rem, 55vw, 36rem); /* contoh lebih besar */
    height: clamp(30rem, 65vh, 42rem);
    .idle,
    .glass {
      transform: scale(1.5); /* perbesaran 50% */
    }
  }

  &:hover .idle {
    opacity: 0;
  }
  &:hover .glass {
    opacity: 1;
  }
  &:hover .glow {
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
    transition:
      opacity 0.25s ease,
      transform 0.2s ease;
    user-select: none;
    pointer-events: none;
  }

  .idle {
    opacity: 1;
  }
  .glass {
    opacity: 0;
  }

  /* perbesaran langsung pada gambar */
  @media (min-width: 80rem) {
    .idle,
    .glass {
      transform: scale(1.15); /* desktop +15% */
    }
  }
  @media (max-width: 48rem) {
    .idle,
    .glass {
      transform: scale(1.5); /* iPad +50% */
    }
  }
  @media (max-width: 30rem) {
    .idle,
    .glass {
      transform: scale(1.3); /* mobile +30% */
    }
  }

  .glow {
    position: absolute;
    bottom: -0.375rem;
    left: 50%;
    transform: translateX(-50%);
    width: clamp(7rem, 18vw, 13rem);
    height: 1rem;
    background: rgba(220, 170, 50, 0.2);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
    animation: ${glowPulse} 2.5s ease-in-out infinite;
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
  bottom: 6rem;
  left: 1.5rem;
  right: 1.5rem;
  background: rgba(8, 5, 2, 0.92);
  border: 1px solid var(--dialog-border);
  border-radius: 0.25rem;
  padding: 1rem 1.25rem 0.875rem;
  z-index: 8;
  animation: ${fadeIn} 0.4s ease both;

  /* corner decorations */
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
    font-size: clamp(0.9375rem, 2.2vw, 1.125rem);
    color: #f5f0e8;
    line-height: 1.7;
    font-family: var(--font-body);
    font-style: italic;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.8);
    min-height: 1.75rem;
  }

  .hint {
    font-size: clamp(0.5rem, 1.2vw, 0.5625rem);
    color: rgba(245, 166, 35, 0.5);
    letter-spacing: 0.15625rem;
    margin-top: 0.625rem;
    text-align: center;
    font-family: var(--font-mono);
    animation: ${hintBlink} 2s ease-in-out infinite;
  }

  .nav-btns {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.875rem;
    flex-wrap: wrap;

    @media (max-width: 30rem) {
      gap: 0.375rem;
    }
  }

  .timeout-bar-wrap {
    margin-top: 0.625rem;
    height: 0.125rem;
    background: rgba(245, 166, 35, 0.1);
    border-radius: 1rem;
    overflow: hidden;
  }

  .timeout-bar {
    height: 100%;
    background: rgba(245, 166, 35, 0.35);
    border-radius: 1rem;
    transition: width 1s linear;
  }

  /* ===== RESPONSIVE ===== */
  /* iPad (landscape & portrait) */
  @media (min-width: 48rem) and (max-width: 80rem) {
    bottom: 7rem;
    left: 2rem;
    right: 2rem;
  }

  /* Mobile landscape & small tablets */
  @media (max-width: 48rem) {
    bottom: 8rem;
    left: 1rem;
    right: 1rem;
    margin-bottom: env(safe-area-inset-bottom, 1rem);
  }

  /* Mobile portrait (iPhone) */
  @media (max-width: 30rem) {
    bottom: 9rem;
    left: 0.75rem;
    right: 0.75rem;
    padding: 0.875rem 1rem 0.75rem;
    margin-bottom: env(safe-area-inset-bottom, 1.5rem);
  }
`;

// ─── Nav Buttons ──────────────────────────────────────────────────────────────

export const NavBtn = styled.button`
  font-family: var(--font-mono);
  font-size: clamp(0.5625rem, 1.4vw, 0.6875rem);
  font-weight: 700;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  padding: 0.4375rem 1.125rem;
  border-radius: 0.1875rem;
  cursor: pointer;
  transition: all 0.18s;
  animation: ${btnFadeUp} 0.25s ${({ $delay }) => $delay || "0s"} ease both;
  white-space: nowrap;

  @media (max-width: 30rem) {
    padding: 0.375rem 0.875rem;
    font-size: 0.5625rem;
  }

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
          color: rgba(245, 166, 35, 0.75);
          border: 1px solid rgba(245, 166, 35, 0.3);
          &:hover {
            border-color: var(--primary-dim);
            color: var(--primary);
            background: rgba(245, 166, 35, 0.06);
          }
        `}
`;
