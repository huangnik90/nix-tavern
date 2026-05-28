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
} from "./elements";

import { FaGitAlt, FaGithub, FaFigma, FaAws } from "react-icons/fa";

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

const FRONTEND_SKILLS = [
  { name: "React / Next.js", level: "MASTER", pct: "95%", delay: "0.1s" },
  { name: "JavaScript ES6+", level: "ELITE", pct: "90%", delay: "0.2s" },
  { name: "CSS3 / HTML5", level: "EXPERT", pct: "88%", delay: "0.3s" },
  { name: "Styled Components", level: "EXPERT", pct: "95%", delay: "0.4s" },
  { name: "TypeScript", level: "EXPERT", pct: "88%", delay: "0.5s" },
  { name: "Redux", level: "MASTER", pct: "92%", delay: "0.6s" },
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
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Postman", icon: SiPostman },
];

const CONTRACTS = [
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
    name: "Toyota Motors",
    role: "Automotive Industry · Event App",
    status: "completed",
    label: "COMPLETED",
  },
  {
    name: "Gaudt Dashboard",
    role: "Logistics & Mapping · Ongoing",
    status: "active",
    label: "ACTIVE",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Skills() {
  const router = useRouter();
  const { playing, toggleMusic } = useMusic();

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
            {FRONTEND_SKILLS.map((s) => (
              <SkillRow key={s.name} $pct={s.pct} $delay={s.delay}>
                <div className="skill-meta">
                  <span className="skill-name">{s.name}</span>
                  <span>
                    <span className="skill-level">{s.level}</span>
                    <span className="skill-pct">{s.pct}</span>
                  </span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" />
                </div>
              </SkillRow>
            ))}
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
      </ScrollArea>
    </Scene>
  );
}
