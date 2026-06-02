import styled, { keyframes } from "styled-components";

// Animations
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(1rem); }
  to { opacity: 1; transform: translateY(0); }
`;

// Scene & Background
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
  background: rgba(0, 0, 0, 0.75);
  pointer-events: none;
  z-index: 0;
`;

// Navbar
export const Navbar = styled.nav`
  position: relative;
  z-index: 10;
  height: 3.25rem;
  display: flex;
  align-items: center;
  padding: 0 1.75rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.8) 0%,
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

// Scroll area
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

// About container
export const AboutContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  animation: ${fadeUp} 0.4s ease both;
`;

// Header (tanpa emoji)
export const AboutHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  .name {
    font-family: var(--font-display);
    font-size: clamp(2rem, 6vw, 3rem);
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    margin-bottom: 0.25rem;
  }

  .tagline {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--neutral-dim);
    letter-spacing: 0.2rem;
    margin-top: 0.25rem;
  }

  .divider {
    width: 60px;
    height: 2px;
    background: var(--primary-dim);
    margin: 1rem auto 0;
  }
`;

// Bio / Introduction
export const Bio = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-left: 3px solid var(--primary);
  padding: 1rem 1.25rem;
  margin-bottom: 2rem;
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--neutral);
  border-radius: 0.125rem;

  @media (max-width: 48rem) {
    font-size: 0.875rem;
    padding: 0.875rem 1rem;
  }
`;

// Section
export const Section = styled.div`
  margin-bottom: 2.5rem;

  .section-title {
    font-family: var(--font-display);
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--primary);
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    border-left: 3px solid var(--primary);
    padding-left: 0.75rem;
    margin-bottom: 1.25rem;
  }
`;

// Work Card (semua classname, tanpa emoji)
export const WorkCard = styled.div`
  background: rgba(10, 7, 3, 0.7);
  border: 1px solid rgba(245, 166, 35, 0.2);
  border-radius: 0.375rem;
  padding: 1.25rem;
  margin-bottom: 1rem;
  transition: border-color 0.2s;

  &:hover {
    border-color: rgba(245, 166, 35, 0.4);
  }

  .work-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;

    @media (max-width: 48rem) {
      flex-direction: column;
      gap: 0.25rem;
    }
  }

  .work-title {
    font-family: var(--font-display);
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--white);
    letter-spacing: 0.05rem;
  }

  .work-date {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--primary-dim);
    letter-spacing: 0.1rem;
  }

  .work-company {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--primary);
    margin-bottom: 0.5rem;
  }

  .work-description {
    font-family: var(--font-body);
    font-size: 0.875rem;
    color: var(--neutral);
    line-height: 1.5;
    margin-top: 0.5rem;
    padding-left: 0.5rem;
    border-left: 1px solid rgba(245, 166, 35, 0.3);
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.75rem;

    span {
      font-family: var(--font-mono);
      font-size: 0.6rem;
      background: rgba(245, 166, 35, 0.1);
      padding: 0.25rem 0.65rem;
      border-radius: 0.125rem;
      color: var(--primary-dim);
      letter-spacing: 0.05rem;
    }
  }
`;

// Contact prompt & button (tanpa emoji)
export const ContactPrompt = styled.div`
  text-align: center;
  font-family: var(--font-mono);
  font-size: 0.6rem;
  letter-spacing: 0.15rem;
  color: var(--neutral-dim);
  margin: 1.5rem 0 0.75rem 0;
  text-transform: uppercase;
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: fit-content;
  margin: 0 auto 2rem auto;
  padding: 0.75rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid var(--primary-dim);
  border-radius: 0.25rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  color: var(--primary);
  cursor: pointer;
  transition: all 0.25s ease;
  backdrop-filter: blur(4px);

  .btn-icon,
  .btn-arrow {
    transition: transform 0.2s;
  }

  &:hover {
    background: rgba(245, 166, 35, 0.15);
    border-color: var(--primary);
    box-shadow: 0 0 0.75rem rgba(245, 166, 35, 0.3);
    gap: 1rem;

    .btn-arrow {
      transform: translateX(4px);
    }
    .btn-icon {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 1rem 1.5rem;
    font-size: 0.8rem;
    letter-spacing: 0.3rem;
  }

  @media (max-width: 480px) {
    padding: 0.875rem 1rem;
    font-size: 0.7rem;
    letter-spacing: 0.2rem;
  }
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

export const CharacterCard = styled.div`
  background: rgba(10, 7, 3, 0.75);
  border: 1px solid rgba(245, 166, 35, 0.25);
  border-radius: 0.5rem;
  overflow: hidden;
  backdrop-filter: blur(4px);
`;

export const CharacterImage = styled.img`
  width: 100%;
  display: block;
`;

export const CharacterInfo = styled.div`
  padding: 1.25rem;

  .name {
    font-family: var(--font-display);
    color: var(--primary);
    font-size: 1.8rem;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
  }

  .class {
    font-family: var(--font-mono);
    color: var(--primary-dim);
    font-size: 0.7rem;
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    margin-top: 0.25rem;
  }

  .divider {
    height: 1px;
    background: rgba(245, 166, 35, 0.2);
    margin: 1rem 0;
  }

  .label {
    font-family: var(--font-mono);
    color: var(--primary);
    font-size: 0.65rem;
    letter-spacing: 0.15rem;
    text-transform: uppercase;
    margin-bottom: 0.35rem;
  }

  .value {
    color: var(--neutral);
    line-height: 1.6;
    margin-bottom: 1rem;
  }
`;

export const ExperiencePanel = styled.div`
  background: rgba(10, 7, 3, 0.75);
  border: 1px solid rgba(245, 166, 35, 0.25);
  border-radius: 0.5rem;
  padding: 1.5rem;
`;

export const PanelTitle = styled.div`
  font-family: var(--font-display);
  color: var(--primary);
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;
