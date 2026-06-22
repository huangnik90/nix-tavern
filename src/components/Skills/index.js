import { useRouter } from "next/router";
import { useMusic } from "../../pages/_app";
import { MusicBtn } from "../Home/elements";
import {
  Scene,
  BgImage,
  Overlay,
  Navbar,
  ScrollArea,
  AdventurerHeader,
  HeaderDivider,
  Grid,
  FullWidth,
  QuestCard,
  SkillRow,
  InfraItem,
  RelicGrid,
  RelicTag,
  ContractItem,
  ContactButton,
  ContactPrompt,
} from "./elements";

import {
  SiReact,
  SiJavascript,
  SiRedux,
  SiStyledcomponents, // perbaikan: huruf C besar
  SiDatadog,
  SiReactquery,
  SiOpenai,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa"; // alternatif untuk CSS3
import { FaGitAlt, FaGithub, FaFigma, FaAws } from "react-icons/fa";
import NixNavbar from "../shared/NixNavbar";
import {
  SiVercel,
  SiMapbox,
  SiPostman,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { TbBolt, TbPlugConnected, TbApi } from "react-icons/tb";

import { VscVscode } from "react-icons/vsc";
// ─── Data ─────────────────────────────────────────────────────────────────────

const FRONTEND_TOOLS = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Styled Components", icon: SiStyledcomponents },
  { name: "Redux", icon: SiRedux },
  { name: "Next.js", icon: SiNextdotjs }, // tambah
  { name: "TanStack Query", icon: SiReactquery }, // tambah
  { name: "TypeScript", icon: SiTypescript },
  { name: "Zustand", icon: SiDatadog },

  { name: "OpenAI API", icon: SiOpenai },
];

const INFRA_SKILLS = [
  {
    icon: <TbBolt />,
    name: "Supabase",
    desc: "Auth, Realtime DB, Row-level Security and storage integrations.",
  },
  {
    icon: <TbPlugConnected />,
    name: "Socket.io",
    desc: "High-frequency real-time event synchronization and websocket management.",
  },
  {
    icon: <TbApi />,
    name: "REST API",
    desc: "Optimized data fetching, custom hooks, and third-party integrations.",
  },
];

const RELICS = [
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Vercel", icon: SiVercel },
  { name: "AWS Amplify", icon: FaAws },
  { name: "Mapbox", icon: SiMapbox },
  { name: "Figma", icon: FaFigma },
  { name: "VS Code", icon: VscVscode },
  { name: "Postman", icon: SiPostman },
];

const CONTRACTS = [
  {
    name: "Gaudt Dashboard",
    role: "Global Route Mapping Platform · Ongoing",
    status: "active",
    label: "ACTIVE",
  },
  {
    name: "Mobadas",
    role: "Japan Coastal Sea Level Mapping System · Ongoing",
    status: "active",
    label: "ACTIVE",
  },
  {
    name: "Allianz Global",
    role: "Insurance Industry · 18 Months",
    status: "completed",
    label: "COMPLETED",
  },
  {
    name: "BAT Services",
    role: "FMCG Industry · 12 Months",
    status: "completed",
    label: "COMPLETED",
  },
  {
    name: "Toyota Events Portal",
    role: "Automotive Industry · Event Management App",
    status: "completed",
    label: "COMPLETED",
  },
];
// ─── Component ────────────────────────────────────────────────────────────────

export default function Skills() {
  const router = useRouter();
  const { playing, toggleMusic } = useMusic();

  return (
    <Scene>
      <BgImage src="/images/tavern-bg.webp" alt="tavern" fetchpriority="high" />
      <Overlay />
      <NixNavbar />

      <MusicBtn
        $playing={playing}
        onClick={toggleMusic}
        aria-label="toggle music"
      >
        <span className="note">{playing ? "♫" : "♪"}</span>
      </MusicBtn>

      <ScrollArea>
        {/* ── Adventurer Header ── */}
        <AdventurerHeader>
          <div className="profile-left">
            <span className="adventurer-tag">Adventurer Profile</span>
            <div className="adventurer-name">Quest Log</div>
            <div className="adventurer-class">
              Frontend Developer · Web Craftsman
            </div>
          </div>
          <div className="profile-right">
            <div className="stat-block">
              <span className="stat-label">Class</span>
              <span
                className="stat-value"
                style={{ fontSize: "clamp(0.75rem, 2vw, 1rem)" }}
              >
                Web Mage
              </span>
            </div>
            <div className="stat-block">
              <span className="stat-label">Level</span>
              <span className="stat-value">32</span>
              <div className="xp-bar-wrap">
                <div className="xp-bar-fill" />
              </div>
              <span className="stat-sub">XP 9,240 / 10,000</span>
            </div>
          </div>
        </AdventurerHeader>

        <HeaderDivider />

        <Grid>
          {/* ── Frontend Core ── */}
          <QuestCard $delay="0.1s">
            <div className="card-header">
              <span className="card-icon">&lt;/&gt;</span>
              <span className="card-title">Frontend Core</span>
              <span className="card-rank">Master Rank</span>
            </div>
            <RelicGrid>
              {FRONTEND_TOOLS.map((tool) => {
                const Icon = tool.icon;
                return (
                  <RelicTag key={tool.name}>
                    <Icon size={28} />
                    <span>{tool.name}</span>
                  </RelicTag>
                );
              })}
            </RelicGrid>
          </QuestCard>

          {/* ── Relics & Tools ── */}
          <QuestCard $delay="0.2s">
            <div className="card-header">
              <span className="card-icon">⚙</span>
              <span className="card-title">Relics &amp; Tools</span>
            </div>
            <RelicGrid>
              {RELICS.map((r) => {
                const Icon = r.icon;

                return (
                  <RelicTag key={r.name}>
                    <Icon size={28} />
                    <span>{r.name}</span>
                  </RelicTag>
                );
              })}
            </RelicGrid>
          </QuestCard>

          {/* ── Mystic Infrastructure ── */}
          <QuestCard $delay="0.3s">
            <div className="card-header">
              <span className="card-icon">◈</span>
              <span className="card-title">Mystic Infrastructure</span>
            </div>
            {INFRA_SKILLS.map((s) => (
              <InfraItem key={s.name}>
                <div className="infra-icon">{s.icon}</div>
                <div className="infra-info">
                  <div className="infra-name">{s.name}</div>
                  <div className="infra-desc">{s.desc}</div>
                </div>
              </InfraItem>
            ))}
          </QuestCard>

          {/* ── Legendary Contracts ── */}
          <QuestCard $delay="0.4s">
            <div className="card-header">
              <span className="card-icon">📜</span>
              <span className="card-title">Legendary Contracts</span>
            </div>
            {CONTRACTS.map((c) => (
              <ContractItem key={c.name} $status={c.status}>
                <div className="contract-left">
                  <div className="contract-name">{c.name}</div>
                  <div className="contract-role">{c.role}</div>
                </div>
                <div className="contract-status">
                  <div className="status-dot" />
                  {c.label}
                </div>
              </ContractItem>
            ))}
          </QuestCard>
        </Grid>

        <ContactPrompt>⚔️ Are you looking for me? ⚔️</ContactPrompt>

        <ContactButton onClick={() => router.push("/contact")}>
          <span className="btn-icon">✉</span>
          <span className="btn-text">Send a Raven</span>
          <span className="btn-arrow">→</span>
        </ContactButton>
      </ScrollArea>
    </Scene>
  );
}
