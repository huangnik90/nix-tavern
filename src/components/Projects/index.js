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
      "Built a full booking platform for a water sports company — real-time seat availability, live updates via Supabase, and interactive hover experiences. Handles lesson scheduling, rentals, and tour bookings end-to-end.",
    techs: ["Next.js", "Supabase", "React", "Real-time"],
    screenshot: "/images/paddleboard.webp",
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
    screenshot: "/images/tc-art.webp",
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
      "Built 20+ pages from scratch for a global urban analytics platform (Nippon Koei) spanning 12+ cities across Asia, Europe, and the Americas. Features include crowd flow visualization, isochrone accessibility mapping, amenities demand heatmaps, and multimodal route planning with real-time fare estimation. Ongoing — 3 years of continuous development and maintenance.",
    techs: ["Next.js", "Mapbox", "React", "Real-time"],
    screenshot: "/images/gaudt.webp",
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
      "Developed internal web pages for a major insurance enterprise — including an event portal and pre/post-test assessment flows for client-facing programs. Part of a larger agent and policy management platform.",
    techs: ["React", "Redux", "REST API"],
    screenshot: "/images/allianz.webp",
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
      "Contributed to a large-scale internal platform for a leading FMCG company — resolving hundreds of bug tickets and building new registration flows. High-volume codebase with distributor management and internal tooling.",
    techs: ["React", "Redux", "REST API"],
    screenshot: "/images/bat.webp",
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
      "Built a mobile web app for Toyota's Dealer Convention in Bali — guests checked in via QR code scan on arrival and were assigned table seats in real-time. Handled live attendance tracking for a large-scale corporate event.",
    techs: ["Next.js", "React", "Mobile Web"],
    screenshot: "/images/toyota.webp",
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
      "Built a Financial Technology platform from scratch — architected both the admin dashboard and user-facing pages. Admin side covers loan management and borrower oversight; user side handles application flows and account views.",
    techs: ["Redux", "Rest API", "React", "Responsive Design"],
    screenshot: "/images/asira.webp",
    live: "https://www.ayannah.com/products",
    github: null,
    nda: false,
  },
  {
    id: 8,
    name: "Leadership Capability Journey",
    title: "Enterprise Leadership Development Platform",
    industry: "FMCG Industry",
    description:
      "Translated a executive PowerPoint presentation into a polished interactive web experience for a CEO-level client presentation. Built quickly under tight deadline while maintaining confidentiality of all internal content.",
    techs: [
      "Next.js",
      "React",
      "Styled Components",
      "SharePoint",
      "Power Apps",
    ],
    screenshot: "/images/leadership-journey.webp",
    live: null,
    github: "https://github.com/treeclouds/bat-leadership",
    nda: true,
  },
  {
    id: 9,
    name: "Mobadas",
    title: "Marine Environmental Monitoring System",
    industry: "Environmental & Marine Technology",
    description:
      "Built an interactive marine data visualization platform for Japan's leading infrastructure engineering consultant (Nippon Koei). Features include sea surface temperature heatmaps, time-range filtering, coordinate-based data points, and real-time SST charting across coastal regions. Part of an ongoing environmental monitoring initiative.",
    techs: ["React", "Leaflet", "Geospatial", "Data Visualization", "REST API"],
    screenshot: "/images/mobadas.webp",
    live: null,
    github: null,
    nda: true,
  },
];

export default function Projects() {
  const router = useRouter();
  const [active, setActive] = useState(PROJECTS[0]);
  const [collapsed, setCollapsed] = useState(false);
  const { playing, toggleMusic } = useMusic();
  return (
    <Scene>
      <BgImage src="/images/project_2.webp" alt="tavern wall" />
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
