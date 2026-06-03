import { useState } from "react";
import { useRouter } from "next/router";
import {
  Scene,
  BgImage,
  Overlay,
  Navbar,
  Main,
  Sidebar,
  SidebarItem,
  Content,
  WantedPoster,
  ClassifiedStamp,
  Detail,
  TechTag,
  LinkBtn,
  NdaBadge,
} from "./elements";
import { useMusic } from "../../pages/_app";
import { MusicBtn } from "../Home/elements";
import NixNavbar from "../shared/NixNavbar";
// ─── Projects Data ────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    name: "Paddleboard",
    title: "Paddleco",
    industry: "Sports & Recreation",
    description:
      "Booking platform with real-time availability, hover interactions, and live updates. Built for a water sports company offering paddleboard lessons, rentals and tours.",
    techs: ["Next.js", "Supabase", "React", "Real-time"],
    screenshot: "/images/paddleboard.png",
    live: "https://paddleboard-mu.vercel.app/",
    github: null,
    nda: false,
  },
  {
    id: 2,
    name: "TC Art",
    title: "TC Art Gallery",
    industry: "E-commerce & Art",
    description:
      "E-commerce platform for selling original paintings. Features artist profiles, curated collections, and a smooth checkout experience. Currently in client review.",
    techs: ["Next.js", "React", "CSS", "E-commerce"],
    screenshot: "/images/tc-art.png",
    live: "https://tc-art.vercel.app/",
    github: null,
    nda: false,
  },
  {
    id: 3,
    name: "Gaudt Dash",
    title: "Gaudt Dashboard",
    industry: "Logistics & Mapping",
    description:
      "Internal logistics dashboard with advanced Mapbox integration for a Japanese company. Real-time fleet tracking and route optimization.",
    techs: ["Next.js", "Mapbox", "React", "Real-time"],
    screenshot: "/images/gaudt.png",

    live: null,
    github: null,
    nda: true,
  },
  {
    id: 4,
    name: "Allianz",
    title: "Enterprise Client",
    industry: "Insurance Industry",
    description:
      "Internal web application for a major insurance enterprise. Features include agent portal, policy management, and document workflows.",
    techs: ["React", "Redux", "REST API"],
    screenshot: "/images/allianz.png",
    live: null,
    github: null,
    nda: true,
  },
  {
    id: 5,
    name: "BAT",
    title: "Enterprise Client",
    industry: "FMCG Industry",
    description:
      "Digital platform built for a leading FMCG company. Involves internal tooling and distributor management workflows.",
    techs: ["React", "Redux", "REST API"],
    screenshot: "/images/bat.png",
    live: null,
    github: null,
    nda: true,
  },
  {
    id: 6,
    name: "Toyota",
    title: "Event Check-in App",
    industry: "Automotive Industry",
    description:
      "Mobile web application for Toyota Dealer Convention in Bali. Handles guest check-in, QR scanning, and real-time attendance tracking for a large-scale corporate event.",
    techs: ["Next.js", "React", "Mobile Web"],
    screenshot: "/images/toyota.png",
    live: null,
    github: null,
    nda: true,
  },
  {
    id: 7,
    name: "Asira Ayannah",
    title: "Fintech Platform",
    industry: "Financial Technology",
    description:
      "B2B2C and B2C fintech platform focused on digital lending, insurance, and investment services. Built to simplify loan applications, repayments, insurance access, and future investment products including stocks, bonds, and mutual funds.",
    techs: ["Redux", "Rest API", "React", "Responsive Design"],
    screenshot: "/images/asira.webp",
    live: "https://www.ayannah.com/products",
    github: null,
    nda: false,
  },
];

export default function Projects() {
  const router = useRouter();
  const [active, setActive] = useState(PROJECTS[0]);
  const [collapsed, setCollapsed] = useState(false);
  const { playing, toggleMusic } = useMusic();
  return (
    <Scene>
      <BgImage src="/images/project_1.png" alt="tavern wall" />
      <Overlay />
      <MusicBtn
        $playing={playing}
        onClick={toggleMusic}
        aria-label="toggle music"
      >
        <span className="note">{playing ? "♫" : "♪"}</span>
      </MusicBtn>
      {/* ── Navbar ── */}
      <NixNavbar />

      <Main>
        {/* ── Sidebar ── */}
        <Sidebar $collapsed={collapsed}>
          <div className="sidebar-header">
            <span className="sidebar-label">Projects</span>
            <button
              className="toggle-btn"
              onClick={() => setCollapsed((c) => !c)}
              title={collapsed ? "Expand" : "Collapse"}
            >
              {collapsed ? "»" : "«"}
            </button>
          </div>

          <div className="project-list">
            {PROJECTS.map((p) => (
              <SidebarItem
                key={p.id}
                $active={active.id === p.id}
                onClick={() => setActive(p)}
              >
                <div className="item-icon">{p.name.charAt(0)}</div>
                {!collapsed && (
                  <>
                    <span className="item-name">{p.name}</span>
                    {p.nda && <span className="lock-icon">🔒</span>}
                  </>
                )}
                {collapsed && (
                  <div className="tooltip">
                    {p.name} {p.nda ? "🔒" : ""}
                  </div>
                )}
              </SidebarItem>
            ))}
          </div>
        </Sidebar>

        {/* ── Content ── */}
        <Content key={active.id}>
          {/* WANTED Poster */}
          <WantedPoster>
            <div className="poster-header">
              <div className="wanted-text">WANTED</div>
            </div>
            <div className="poster-divider" />

            <div className="poster-img-wrap">
              {active.screenshot ? (
                <img
                  src={active.screenshot}
                  alt={active.title}
                  style={
                    active.nda
                      ? {
                          filter: "blur(8px) sepia(20%) contrast(1.05)",
                          transform: "scale(1.1)", // scale up biar blur edge tidak keliatan
                        }
                      : {
                          filter: "sepia(20%) contrast(1.05)",
                        }
                  }
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#0e0804",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "rgba(245,166,35,0.2)",
                      letterSpacing: "2px",
                    }}
                  >
                    CLASSIFIED
                  </span>
                </div>
              )}
              {active.nda && <ClassifiedStamp>CLASSIFIED</ClassifiedStamp>}
            </div>

            <div className="poster-divider" />
            <div className="poster-footer">
              <div className="poster-name">{active.title}</div>
              <div className="poster-reward">{active.industry}</div>
            </div>
          </WantedPoster>

          {/* Detail */}
          <Detail>
            <div className="detail-tag">// project</div>
            <div className="detail-title">{active.title}</div>
            <div className="detail-industry">{active.industry}</div>
            <div className="divider" />
            <div className="detail-desc">{active.description}</div>

            <div className="tech-label">// built with</div>
            <div className="tech-list">
              {active.techs.map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
            </div>

            <div className="links">
              {active.nda ? (
                <NdaBadge>🔒 Under NDA</NdaBadge>
              ) : (
                <>
                  {active.live && (
                    <LinkBtn
                      $primary
                      href={active.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </LinkBtn>
                  )}
                  {active.github && (
                    <LinkBtn
                      href={active.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </LinkBtn>
                  )}
                </>
              )}
            </div>
          </Detail>
        </Content>
      </Main>
    </Scene>
  );
}
