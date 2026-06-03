import styled, { keyframes } from "styled-components";

const fadeDown = keyframes`
  from { opacity: 0; transform: translateY(-0.5rem); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const NavbarWrap = styled.nav`
  position: relative;
  z-index: 10;
  height: 3.25rem;
  display: flex;
  align-items: center;
  padding: 0 1.75rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.85) 0%,
    transparent 100%
  );
  flex-shrink: 0;
  animation: ${fadeDown} 0.3s ease both;

  .nav-back {
    font-family: var(--font-mono);
    font-size: 0.75rem; /* naik dari 0.625rem */
    font-weight: 700; /* tambah bold */
    color: var(--primary-dim);
    letter-spacing: 0.125rem;
    cursor: pointer;
    transition: color 0.2s;
    text-transform: uppercase;
    white-space: nowrap;
    min-width: 5rem;

    &:hover {
      color: var(--primary);
    }
  }

  .nav-brand {
    flex: 1;
    text-align: center;
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    pointer-events: none;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    min-width: 5rem;
    justify-content: flex-end;
  }

  .nav-link {
    font-family: var(--font-mono);
    font-size: 0.75rem; /* naik dari 0.5625rem */
    font-weight: 700; /* tambah bold */
    color: var(--primary-dim);
    letter-spacing: 0.15rem;
    cursor: pointer;
    transition: color 0.2s;
    text-transform: uppercase;
    white-space: nowrap;
    text-decoration: none;

    &:hover {
      color: var(--primary);
    }
    &.active {
      color: var(--primary);
    }
  }

  /* ── Mobile ── */
  @media (max-width: 30rem) {
    padding: 0 1rem;
    height: 3rem;

    .nav-links {
      display: none;
    } /* hamburger nanti */
  }

  /* ── Tablet ── */
  @media (min-width: 30.0625rem) and (max-width: 48rem) {
    padding: 0 1.25rem;

    .nav-links {
      gap: 1rem;
    }

    .nav-link {
      font-size: 0.5rem;
    }
  }
`;

export const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: 1px solid rgba(245, 166, 35, 0.3);
  border-radius: 0.25rem;
  padding: 0.375rem 0.5rem;
  cursor: pointer;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 5rem;
  justify-content: flex-end;
  align-items: flex-end;

  span {
    display: block;
    height: 1px;
    background: var(--primary-dim);
    transition: all 0.2s;

    &:nth-child(1) {
      width: 1.125rem;
    }
    &:nth-child(2) {
      width: 0.75rem;
    }
    &:nth-child(3) {
      width: 1.125rem;
    }
  }

  &:hover span {
    background: var(--primary);
  }

  @media (max-width: 30rem) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  right: 0;
  background: rgba(8, 5, 2, 0.97);
  border-bottom: 1px solid rgba(245, 166, 35, 0.15);
  z-index: 20;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1rem;
  gap: 0.125rem;
  animation: ${fadeDown} 0.2s ease both;

  .mobile-link {
    font-family: var(--font-mono);
    font-size: 0.75rem; /* naik dari 0.625rem */
    font-weight: 700; /* tambah bold */
    color: var(--primary-dim);
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    padding: 0.875rem 0.5rem; /* sedikit lebih tinggi touch target */
    cursor: pointer;
    border-bottom: 1px solid rgba(245, 166, 35, 0.08);
    transition: color 0.2s;
    text-decoration: none;

    &:last-child {
      border-bottom: none;
    }
    &:hover {
      color: var(--primary);
    }
    &.active {
      color: var(--primary);
    }
  }
`;
