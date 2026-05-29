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
  background: linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, transparent 100%);
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
    &:hover { color: var(--primary); }
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

  .spacer { width: 5rem; }

  @media (max-width: 48rem) {
    padding: 0 1rem;
    .spacer { width: 2rem; }
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
  &::-webkit-scrollbar { display: none; }

  @media (max-width: 48rem) {
    align-items: flex-start;
    padding: 1.5rem 1rem 3rem;
  }
`;

// ─── Two column layout ────────────────────────────────────────────────────────

export const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 3rem;
  width: 100%;
  max-width: 56rem;
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
  gap: 1.5rem;

  .info-tag {
    font-family: var(--font-mono);
    font-size: 0.5rem;
    color: var(--primary-dim);
    letter-spacing: 0.25rem;
    text-transform: uppercase;
  }

  .info-title {
    font-family: var(--font-display);
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    font-weight: 900;
    color: var(--primary);
    letter-spacing: 0.1rem;
    line-height: 1.2;
    text-shadow: 0 0 2rem rgba(245, 166, 35, 0.25);
  }

  .info-desc {
    font-family: var(--font-body);
    font-size: clamp(0.875rem, 2vw, 1rem);
    font-style: italic;
    color: var(--neutral-dim);
    line-height: 1.8;
  }

  .contact-links {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .contact-link {
    display: flex;
    align-items: center;
    gap: 0.875rem;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;
    width: fit-content;

    &:hover .link-icon { border-color: var(--primary); color: var(--primary); }
    &:hover .link-text { color: var(--primary); }
  }

  .link-icon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.375rem;
    background: rgba(245, 166, 35, 0.07);
    border: 1px solid rgba(245, 166, 35, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: var(--primary-dim);
    transition: all 0.2s;
    flex-shrink: 0;
  }

  .link-meta { display: flex; flex-direction: column; gap: 0.125rem; }

  .link-label {
    font-family: var(--font-mono);
    font-size: 0.4375rem;
    color: var(--neutral-dim);
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  .link-text {
    font-family: var(--font-mono);
    font-size: clamp(0.5625rem, 1.5vw, 0.6875rem);
    font-weight: 600;
    color: var(--neutral);
    transition: color 0.2s;
    letter-spacing: 0.03125rem;
  }

  .social-row {
    display: flex;
    gap: 0.75rem;
    margin-top: 0.5rem;
  }

  .social-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.375rem;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s;

    &:hover .social-icon {
      border-color: var(--primary);
      background: rgba(245, 166, 35, 0.12);
      color: var(--primary);
    }
    &:hover .social-label { color: var(--primary); }
  }

  .social-icon {
    width: 3rem;
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
  }

  .social-label {
    font-family: var(--font-mono);
    font-size: 0.4375rem;
    color: var(--neutral-dim);
    letter-spacing: 0.125rem;
    text-transform: uppercase;
    transition: color 0.2s;
  }
`;

// ─── Form ─────────────────────────────────────────────────────────────────────

export const LedgerForm = styled.div`
  background: rgba(10, 7, 3, 0.82);
  border: 1px solid rgba(245, 166, 35, 0.15);
  border-radius: 0.375rem;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .form-header {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-bottom: 0.25rem;
  }

  .form-icon {
    font-size: 1rem;
    color: var(--primary);
  }

  .form-title {
    font-family: var(--font-display);
    font-size: clamp(1rem, 2.5vw, 1.375rem);
    font-weight: 700;
    color: var(--primary);
    letter-spacing: 0.125rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 36rem) {
      grid-template-columns: 1fr;
    }
  }

  .form-footer {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }

  .footer-icon {
    font-size: 0.625rem;
    color: var(--neutral-dim);
  }

  .footer-text {
    font-family: var(--font-mono);
    font-size: 0.4375rem;
    color: var(--neutral-dim);
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }
`;

export const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  .field-label {
    font-family: var(--font-mono);
    font-size: 0.4375rem;
    color: var(--primary-dim);
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  input, textarea {
    background: rgba(245, 166, 35, 0.04);
    border: none;
    border-bottom: 1px solid rgba(245, 166, 35, 0.2);
    color: var(--neutral);
    font-family: var(--font-body);
    font-size: clamp(0.8125rem, 2vw, 0.9375rem);
    font-style: italic;
    padding: 0.5rem 0;
    outline: none;
    transition: border-color 0.2s;
    width: 100%;
    resize: none;

    &::placeholder {
      color: rgba(215, 204, 200, 0.25);
    }

    &:focus {
      border-bottom-color: var(--primary-dim);
    }
  }

  textarea {
    min-height: 6rem;
    padding: 0.5rem 0;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 0.875rem;
  background: var(--primary);
  color: var(--tertiary);
  border: 1px solid var(--primary);
  border-radius: 0.1875rem;
  font-family: var(--font-display);
  font-size: clamp(0.6875rem, 2vw, 0.875rem);
  font-weight: 700;
  letter-spacing: 0.1875rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

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
    width: 0.875rem;
    height: 0.875rem;
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
  gap: 0.75rem;
  padding: 2rem;
  text-align: center;
  animation: ${checkIn} 0.4s ease both;

  .success-icon {
    font-size: 2rem;
    color: rgba(80, 200, 120, 0.8);
  }

  .success-title {
    font-family: var(--font-display);
    font-size: clamp(0.875rem, 2.5vw, 1.125rem);
    font-weight: 700;
    color: var(--primary);
    letter-spacing: 0.125rem;
    text-transform: uppercase;
  }

  .success-desc {
    font-family: var(--font-body);
    font-size: clamp(0.8125rem, 2vw, 0.9375rem);
    font-style: italic;
    color: var(--neutral-dim);
    line-height: 1.7;
  }
`;
