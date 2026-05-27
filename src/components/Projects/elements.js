import styled, { keyframes, css } from "styled-components";

// ─── Animations ───────────────────────────────────────────────────────────────

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
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
  to   { transform: translateY(-2px); }
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
  height: 52px;
  display: flex;
  align-items: center;
  padding: 0 28px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.75) 0%,
    transparent 100%
  );
  flex-shrink: 0;

  .back {
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 600;
    color: var(--primary-dim);
    letter-spacing: 2px;
    cursor: pointer;
    transition: color 0.2s;
    text-transform: uppercase;

    &:hover {
      color: var(--primary);
    }
  }

  .title {
    flex: 1;
    text-align: center;
    font-family: var(--font-display);
    font-size: 16px;
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 8px;
    text-transform: uppercase;
  }

  .spacer {
    width: 80px;
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
  width: ${({ $collapsed }) => ($collapsed ? "52px" : "220px")};
  transition: width 0.3s ease;
  background: rgba(8, 5, 2, 0.82);
  border-right: 1px solid rgba(245, 166, 35, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .sidebar-header {
    padding: 16px 14px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(245, 166, 35, 0.1);
    flex-shrink: 0;
  }

  .sidebar-label {
    font-family: var(--font-mono);
    font-size: 8px;
    color: var(--primary-dim);
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    opacity: ${({ $collapsed }) => ($collapsed ? "0" : "1")};
    transition: opacity 0.2s;
  }

  .toggle-btn {
    width: 22px;
    height: 22px;
    border-radius: 4px;
    border: 1px solid rgba(245, 166, 35, 0.2);
    background: transparent;
    color: var(--primary-dim);
    font-size: 10px;
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
    padding: 8px 0;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  cursor: pointer;
  transition: background 0.15s;
  position: relative;
  border-left: 2px solid transparent;

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
    width: 26px;
    height: 26px;
    border-radius: 4px;
    background: ${({ $active }) =>
      $active ? "rgba(245, 166, 35, 0.2)" : "rgba(245, 166, 35, 0.07)"};
    border: 1px solid
      ${({ $active }) =>
        $active ? "rgba(245, 166, 35, 0.4)" : "rgba(245, 166, 35, 0.15)"};
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: 10px;
    font-weight: 700;
    color: ${({ $active }) =>
      $active ? "var(--primary)" : "var(--primary-dim)"};
    flex-shrink: 0;
    transition: all 0.15s;
  }

  .item-name {
    font-family: var(--font-mono);
    font-size: 11px;
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
    font-size: 9px;
    color: var(--primary-dim);
    flex-shrink: 0;
  }

  .tooltip {
    position: absolute;
    left: 58px;
    background: rgba(8, 5, 2, 0.95);
    border: 1px solid var(--dialog-border);
    color: var(--primary);
    font-size: 10px;
    font-family: var(--font-mono);
    padding: 4px 10px;
    border-radius: 4px;
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
  justify-content: center;
  padding: 16px 60px 24px;
  gap: 20px;
  overflow: hidden;
`;

// ─── WANTED Poster ────────────────────────────────────────────────────────────
/* poster-specific colors (#c8a96e, #2a1a08) are intentionally hardcoded
   — they represent aged paper/ink and are not part of the UI color system */

export const WantedPoster = styled.div`
  width: 800px;
  background: #c8a96e;
  border: 3px solid #2a1a08;
  box-shadow:
    4px 4px 0 #1a0e04,
    0 8px 40px rgba(0, 0, 0, 0.7),
    inset 0 0 40px rgba(0, 0, 0, 0.15);
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
    padding: 8px 12px 6px;
    text-align: center;
  }

  .wanted-text {
    font-family: var(--font-display);
    font-size: 26px;
    font-weight: 900;
    color: #c8a96e;
    letter-spacing: 6px;
    text-transform: uppercase;
    line-height: 1;
  }

  .poster-divider {
    height: 2px;
    background: linear-gradient(to right, transparent, #c8a96e, transparent);
    margin: 0 16px;
  }

  .poster-img-wrap {
    position: relative;
    height: 400px;
    overflow: hidden;
    background: #1a0e04;
    margin: 8px;
    border: 2px solid #2a1a08;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      filter: sepia(20%) contrast(1.05);
    }
  }

  .poster-footer {
    padding: 6px 12px 10px;
    text-align: center;
  }

  .poster-name {
    font-family: var(--font-display);
    font-size: 12px;
    font-weight: 700;
    color: #2a1a08;
    letter-spacing: 2px;
    text-transform: uppercase;
    line-height: 1.3;
  }

  .poster-reward {
    font-family: var(--font-mono);
    font-size: 8px;
    color: rgba(42, 26, 8, 0.6);
    letter-spacing: 1px;
    margin-top: 3px;
    text-transform: uppercase;
  }
`;

export const ClassifiedStamp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-15deg);
  border: 3px solid rgba(180, 30, 30, 0.85);
  color: rgba(180, 30, 30, 0.85);
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 4px;
  padding: 6px 14px;
  white-space: nowrap;
  z-index: 2;
  pointer-events: none;
  animation: ${stampDrop} 0.4s 0.3s ease both;
  opacity: 0;
  animation-fill-mode: forwards;
  text-shadow: 0 0 8px rgba(180, 30, 30, 0.4);
`;

// ─── Project Detail ───────────────────────────────────────────────────────────

export const Detail = styled.div`
  width: 100%;
  max-width: 560px;
  animation: ${fadeIn} 0.4s ease both;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .detail-tag {
    font-family: var(--font-mono);
    font-size: 8px;
    color: var(--primary-dim);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 6px;
  }

  .detail-title {
    font-family: var(--font-display);
    font-size: 30px;
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 4px;
    text-transform: uppercase;
    line-height: 1.1;
    margin-bottom: 4px;
    text-shadow: 0 0 40px var(--primary-faint);
  }

  .detail-industry {
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--neutral-dim);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 12px;
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
    margin-bottom: 12px;
  }

  .detail-desc {
    font-family: var(--font-body);
    font-size: 15px;
    font-style: italic;
    color: var(--neutral-dim);
    line-height: 1.8;
    margin-bottom: 16px;
  }

  .tech-label {
    font-family: var(--font-mono);
    font-size: 8px;
    color: var(--primary-dim);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 18px;
    justify-content: center;
  }

  .links {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const TechTag = styled.span`
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 3px;
  letter-spacing: 0.5px;
  cursor: default;
  transition:
    transform 0.15s,
    box-shadow 0.15s;
  background: var(--primary-faint);
  color: var(--primary-dim);
  border: 1px solid rgba(245, 166, 35, 0.25);

  &:hover {
    animation: ${tagHover} 0.15s ease forwards;
    box-shadow: 0 4px 12px var(--primary-faint);
    background: rgba(245, 166, 35, 0.18);
    color: var(--primary);
    border-color: var(--primary-dim);
  }
`;

export const LinkBtn = styled.a`
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 8px 18px;
  border-radius: 3px;
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
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 8px 18px;
  border-radius: 3px;
  color: rgba(180, 30, 30, 0.8);
  border: 1px solid rgba(180, 30, 30, 0.3);
  background: rgba(180, 30, 30, 0.08);
`;
