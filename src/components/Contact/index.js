import { useState, useRef } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import { useMusic } from "../../pages/_app";
import { MusicBtn } from "../Home/elements";
import {
  Scene,
  BgImage,
  Overlay,
  Navbar,
  ScrollArea,
  ContactLayout,
  ContactInfo,
  LedgerForm,
  FieldWrap,
  SubmitBtn,
  SuccessMsg,
  Gap,
} from "./elements";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const router = useRouter();
  const { playing, toggleMusic } = useMusic();
  const formRef = useRef(null);

  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.from_name || !form.from_email || !form.message) return;

    setStatus("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.from_name,
          from_email: form.from_email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <Scene>
      <BgImage src="/images/tavern-bg.png" alt="tavern" />
      <Overlay />

      <Navbar>
        <span className="back" onClick={() => router.push("/")}>
          ← back to bar
        </span>
        <span className="title">NIX</span>
        <span className="spacer" />
      </Navbar>

      <MusicBtn
        $playing={playing}
        onClick={toggleMusic}
        aria-label="toggle music"
      >
        <span className="note">{playing ? "♫" : "♪"}</span>
      </MusicBtn>

      <ScrollArea>
        <ContactLayout>
          {/* ── Left: Info ── */}
          <ContactInfo>
            <div>
              <div className="info-tag">Contact the Barkeep</div>
              <div className="info-title">
                Let's talk
                <br />
                over a drink.
              </div>
            </div>
            <div className="info-desc">
              Open for collaborations, freelance projects, or just a good
              conversation. Drop a message and I'll get back to you.
            </div>

            <div className="contact-links">
              <a
                className="contact-link"
                href="mailto:huangnik90@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <div className="link-icon">
                  <MdEmail />
                </div>
                <div className="link-meta">
                  <span className="link-label">Email</span>
                  <span className="link-text">huangnik90@gmail.com</span>
                </div>
              </a>
            </div>

            <div className="social-row">
              <a
                className="social-btn"
                href="https://www.linkedin.com/in/nikolas-wijaya-17965b180/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon">
                  <FaLinkedin />
                </div>
                <span className="social-label">LinkedIn</span>
              </a>
              <a
                className="social-btn"
                href="https://github.com/huangnik90"
                target="_blank"
                rel="noreferrer"
              >
                <div className="social-icon">
                  <FaGithub />
                </div>
                <span className="social-label">GitHub</span>
              </a>
            </div>
          </ContactInfo>

          {/* ── Right: Form ── */}
          <LedgerForm>
            <div className="form-header">
              <span className="form-icon">✦</span>
              <span className="form-title">Sign the Ledger</span>
            </div>

            {status === "success" ? (
              <SuccessMsg>
                <div className="success-icon">✓</div>
                <div className="success-title">Message Received</div>
                <div className="success-desc">
                  Your scroll has been delivered to the barkeep.
                  <br />
                  He'll send a raven shortly.
                </div>
              </SuccessMsg>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  <div className="form-row">
                    <FieldWrap>
                      <label className="field-label">Adventurer Name</label>
                      <input
                        type="text"
                        name="from_name"
                        placeholder="Your name..."
                        value={form.from_name}
                        onChange={handleChange}
                        required
                      />
                    </FieldWrap>
                    <FieldWrap>
                      <label className="field-label">Raven Address</label>
                      <input
                        type="email"
                        name="from_email"
                        placeholder="your@email.com"
                        value={form.from_email}
                        onChange={handleChange}
                        required
                      />
                    </FieldWrap>
                  </div>

                  <FieldWrap>
                    <label className="field-label">Message</label>
                    <textarea
                      name="message"
                      placeholder="Scribe your message for the barkeep..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </FieldWrap>

                  {status === "error" && (
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        color: "rgba(180, 30, 30, 0.9)",
                        letterSpacing: "0.125rem",
                        textTransform: "uppercase",
                      }}
                    >
                      ✗ Failed to send. Try again or email directly.
                    </div>
                  )}

                  <SubmitBtn type="submit" disabled={status === "sending"}>
                    {status === "sending" ? (
                      <>
                        <div className="spinner" /> Sending...
                      </>
                    ) : (
                      "Submit to the Guild ›"
                    )}
                  </SubmitBtn>

                  <div className="form-footer">
                    <span className="footer-icon">⊕</span>
                    <span className="footer-text">
                      Encrypted via the High Guild Network
                    </span>
                  </div>
                </div>
              </form>
            )}
          </LedgerForm>
        </ContactLayout>
        <Gap height="100px" />
      </ScrollArea>
    </Scene>
  );
}
