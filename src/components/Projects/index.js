import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Scene, BgImage, Overlay, Navbar,
  BartenderStrip, CardsArea, SectionHeader, ProjectCard
} from './elements'

// ─── Your real projects go here ───────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'Real-time Chat App',
    desc: 'Full-stack messaging with live presence',
    body: 'Room-based channels, live typing indicators, and read receipts. Auth via Supabase, websocket layer via Socket.io.',
    tags: [
      { label: 'Next.js',   cls: 'green' },
      { label: 'Socket.io', cls: 'blue'  },
      { label: 'Supabase',  cls: 'blue'  },
    ],
    demo: '#',
    repo: '#',
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    desc: 'Data visualization for internal metrics',
    body: 'Filterable charts, date range pickers, and exportable reports. Built with React and custom styled components.',
    tags: [
      { label: 'React',    cls: 'green' },
      { label: 'Supabase', cls: 'blue'  },
      { label: 'CSS',      cls: 'amber' },
    ],
    demo: '#',
    repo: '#',
  },
  {
    id: 3,
    title: 'E-commerce Storefront',
    desc: 'Product catalog with cart & checkout',
    body: 'Dynamic product pages, cart state management, and Stripe integration. SSR via Next.js for SEO performance.',
    tags: [
      { label: 'Next.js',    cls: 'green' },
      { label: 'JavaScript', cls: 'amber' },
    ],
    demo: '#',
    repo: '#',
  },
]

export default function Projects() {
  const router               = useRouter()
  const [active, setActive]  = useState(null)

  function toggle(id) {
    setActive(prev => (prev === id ? null : id))
  }

  return (
    <Scene>
      <BgImage src="/images/tavern-bg.png" alt="tavern" />
      <Overlay />

      {/* ── Navbar ── */}
      <Navbar>
        <span className="back" onClick={() => router.push('/')}>← back to bar</span>
        <span className="title">NIX</span>
        <span className="spacer" />
      </Navbar>

      {/* ── Bartender strip ── */}
      <BartenderStrip>
        <img
          className="bt-img"
          src="/images/bartender-glass.png"
          alt="bartender"
        />
        <div className="counter-top" />
        <div className="counter-face" />
        <span className="bt-quote">"here's what i've built..."</span>
      </BartenderStrip>

      {/* ── Cards ── */}
      <CardsArea>
        <SectionHeader>
          <span className="label">PROJECTS</span>
          <span className="heading">WHAT I'VE SHIPPED</span>
          <span className="line" />
        </SectionHeader>

        {PROJECTS.map((p, i) => (
          <ProjectCard
            key={p.id}
            $index={i}
            className={active === p.id ? 'active' : ''}
            onClick={() => toggle(p.id)}
          >
            <div className="card-header">
              <div className="num">0{p.id}</div>
              <div className="info">
                <div className="proj-title">{p.title}</div>
                <div className="proj-desc">{p.desc}</div>
              </div>
              <div className="tags">
                {p.tags.map(t => (
                  <span key={t.label} className={`tag ${t.cls}`}>{t.label}</span>
                ))}
              </div>
            </div>

            <div className={`card-body ${active === p.id ? 'open' : ''}`}>
              <div className="card-inner">
                <p>{p.body}</p>
                <div className="links">
                  <a href={p.demo} className="link-btn" target="_blank" rel="noreferrer">live demo</a>
                  <a href={p.repo} className="link-btn" target="_blank" rel="noreferrer">github</a>
                </div>
              </div>
            </div>
          </ProjectCard>
        ))}
      </CardsArea>
    </Scene>
  )
}
