import styled, { keyframes, css } from "styled-components";

// ─── Animations ───────────────────────────────────────────────────────────────
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(1rem); }
  to   { opacity: 1; transform: translateY(0); }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 0.5rem rgba(245, 166, 35, 0.15); }
  50%       { box-shadow: 0 0 1.5rem rgba(245, 166, 35, 0.35); }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const checkIn = keyframes`
  from { opacity: 0; transform: scale(0.5); }
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
  background: rgba(
    0,
    0,
    0,
    0.75
  ); /* sedikit lebih gelap untuk kontras lebih baik */
  pointer-events: none;
  z-index: 0;
`;

// ─── Navbar (sama) ────────────────────────────────────────────────────────────
export const Navbar = styled.nav`
  position: relative;
  z-index: 10;
  height: 3.5rem; /* sedikit lebih tinggi */
  display: flex;
  align-items: center;
  padding: 0 1.75rem;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.85) 0%,
    transparent 100%
  );
  flex-shrink: 0;

  .back {
    font-family: var(--font-mono);
    font-size: 0.75rem; /* diperbesar */
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
    font-size: 1.125rem; /* diperbesar */
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

// ─── Scroll area ──────────────────────────────────────────────────────────────
export const ScrollArea = styled.div`
  position: relative;
  z-index: 5;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 48rem) {
    align-items: flex-start;
    padding: 1.5rem 1rem calc(3rem + env(safe-area-inset-bottom, 0rem)); // tambah safe area
  }
`;

// ─── Two column layout ────────────────────────────────────────────────────────
export const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 3rem;
  width: 100%;
  max-width: 64rem; /* lebih lebar */
  animation: ${fadeUp} 0.4s ease both;

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

// ─── Left side ────────────────────────────────────────────────────────────────
export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem; /* lebih lega */

  .info-tag {
    font-family: var(--font-mono);
    font-size: 0.75rem; /* diperbesar */
    color: var(--primary);
    letter-spacing: 0.25rem;
    text-transform: uppercase;
  }

  .info-title {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 5vw, 2.75rem);
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 0.1rem;
    line-height: 1.2;
    text-shadow: 0 0 2rem rgba(245, 166, 35, 0.25);
  }

  .info-desc {
    font-family: var(--font-body);
    font-size: 1rem; /* fixed, bukan clamp kecil */
    line-height: 1.6;
    color: var(--neutral); /* putih, bukan neutral-dim */
    font-style: normal; /* hilangkan italic */
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
    width: fit-content;

    &:hover .link-icon {
      border-color: var(--primary);
      color: var(--primary);
    }
    &:hover .link-text {
      color: var(--primary);
    }
  }

  .link-icon {
    width: 3rem; /* diperbesar */
    height: 3rem;
    border-radius: 0.5rem;
    background: rgba(245, 166, 35, 0.07);
    border: 1px solid rgba(245, 166, 35, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    color: var(--primary-dim);
    transition: all 0.2s;
    flex-shrink: 0;
  }

  .link-meta {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .link-label {
    font-family: var(--font-mono);
    font-size: 0.625rem; /* diperbesar */
    color: var(--primary-dim);
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  .link-text {
    font-family: var(--font-mono);
    font-size: 0.875rem; /* diperbesar */
    font-weight: 600;
    color: var(--neutral);
    transition: color 0.2s;
    letter-spacing: 0.03125rem;
  }

  .social-row {
    display: flex;
    gap: 1.25rem;
    margin-top: 0.5rem;
  }

  .social-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;

    &:hover .social-icon {
      border-color: var(--primary);
      background: rgba(245, 166, 35, 0.12);
      color: var(--primary);
    }
    &:hover .social-label {
      color: var(--primary);
    }
  }

  .social-icon {
    width: 3.5rem; /* diperbesar */
    height: 3.5rem;
    border-radius: 0.5rem;
    background: rgba(245, 166, 35, 0.07);
    border: 1px solid rgba(245, 166, 35, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--primary-dim);
    transition: all 0.2s;
  }

  .social-label {
    font-family: var(--font-mono);
    font-size: 0.625rem; /* diperbesar */
    color: var(--neutral-dim);
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    transition: color 0.2s;
  }
`;

// ─── Form ─────────────────────────────────────────────────────────────────────
export const LedgerForm = styled.div`
  background: rgba(10, 7, 3, 0.9); /* lebih gelap sedikit */
  border: 1px solid rgba(245, 166, 35, 0.2);
  border-radius: 0.5rem;
  padding: 2rem; /* lebih besar */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .form-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
  }

  .form-icon {
    font-size: 1.25rem;
    color: var(--primary);
  }

  .form-title {
    font-family: var(--font-display);
    font-size: 1.375rem; /* diperbesar */
    font-weight: 700;
    color: var(--primary);
    letter-spacing: 0.125rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;

    @media (max-width: 36rem) {
      grid-template-columns: 1fr;
    }
  }

  .form-footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  .footer-icon {
    font-size: 0.75rem;
    color: var(--neutral-dim);
  }

  .footer-text {
    font-family: var(--font-mono);
    font-size: 0.625rem; /* diperbesar */
    color: var(--neutral-dim);
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }
`;

export const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .field-label {
    font-family: var(--font-mono);
    font-size: 0.75rem; /* diperbesar */
    color: var(--primary);
    letter-spacing: 0.15rem;
    text-transform: uppercase;
  }

  input,
  textarea {
    background: rgba(245, 166, 35, 0.04);
    border: none;
    border-bottom: 2px solid rgba(245, 166, 35, 0.25); /* lebih tebal */
    color: var(--neutral);
    font-family: var(--font-body);
    font-size: 1rem; /* diperbesar */
    padding: 0.75rem 0; /* lebih tinggi */
    outline: none;
    transition: border-color 0.2s;
    width: 100%;
    resize: none;

    &::placeholder {
      color: rgba(215, 204, 200, 0.35);
      font-size: 0.875rem;
    }

    &:focus {
      border-bottom-color: var(--primary);
    }
  }

  textarea {
    min-height: 8rem;
    padding: 0.75rem 0;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 1rem; /* lebih besar */
  background: var(--primary);
  color: var(--tertiary);
  border: 2px solid var(--primary);
  border-radius: 0.25rem;
  font-family: var(--font-display);
  font-size: 1rem; /* diperbesar */
  font-weight: 700;
  letter-spacing: 0.25rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  &:hover:not(:disabled) {
    background: transparent;
    color: var(--primary);
    animation: ${glowPulse} 1.5s ease-in-out infinite;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .spinner {
    width: 1rem;
    height: 1rem;
    border: 2px solid rgba(26, 20, 18, 0.3);
    border-top-color: var(--tertiary);
    border-radius: 50%;
    animation: ${spin} 0.6s linear infinite;
  }
`;

// ─── Success state ────────────────────────────────────────────────────────────
export const SuccessMsg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
  animation: ${checkIn} 0.4s ease both;

  .success-icon {
    font-size: 2.5rem;
    color: rgba(80, 200, 120, 0.9);
  }

  .success-title {
    font-family: var(--font-display);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--primary);
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }

  .success-desc {
    font-family: var(--font-body);
    font-size: 1rem;
    color: var(--neutral);
    line-height: 1.7;
    font-style: normal;
  }
`;

export const Gap = styled.div`
  display: none;
  @media (max-width: 48rem) {
    display: block;
    height: ${({ height }) => height || "100px"};
  }
`;
