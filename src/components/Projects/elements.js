import styled, { keyframes, css } from "styled-components";

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(0.75rem); }
  to   { opacity: 1; transform: translateY(0); }
`;

const posterReveal = keyframes`
  from { opacity: 0; transform: scale(0.96) rotate(-1deg); }
  to   { opacity: 1; transform: scale(1) rotate(0deg); }
`;

const stampDrop = keyframes`
  0%   { opacity: 0; transform: translate(-50%, -50%) scale(2) rotate(-15deg); }
  60%  { opacity: 1; transform: translate(-50%, -50%) scale(0.95) rotate(-15deg); }
  100% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(-15deg); }
`;

const tagHover = keyframes`
  from { transform: translateY(0); }
  to   { transform: translateY(-0.125rem); }
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
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  user-select: none;
  pointer-events: none;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  pointer-events: none;
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

    @media (max-width: 48rem) {
      width: 2rem;
    }
  }
`;

// ─── Main layout ──────────────────────────────────────────────────────────────

export const Main = styled.div`
  position: relative;
  z-index: 5;
  flex: 1;
  display: flex;
  overflow: hidden;
`;

// ─── Sidebar ──────────────────────────────────────────────────────────────────

export const Sidebar = styled.aside`
  flex-shrink: 0;
  width: ${({ $collapsed }) => ($collapsed ? "3.25rem" : "13.75rem")};
  transition: width 0.3s ease;
  background: rgba(8, 5, 2, 0.88);
  border-right: 1px solid rgba(245, 166, 35, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 48rem) {
    width: ${({ $collapsed }) => ($collapsed ? "3.25rem" : "10rem")};
  }

  .sidebar-header {
    padding: 1rem 0.875rem 0.625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(245, 166, 35, 0.1);
    flex-shrink: 0;
  }

  .sidebar-label {
    font-family: var(--font-mono);
    font-size: 0.5rem;
    color: var(--primary-dim);
    letter-spacing: 0.1875rem;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    opacity: ${({ $collapsed }) => ($collapsed ? "0" : "1")};
    transition: opacity 0.2s;
  }

  .toggle-btn {
    width: 1.375rem;
    height: 1.375rem;
    border-radius: 0.25rem;
    border: 1px solid rgba(245, 166, 35, 0.2);
    background: transparent;
    color: var(--primary-dim);
    font-size: 0.625rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.2s;
    margin-left: auto;

    &:hover {
      border-color: var(--primary-dim);
      color: var(--primary);
    }
  }

  .project-list {
    flex: 1;
    overflow-y: auto;
    padding: 0.5rem 0;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.625rem 0.875rem;
  cursor: pointer;
  transition: background 0.15s;
  position: relative;
  border-left: 0.125rem solid transparent;

  ${({ $active }) =>
    $active &&
    css`
      background: var(--primary-faint);
      border-left-color: var(--primary);
    `}

  &:hover {
    background: rgba(245, 166, 35, 0.06);
  }

  .item-icon {
    width: 1.625rem;
    height: 1.625rem;
    border-radius: 0.25rem;
    background: ${({ $active }) =>
      $active ? "rgba(245, 166, 35, 0.2)" : "rgba(245, 166, 35, 0.07)"};
    border: 1px solid
      ${({ $active }) =>
        $active ? "rgba(245, 166, 35, 0.4)" : "rgba(245, 166, 35, 0.15)"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: 0.625rem;
    font-weight: 700;
    color: ${({ $active }) =>
      $active ? "var(--primary)" : "var(--primary-dim)"};
    flex-shrink: 0;
    transition: all 0.15s;
  }

  .item-name {
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    font-weight: 600;
    color: ${({ $active }) =>
      $active ? "var(--primary)" : "var(--neutral-dim)"};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.15s;
    flex: 1;
  }

  .lock-icon {
    font-size: 0.5625rem;
    color: var(--primary-dim);
    flex-shrink: 0;
  }

  .tooltip {
    position: absolute;
    left: 3.625rem;
    background: rgba(8, 5, 2, 0.95);
    border: 1px solid var(--dialog-border);
    color: var(--primary);
    font-size: 0.625rem;
    font-family: var(--font-mono);
    padding: 0.25rem 0.625rem;
    border-radius: 0.25rem;
    white-space: nowrap;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s;
    z-index: 20;
  }

  &:hover .tooltip {
    opacity: 1;
  }
`;

// ─── Content area ─────────────────────────────────────────────────────────────

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem 2.5rem 1.5rem;
  gap: 1rem;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 48rem) {
    padding: 0.75rem 1rem 1.5rem;
    gap: 0.75rem;
  }
`;

// ─── WANTED Poster ────────────────────────────────────────────────────────────

export const WantedPoster = styled.div`
  width: clamp(18rem, 70vw, 50rem);
  background: #c8a96e;
  border: 0.1875rem solid #2a1a08;
  box-shadow:
    0.25rem 0.25rem 0 #1a0e04,
    0 0.5rem 2.5rem rgba(0, 0, 0, 0.7),
    inset 0 0 2.5rem rgba(0, 0, 0, 0.15);
  position: relative;
  animation: ${posterReveal} 0.5s ease both;
  flex-shrink: 0;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.015) 2px,
      rgba(0, 0, 0, 0.015) 4px
    );
    pointer-events: none;
    z-index: 1;
  }

  .poster-header {
    background: #2a1a08;
    padding: 0.5rem 0.75rem 0.375rem;
    text-align: center;
  }

  .wanted-text {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    font-weight: 900;
    color: #c8a96e;
    letter-spacing: 0.375rem;
    text-transform: uppercase;
    line-height: 1;
  }

  .poster-divider {
    height: 0.125rem;
    background: linear-gradient(to right, transparent, #c8a96e, transparent);
    margin: 0 1rem;
  }

  .poster-img-wrap {
    position: relative;
    height: clamp(12rem, 38vh, 32rem);
    overflow: hidden;
    background: #1a0e04;
    margin: 0.5rem;
    border: 0.125rem solid #2a1a08;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      filter: sepia(20%) contrast(1.05);
    }
  }

  .poster-footer {
    padding: 0.375rem 0.75rem 0.625rem;
    text-align: center;
  }

  .poster-name {
    font-family: var(--font-display);
    font-size: clamp(0.625rem, 1.5vw, 0.875rem);
    font-weight: 700;
    color: #2a1a08;
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    line-height: 1.3;
  }

  .poster-reward {
    font-family: var(--font-mono);
    font-size: clamp(0.5rem, 1vw, 0.5625rem);
    color: rgba(42, 26, 8, 0.6);
    letter-spacing: 0.0625rem;
    margin-top: 0.1875rem;
    text-transform: uppercase;
  }
`;

export const ClassifiedStamp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-15deg);
  border: 0.1875rem solid rgba(180, 30, 30, 0.85);
  color: rgba(180, 30, 30, 0.85);
  font-family: var(--font-display);
  font-size: clamp(0.875rem, 2.5vw, 1.25rem);
  font-weight: 900;
  letter-spacing: 0.25rem;
  padding: 0.375rem 0.875rem;
  white-space: nowrap;
  z-index: 2;
  pointer-events: none;
  animation: ${stampDrop} 0.4s 0.3s ease both;
  opacity: 0;
  animation-fill-mode: forwards;
  text-shadow: 0 0 0.5rem rgba(180, 30, 30, 0.4);
`;

// ─── Project Detail ───────────────────────────────────────────────────────────

export const Detail = styled.div`
  width: 100%;
  max-width: clamp(18rem, 70vw, 35rem);
  animation: ${fadeIn} 0.4s ease both;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .detail-tag {
    font-family: var(--font-mono);
    font-size: 0.5rem;
    color: var(--primary-dim);
    letter-spacing: 0.1875rem;
    text-transform: uppercase;
    margin-bottom: 0.375rem;
  }

  .detail-title {
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 4vw, 1.875rem);
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 0.25rem;
    text-transform: uppercase;
    line-height: 1.1;
    margin-bottom: 0.25rem;
    text-shadow: 0 0 2.5rem var(--primary-faint);
  }

  .detail-industry {
    font-family: var(--font-mono);
    font-size: clamp(0.5rem, 1.5vw, 0.625rem);
    color: var(--neutral-dim);
    letter-spacing: 0.1875rem;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  .divider {
    height: 1px;
    width: 100%;
    background: linear-gradient(
      to right,
      transparent,
      var(--dialog-border),
      transparent
    );
    margin-bottom: 0.75rem;
  }

  .detail-desc {
    font-family: var(--font-body);
    font-size: clamp(0.8125rem, 2vw, 0.9375rem);
    font-style: italic;
    color: var(--neutral-dim);
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .tech-label {
    font-family: var(--font-mono);
    font-size: 0.5rem;
    color: var(--primary-dim);
    letter-spacing: 0.1875rem;
    text-transform: uppercase;
    margin-bottom: 0.625rem;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4375rem;
    margin-bottom: 1.125rem;
    justify-content: center;
  }

  .links {
    display: flex;
    gap: 0.625rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const TechTag = styled.span`
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 0.1875rem;
  letter-spacing: 0.03125rem;
  cursor: default;
  transition:
    transform 0.15s,
    box-shadow 0.15s;
  background: var(--primary-faint);
  color: var(--primary-dim);
  border: 1px solid rgba(245, 166, 35, 0.25);

  &:hover {
    animation: ${tagHover} 0.15s ease forwards;
    box-shadow: 0 0.25rem 0.75rem var(--primary-faint);
    background: rgba(245, 166, 35, 0.18);
    color: var(--primary);
    border-color: var(--primary-dim);
  }
`;

export const LinkBtn = styled.a`
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  padding: 0.5rem 1.125rem;
  border-radius: 0.1875rem;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;

  ${({ $primary }) =>
    $primary
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

export const NdaBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-family: var(--font-mono);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: 0.09375rem;
  text-transform: uppercase;
  padding: 0.5rem 1.125rem;
  border-radius: 0.1875rem;
  color: rgba(180, 30, 30, 0.8);
  border: 1px solid rgba(180, 30, 30, 0.3);
  background: rgba(180, 30, 30, 0.08);
`;
