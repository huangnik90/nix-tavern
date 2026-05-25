import styled, { keyframes } from 'styled-components'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
`

const cardSlide = keyframes`
  from { opacity: 0; transform: translateX(40px) rotate(2deg); }
  to   { opacity: 1; transform: translateX(0) rotate(0deg); }
`

// ─── Full scene wrapper ────────────────────────────────────────────────────────

export const Scene = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: var(--font-body);
`

export const BgImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  pointer-events: none;
  user-select: none;
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  pointer-events: none;
`

// ─── Navbar ───────────────────────────────────────────────────────────────────

export const Navbar = styled.nav`
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 32px;
  z-index: 10;
  background: linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, transparent 100%);

  .back {
    font-family: var(--font-mono);
    font-size: 10px;
    color: rgba(200,155,55,0.55);
    letter-spacing: 2px;
    cursor: pointer;
    transition: color 0.2s;
    &:hover { color: var(--amber); }
  }

  .title {
    flex: 1;
    text-align: center;
    font-family: var(--font-display);
    font-size: 13px;
    font-weight: 700;
    color: var(--amber);
    letter-spacing: 6px;
    text-transform: uppercase;
  }

  .spacer { width: 80px; }
`

// ─── Bartender strip at top ───────────────────────────────────────────────────

export const BartenderStrip = styled.div`
  position: absolute;
  top: 56px;
  left: 0; right: 0;
  height: 200px;
  z-index: 5;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  pointer-events: none;

  .bt-img {
    height: 210px;
    object-fit: contain;
    object-position: bottom center;
    user-select: none;
    animation: ${fadeUp} 0.5s ease both;
  }

  .counter-top {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 14px;
    background: #3a1a06;
    border-top: 2px solid #7a3c10;
    box-shadow: 0 -4px 20px rgba(0,0,0,0.5);
  }

  .counter-face {
    position: absolute;
    bottom: -40px; left: 0; right: 0;
    height: 40px;
    background: #1e0d04;
    z-index: 6;
  }

  .bt-quote {
    position: absolute;
    bottom: 18px;
    right: 80px;
    font-family: var(--font-body);
    font-style: italic;
    font-size: 12px;
    color: rgba(200,155,55,0.5);
    letter-spacing: 0.3px;
    pointer-events: none;
    animation: ${fadeUp} 0.6s 0.3s ease both;
    opacity: 0;
    animation-fill-mode: forwards;
  }
`

// ─── Cards area ───────────────────────────────────────────────────────────────

export const CardsArea = styled.div`
  position: absolute;
  top: 270px;
  left: 0; right: 0; bottom: 0;
  overflow-y: auto;
  padding: 8px 32px 32px;
  z-index: 7;

  /* hide scrollbar but keep scroll */
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 14px;
  animation: ${slideIn} 0.4s ease both;

  .label {
    font-family: var(--font-mono);
    font-size: 9px;
    color: rgba(220,165,45,0.42);
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  .heading {
    font-family: var(--font-display);
    font-size: 16px;
    font-weight: 700;
    color: var(--amber);
    letter-spacing: 3px;
  }

  .line {
    flex: 1;
    height: 1px;
    background: rgba(180,120,40,0.2);
  }
`

export const ProjectCard = styled.div`
  background: rgba(8, 5, 2, 0.88);
  border: 1px solid rgba(100, 60, 20, 0.35);
  border-radius: 6px;
  margin-bottom: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.2s;
  animation: ${cardSlide} 0.45s ${({ $index }) => $index * 0.08}s ease both;
  opacity: 0;
  animation-fill-mode: forwards;

  &:hover {
    border-color: rgba(200, 140, 50, 0.5);
    transform: translateY(-2px);
  }

  &.active {
    border-color: rgba(200, 140, 50, 0.65);
  }

  .card-header {
    display: flex;
    align-items: center;
    padding: 12px 16px 10px;
    gap: 12px;
  }

  .num {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(100,60,20,0.35);
    border: 1px solid rgba(180,120,40,0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 700;
    color: rgba(200,150,60,0.75);
    font-family: var(--font-mono);
    flex-shrink: 0;
  }

  .info { flex: 1; }

  .proj-title {
    font-family: var(--font-display);
    font-size: 13px;
    font-weight: 700;
    color: rgba(230,190,90,0.92);
    letter-spacing: 1px;
  }

  .proj-desc {
    font-size: 11px;
    color: rgba(160,120,60,0.6);
    margin-top: 2px;
    font-family: var(--font-mono);
  }

  .tags {
    display: flex;
    gap: 5px;
    flex-wrap: wrap;
    justify-content: flex-end;
    max-width: 200px;
  }

  .tag {
    font-size: 8px;
    padding: 2px 7px;
    border-radius: 8px;
    font-weight: 700;
    letter-spacing: 0.3px;
    font-family: var(--font-mono);

    &.green  { background: rgba(20,60,20,0.8);  color: #70c870; border: 1px solid rgba(40,100,40,0.4); }
    &.blue   { background: rgba(10,30,60,0.8);  color: #70a8d8; border: 1px solid rgba(20,60,100,0.4); }
    &.amber  { background: rgba(60,40,5,0.8);   color: #d4a030; border: 1px solid rgba(100,70,10,0.4); }
  }

  /* expandable body */
  .card-body {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.32s ease;

    &.open { max-height: 160px; }
  }

  .card-inner {
    padding: 0 16px 14px;
    border-top: 1px solid rgba(100,60,20,0.2);
    padding-top: 12px;

    p {
      font-size: 12px;
      color: rgba(170,130,70,0.72);
      line-height: 1.7;
      margin-bottom: 10px;
      font-family: var(--font-body);
      font-style: italic;
    }
  }

  .links {
    display: flex;
    gap: 8px;

    .link-btn {
      font-size: 9px;
      padding: 4px 12px;
      border-radius: 12px;
      border: 1px solid rgba(180,120,40,0.3);
      color: rgba(200,150,60,0.7);
      cursor: pointer;
      letter-spacing: 0.5px;
      transition: all 0.15s;
      font-family: var(--font-mono);

      &:hover {
        background: rgba(100,60,20,0.3);
        color: rgba(230,180,80,0.9);
        border-color: rgba(200,140,50,0.5);
      }
    }
  }
`
