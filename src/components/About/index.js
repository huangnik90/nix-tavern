import { useRouter } from "next/router";
import { useMusic } from "../../pages/_app";
import { MusicBtn } from "../Home/elements";
import {
  Scene,
  BgImage,
  Overlay,
  Navbar,
  ScrollArea,
  AboutContainer,
  AboutGrid,
  CharacterCard,
  CharacterImage,
  CharacterInfo,
  ExperiencePanel,
  PanelTitle,
  WorkCard,
  ContactPrompt,
  ContactButton,
} from "./elements";

const WorkHistory = [
  {
    title: "Frontend Web Developer",
    company: "Treeclouds",
    startDate: "2020-01",
    endDate: null,
    location: "Jakarta, Indonesia · Remote",
    description:
      "Develop and maintain frontend applications using React and Next.js. Collaborate with design team to implement responsive UI. Optimize performance and accessibility.",
    tech: [
      "JavaScript",
      "React.js",
      "Next.js",
      "Styled Components",
      "TanStack Query",
    ],
  },
  {
    title: "Front End Developer",
    company: "Ayannah",
    startDate: "2019-07",
    endDate: "2020-03",
    location: "Indonesia",
    description:
      "Built user interfaces for financial services platform. Integrated REST APIs and ensured cross-browser compatibility.",
    tech: ["JavaScript", "React", "CSS3", "Redux"],
  },
  {
    title: "Full-stack Developer Training",
    company: "Purwadhika Startup School",
    startDate: "2019-01",
    endDate: "2019-05",
    location: "Indonesia",
    description:
      "Mobile and Web Development - JC-08 (React and React Native). Best Project - Create E-commerce website with real-time chatting application.",
    tech: ["React", "React Native", "Node.js", "Socket.io"],
  },
];

export default function About() {
  const router = useRouter();
  const { playing, toggleMusic } = useMusic();

  const formatWorkPeriod = (startDate, endDate = null) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();

    const formatter = new Intl.DateTimeFormat("en", {
      month: "short",
      year: "numeric",
    });

    const totalMonths =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const duration = [];

    if (years > 0) {
      duration.push(`${years} yr${years > 1 ? "s" : ""}`);
    }

    if (months > 0) {
      duration.push(`${months} mo${months > 1 ? "s" : ""}`);
    }

    return `${formatter.format(start)} - ${
      endDate ? formatter.format(end) : "Present"
    } · ${duration.join(" ")}`;
  };

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
        <AboutContainer>
          <AboutGrid>
            <CharacterCard>
              <CharacterImage src="/images/bartender-nix-2.png" alt="Nix" />

              <CharacterInfo>
                <div className="name">Nix</div>

                <div className="class">Frontend Bartender</div>

                <div className="divider" />

                <div className="label">Introduction</div>

                <div className="value">
                  Frontend engineer with 6+ years of experience building
                  dashboards, enterprise systems and modern web applications.
                </div>

                <div className="label">Current Quest</div>

                <div className="value">
                  Building scalable products using React, Next.js, TypeScript
                  and modern frontend architecture.
                </div>

                <div className="label">Rank</div>

                <div className="value">Master Frontend Engineer</div>
              </CharacterInfo>
            </CharacterCard>

            <ExperiencePanel>
              <PanelTitle>Guild History</PanelTitle>

              {WorkHistory.map((job, idx) => (
                <WorkCard key={idx}>
                  <div className="work-header">
                    <div className="work-title">{job.title}</div>

                    <div className="work-date">
                      {formatWorkPeriod(job.startDate, job.endDate)}
                    </div>
                  </div>

                  <div className="work-company">
                    {job.company} · {job.location}
                  </div>

                  <div className="work-description">{job.description}</div>

                  <div className="tech-stack">
                    {job.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </WorkCard>
              ))}
            </ExperiencePanel>
          </AboutGrid>

          <ContactPrompt>Ready for the next adventure</ContactPrompt>
          <ContactButton onClick={() => router.push("/contact")}>
            <span className="btn-icon">✉</span>
            <span className="btn-text">Send a Raven</span>
            <span className="btn-arrow">→</span>
          </ContactButton>
        </AboutContainer>
      </ScrollArea>
    </Scene>
  );
}
