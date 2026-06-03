import { useState } from "react";
import { useRouter } from "next/router";
import { NavbarWrap, HamburgerBtn, MobileMenu } from "./elements";

const NAV_LINKS = [
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  function navigate(path) {
    setMenuOpen(false);
    router.push(path);
  }

  return (
    <NavbarWrap>
      {/* Kiri — back */}
      <span className="nav-back" onClick={() => navigate("/")}>
        ← back to bar
      </span>

      {/* Tengah — brand */}
      <span className="nav-brand">NIX</span>

      {/* Kanan — links (desktop & tablet) */}
      <div className="nav-links">
        {NAV_LINKS.map((link) => (
          <span
            key={link.path}
            className={`nav-link ${router.pathname === link.path ? "active" : ""}`}
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </span>
        ))}
      </div>

      {/* Kanan — hamburger (mobile only) */}
      <HamburgerBtn
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen((v) => !v);
        }}
        aria-label="toggle menu"
      >
        <span />
        <span />
        <span />
      </HamburgerBtn>

      {/* Mobile dropdown */}
      {menuOpen && (
        <MobileMenu onClick={() => setMenuOpen(false)}>
          {NAV_LINKS.map((link) => (
            <span
              key={link.path}
              className={`mobile-link ${router.pathname === link.path ? "active" : ""}`}
              onClick={() => navigate(link.path)}
            >
              {link.label}
            </span>
          ))}
        </MobileMenu>
      )}
    </NavbarWrap>
  );
}
