import styled, { keyframes, css } from "styled-components";

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(1rem); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fillBar = keyframes`
  from { width: 0%; }
  to   { width: var(--fill); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0.5rem rgba(245, 166, 35, 0.2); }
  50%       { box-shadow: 0 0 1.5rem rgba(245, 166, 35, 0.4); }
`;

const stampIn = keyframes`
  from { opacity: 0; transform: scale(1.5); }
  to   { opacity: 1; transform: scale(1); }
`;

// ─── Scene ────────────────────────────────────────────────────────────────────

export const Scene = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: var(--font-body);
  display: flex;
  flex-direction: column;
`;

export const BgImage = styled.img`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  user-select: none;
  pointer-events: none;
  z-index: 0;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  pointer-events: none;
  z-index: 0;
`;

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const Navbar = styled.nav`
  position: relative;
  z-index: 10;
  height: 3.25rem;
  display: flex;
  align-items: center;
  padding: 0 1.75rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.75) 0%,
    transparent 100%
  );
  flex-shrink: 0;

  .back {
    font-family: var(--font-mono);
    font-size: 0.625rem;
    font-weight: 600;
    color: var(--primary-dim);
    letter-spacing: 0.125rem;
    cursor: pointer;
    transition: color 0.2s;
    text-transform: uppercase;
    white-space: nowrap;
    &:hover {
      color: var(--primary);
    }
  }

  .title {
    flex: 1;
    text-align: center;
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 0.5rem;
    text-transform: uppercase;
  }

  .spacer {
    width: 5rem;
  }

  @media (max-width: 48rem) {
    padding: 0 1rem;
    .spacer {
      width: 2rem;
    }
  }
`;

// ─── Scroll container ─────────────────────────────────────────────────────────

export const ScrollArea = styled.div`
  position: relative;
  z-index: 5;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 1.5rem 2rem 4rem;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 48rem) {
    padding: 1rem 1rem 4rem;
  }
`;

// ─── Adventurer Header ────────────────────────────────────────────────────────

export const AdventurerHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 2rem;
  animation: ${fadeUp} 0.4s ease both;

  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .profile-left {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .adventurer-tag {
    font-family: var(--font-mono);
    font-size: 0.5rem;
    color: var(--primary-dim);
    letter-spacing: 0.25rem;
    text-transform: uppercase;
  }

  .adventurer-name {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    line-height: 1;
    text-shadow: 0 0 2rem rgba(245, 166, 35, 0.3);
  }

  .adventurer-class {
    font-family: var(--font-mono);
    font-size: clamp(0.5rem, 1.5vw, 0.625rem);
    color: var(--neutral-dim);
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    margin-top: 0.25rem;
  }

  .profile-right {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;

    @media (max-width: 48rem) {
      gap: 1rem;
    }
  }

  .stat-block {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .stat-label {
    font-family: var(--font-mono);
    font-size: 0.5rem;
    color: var(--primary-dim);
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  .stat-value {
    font-family: var(--font-display);
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 0.1rem;
  }

  .stat-sub {
    font-family: var(--font-mono);
    font-size: 0.5rem;
    color: var(--neutral-dim);
    letter-spacing: 0.1rem;
  }

  .xp-bar-wrap {
    width: 6rem;
    height: 0.25rem;
    background: rgba(245, 166, 35, 0.15);
    border-radius: 1rem;
    margin-top: 0.375rem;
    overflow: hidden;
  }

  .xp-bar-fill {
    height: 100%;
    width: 75%;
    background: var(--primary);
    border-radius: 1rem;
    animation: ${glowPulse} 2s ease-in-out infinite;
  }
`;

export const HeaderDivider = styled.div`
  height: 1px;
  background: linear-gradient(to right, var(--primary-dim), transparent);
  margin-bottom: 2rem;
  opacity: 0.4;
`;

// ─── Grid layout ──────────────────────────────────────────────────────────────

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 56rem) {
    grid-template-columns: 1fr;
  }
`;

export const FullWidth = styled.div`
  grid-column: 1 / -1;
`;

// ─── Quest Card ───────────────────────────────────────────────────────────────

export const QuestCard = styled.div`
  background: rgba(10, 7, 3, 0.82);
  border: 1px solid rgba(245, 166, 35, 0.15);
  border-radius: 0.375rem;
  padding: 1.25rem;
  animation: ${fadeUp} 0.4s ${({ $delay }) => $delay || "0s"} ease both;
  opacity: 0;
  animation-fill-mode: forwards;
  transition: border-color 0.2s;

  &:hover {
    border-color: rgba(245, 166, 35, 0.3);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-bottom: 1rem;
  }

  .card-icon {
    font-size: 0.875rem;
    color: var(--primary);
  }

  .card-title {
    font-family: var(--font-display);
    font-size: clamp(0.75rem, 2vw, 0.9375rem);
    font-weight: 700;
    color: var(--primary);
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    flex: 1;
  }

  .card-rank {
    font-family: var(--font-mono);
    font-size: 0.4375rem;
    color: var(--primary);
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    padding: 0.1875rem 0.5rem;
    border: 1px solid rgba(245, 166, 35, 0.3);
    border-radius: 0.125rem;
    animation: ${stampIn} 0.3s ease both;
  }
`;

// ─── Skill Row (with progress bar) ────────────────────────────────────────────

export const SkillRow = styled.div`
  margin-bottom: 0.875rem;

  &:last-child {
    margin-bottom: 0;
  }

  .skill-meta {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 0.375rem;
  }

  .skill-name {
    font-family: var(--font-mono);
    font-size: clamp(0.5625rem, 1.5vw, 0.6875rem);
    font-weight: 600;
    color: var(--neutral);
    letter-spacing: 0.03125rem;
  }

  .skill-level {
    font-family: var(--font-mono);
    font-size: 0.5rem;
    font-weight: 700;
    color: var(--primary);
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }

  .skill-pct {
    font-family: var(--font-mono);
    font-size: 0.5rem;
    color: var(--primary-dim);
    margin-left: 0.375rem;
  }

  .bar-track {
    height: 0.1875rem;
    background: rgba(245, 166, 35, 0.1);
    border-radius: 1rem;
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(245, 166, 35, 0.6),
      var(--primary)
    );
    border-radius: 1rem;
    --fill: ${({ $pct }) => $pct || "0%"};
    animation: ${fillBar} 1s ${({ $delay }) => $delay || "0s"} ease both;
    width: 0%;
    animation-fill-mode: forwards;
  }
`;

// ─── Infra Item ───────────────────────────────────────────────────────────────

export const InfraItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(245, 166, 35, 0.07);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  &:first-child {
    padding-top: 0;
  }

  .infra-icon {
    width: 2rem;
    height: 2rem;
    border-radius: 0.25rem;
    background: rgba(245, 166, 35, 0.08);
    border: 1px solid rgba(245, 166, 35, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    flex-shrink: 0;
    color: var(--primary);
  }

  .infra-info {
    flex: 1;
  }

  .infra-name {
    font-family: var(--font-display);
    font-size: clamp(0.625rem, 1.8vw, 0.8125rem);
    font-weight: 700;
    color: var(--primary);
    letter-spacing: 0.0625rem;
    margin-bottom: 0.1875rem;
  }

  .infra-desc {
    font-family: var(--font-body);
    font-size: clamp(0.6875rem, 1.5vw, 0.8125rem);
    font-style: italic;
    color: var(--neutral-dim);
    line-height: 1.5;
  }
`;

// ─── Relic Tags ───────────────────────────────────────────────────────────────

export const RelicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`;
export const RelicTag = styled.span`
  font-family: var(--font-mono);
  font-size: clamp(0.4375rem, 1.2vw, 0.5625rem);
  font-weight: 700;
  letter-spacing: 0.125rem;
  text-transform: uppercase;

  padding: 0.5rem 0.75rem;
  border-radius: 0.1875rem;

  background: rgba(245, 166, 35, 0.07);
  color: rgba(245, 166, 35, 0.7);
  border: 1px solid rgba(245, 166, 35, 0.2);

  transition: all 0.15s;
  cursor: default;

  /* tambah ini */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background: rgba(245, 166, 35, 0.14);
    color: var(--primary);
    border-color: var(--primary-dim);
  }
`;
// ─── Contract Item ────────────────────────────────────────────────────────────

export const ContractItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(245, 166, 35, 0.07);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  &:first-child {
    padding-top: 0;
  }

  .contract-left {
    flex: 1;
  }

  .contract-name {
    font-family: var(--font-display);
    font-size: clamp(0.625rem, 1.8vw, 0.875rem);
    font-weight: 700;
    color: var(--neutral);
    letter-spacing: 0.0625rem;
    margin-bottom: 0.1875rem;
  }

  .contract-role {
    font-family: var(--font-mono);
    font-size: clamp(0.4375rem, 1.2vw, 0.5rem);
    color: var(--neutral-dim);
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }

  .contract-status {
    display: flex;
    align-items: center;
    gap: 0.375rem;
    font-family: var(--font-mono);
    font-size: 0.4375rem;
    font-weight: 700;
    letter-spacing: 0.125rem;
    text-transform: uppercase;

    ${({ $status }) =>
      $status === "completed" &&
      css`
        color: rgba(80, 200, 120, 0.8);
      `}
    ${({ $status }) =>
      $status === "active" &&
      css`
        color: var(--primary);
      `}
    ${({ $status }) =>
      $status === "nda" &&
      css`
        color: rgba(180, 30, 30, 0.8);
      `}
  }

  .status-dot {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: 50%;

    ${({ $status }) =>
      $status === "completed" &&
      css`
        background: rgba(80, 200, 120, 0.8);
      `}
    ${({ $status }) =>
      $status === "active" &&
      css`
        background: var(--primary);
        animation: ${glowPulse} 1.5s ease-in-out infinite;
      `}
    ${({ $status }) =>
      $status === "nda" &&
      css`
        background: rgba(180, 30, 30, 0.8);
      `}
  }
`;
