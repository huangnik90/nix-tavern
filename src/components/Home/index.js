import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  Scene, BgImage, Overlay, DustParticle,
  Navbar, MusicBtn, BartenderWrap, Counter, DialogBox
} from './elements'

const DUST = [
  { left: '18%', top: '72%', size: '3px', duration: '9s',  delay: '0s' },
  { left: '40%', top: '68%', size: '2px', duration: '12s', delay: '3s' },
  { left: '65%', top: '74%', size: '3px', duration: '8s',  delay: '5s' },
  { left: '82%', top: '70%', size: '2px', duration: '11s', delay: '1s' },
  { left: '52%', top: '76%', size: '2px', duration: '10s', delay: '7s' },
]

const IDLE_DIALOG    = 'Welcome to NIX. A quiet place to explore the works of a web developer. Talk to the bartender.'
const HOVER_DIALOGS  = [
  '"Need something? I\'ve got a few projects lined up."',
  'He slides a card across the counter without a word.',
  '"Take a look. Been working on some things."',
]

export default function Home() {
  const router                    = useRouter()
  const [playing, setPlaying]     = useState(false)
  const [dialogText, setDialog]   = useState(IDLE_DIALOG)
  const audioRef                  = useRef(null)

  // initialise audio once
  useEffect(() => {
    audioRef.current = new Audio('/audio/lounge.mp3')
    audioRef.current.loop   = true
    audioRef.current.volume = 0.35
    return () => audioRef.current?.pause()
  }, [])

  function toggleMusic() {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})   // browser may block until interaction
    }
    setPlaying(p => !p)
  }

  function onBartenderEnter() {
    const line = HOVER_DIALOGS[Math.floor(Math.random() * HOVER_DIALOGS.length)]
    setDialog(line)
  }

  function onBartenderLeave() {
    setDialog(IDLE_DIALOG)
  }

  function goProjects() {
    router.push('/projects')
  }

  return (
    <Scene>
      {/* ── Background ── */}
      <BgImage src="/images/tavern-bg.png" alt="tavern" />
      <Overlay />

      {/* ── Dust ── */}
      {DUST.map((d, i) => (
        <DustParticle key={i} {...d} />
      ))}

      {/* ── Navbar ── */}
      <Navbar>
        <div className="brand">
          <span className="brand-main">NIX</span>
          <span className="brand-sub">portfolio &amp; works</span>
        </div>
        <div className="nav-links">
          <span className="nav-link active">Projects</span>
          <span className="nav-link" onClick={() => router.push('/skills')}>Skills</span>
          <span className="nav-link" onClick={() => router.push('/contact')}>Contact</span>
        </div>
        <div className="nav-icons">
          <div className="nav-icon" title="About me" onClick={() => router.push('/about')}>
            ○
          </div>
          <div className="nav-icon" title="Resume">
            ↓
          </div>
        </div>
      </Navbar>

      {/* ── Music ── */}
      <MusicBtn $playing={playing} onClick={toggleMusic} aria-label="toggle music">
        <span className="note">{playing ? '♫' : '♪'}</span>
      </MusicBtn>

      {/* ── Bartender ── */}
      <BartenderWrap
        onMouseEnter={onBartenderEnter}
        onMouseLeave={onBartenderLeave}
        onClick={goProjects}
      >
        <span className="tip">view projects</span>
        <img className="idle" src="/images/bartender-idle.png" alt="bartender" />
        <img className="glass" src="/images/bartender-glass.png" alt="bartender holding glass" />
        <div className="glow" />
      </BartenderWrap>

      {/* ── Counter (foreground) ── */}
      <Counter />

      {/* ── Dialog ── */}
      <DialogBox>
        <div className="corner-tr" />
        <div className="corner-bl" />
        <div className="tag">SYSTEM MESSAGE</div>
        <div className="text">{dialogText}</div>
        <div className="hint">CLICK TO INTERACT ˅</div>
      </DialogBox>
    </Scene>
  )
}
