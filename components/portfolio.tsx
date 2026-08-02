'use client'

import { FormEvent, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight, Check, ChevronUp, Copy, Download, Github, Linkedin, Mail, Menu, Search, Send, X } from 'lucide-react'
import { achievements, nav, projects, skills, timeline } from '@/data/portfolio'

const reveal = { hidden: { opacity: 0, y: 26 }, visible: { opacity: 1, y: 0, transition: { duration: .55 } } }
const projectMedia: Record<string, { images: string[], logo?: string }> = {
  MedGuardian: { images: ['/images/projects/medguardian-1.png', '/images/projects/medguardian-2.png', '/images/projects/medguardian-4.png'], logo: '/images/projects/medguardian-3.png' },
  SIR: { images: ['/images/projects/sir-1.jpg', '/images/projects/sir-2.jpg'], logo: '/images/projects/sir-3.png' },
  'HT Bank System': { images: ['/images/projects/ht-bank-1.png', '/images/projects/ht-bank-2.png', '/images/projects/ht-bank-3.png'] },
  'Inventory Optimization': { images: ['/images/projects/inventory-1.png', '/images/projects/inventory-2.png', '/images/projects/inventory-3.png'] },
}

function Section({ id, kicker, title, children }: { id: string, kicker: string, title: string, children: React.ReactNode }) {
  return <section id={id} className="section"><motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .18 }} variants={reveal}><p className="eyebrow">{kicker}</p><h2>{title}</h2></motion.div>{children}</section>
}

function LinkIcon({ href, label, children }: { href: string, label: string, children: React.ReactNode }) {
  return <a className="icon-button" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}>{children}</a>
}

export default function Portfolio() {
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [copied, setCopied] = useState(false)
  const [sent, setSent] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 22 })
  const visibleProjects = useMemo(() => projects.filter(p => (filter === 'All' || p.tags.includes(filter)) && `${p.name} ${p.type} ${p.description}`.toLowerCase().includes(search.toLowerCase())), [filter, search])

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setSent(true); e.currentTarget.reset() }

  return <main>
    <motion.div className="progress" style={{ scaleX: progress }} />
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="mobile-header"><a href="#home" className="monogram">MR</a><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button></header>
    <aside className={open ? 'sidebar sidebar-open' : 'sidebar'}><a href="#home" className="brand"><span className="monogram">MR</span><span>MOHAMED RAYAN<br/>HTALAL</span></a><nav>{nav.map((item, i) => <a key={item} onClick={() => setOpen(false)} href={`#${item.toLowerCase()}`}><span>0{i + 1}</span>{item}</a>)}</nav><div className="sidebar-social"><LinkIcon href="https://github.com/SHR2006acc/" label="GitHub"><Github/></LinkIcon><LinkIcon href="https://www.linkedin.com/in/mohamed-rayan-htalal-7abb4b345/" label="LinkedIn"><Linkedin/></LinkIcon><LinkIcon href="mailto:htalalrayan@gmail.com" label="Email"><Mail/></LinkIcon></div><p className="sidebar-note">Casablanca, Morocco<br/><em>Available for meaningful work</em></p></aside>
    <div className="content">
      <section id="home" className="hero"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}><p className="eyebrow">AI · SOFTWARE · SYSTEMS</p><h1>Curious by<br/><i>design.</i></h1><p className="hero-copy">I’m Mohamed Rayan Htalal, an AI & Software Engineering student building intelligent applications for real-world problems.</p><div className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowDownRight/></a><a className="button ghost" href="/resume/Rayan%20CV%202026-08.pdf" download="Mohamed-Rayan-Htalal-CV.pdf">Download CV <Download/></a><a className="button ghost" href="#contact">Let’s connect <ArrowUpRight/></a></div></motion.div><motion.div className="portrait-wrap" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2, duration: .7 }}><div className="portrait-placeholder"><img src="/images/projects/profile.png" alt="Mohamed Rayan Htalal"/></div><div className="portrait-orbit"/><p className="portrait-tag">Thinking in systems.<br/>Building for people.</p></motion.div><a className="scroll-cue" href="#about">Scroll to discover <span>↓</span></a></section>
      <Section id="about" kicker="01 — ABOUT" title="Engineering is where curiosity becomes impact."><div className="about-grid"><p className="lead">I chose engineering because I’ve been drawn to difficult problems for as long as I can remember. I like the moment when an unclear challenge becomes a path forward.</p><div><p>I’m especially interested in artificial intelligence, software engineering, embedded systems, IoT, and robotics—fields where ideas can become useful systems. I’m constantly learning, and I value the kind of progress that comes from working closely with others.</p><p>Hackathons, competitions, and innovation programs keep that energy practical. My long-term goal is to become a world-class AI and software engineer, helping build technology that makes people’s lives better.</p></div></div><div className="education"><div><span className="edu-year">2024 — 2029</span><h3>ENSAM Casablanca</h3><p>Artificial Intelligence & Software Engineering</p><small>Studying AI, software engineering, embedded systems, computer science, mathematics, and engineering fundamentals.</small></div><div><span className="edu-year">2024</span><h3>Baccalaureate</h3><p>Science Mathématiques B</p><small>Graduated in 2024.</small></div></div></Section>
      <Section id="experience" kicker="02 — EXPERIENCE" title="Learning in rooms where ideas meet people."><div className="timeline">{timeline.map(([org, role, desc], index) => <motion.article key={org} className="timeline-item" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}><span className="timeline-index">0{index + 1}</span><div><p className="timeline-role">{role}</p><h3>{org}</h3><p>{desc}</p></div></motion.article>)}</div></Section>
      <Section id="projects" kicker="03 — SELECTED WORK" title="Projects with a reason to exist."><div className="project-tools"><div className="filter-row">{['All', 'ESP32', 'Next.js', 'C', 'Python'].map(x => <button key={x} className={filter === x ? 'filter active' : 'filter'} onClick={() => setFilter(x)}>{x}</button>)}</div><label className="search"><Search/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search projects" aria-label="Search projects"/></label></div><div className="project-grid"><AnimatePresence mode="popLayout">{visibleProjects.map((p, i) => { const Icon = p.icon; const media = projectMedia[p.name]; return <motion.article layout initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .96 }} key={p.name} className={`project-card ${p.tone}`}><div className="project-art">{media ? <img src={media.images[0]} alt={`${p.name} project preview`}/> : <Icon/>}{media?.logo && <img className="project-logo" src={media.logo} alt={`${p.name} logo`}/>}<span>0{i + 1}</span></div><div className="project-body">{p.award && <p className="award">✦ {p.award}</p>}<p className="project-type">{p.type}</p><h3>{p.name}</h3><p>{p.description}</p>{media && media.images.length > 1 && <div className="project-gallery">{media.images.slice(1).map((image, imageIndex) => <a key={image} href={image} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} screenshot ${imageIndex + 2}`}><img src={image} alt={`${p.name} screenshot ${imageIndex + 2}`}/></a>)}</div>}<div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><div className="project-links"><a href="https://github.com/SHR2006acc/" target="_blank" rel="noreferrer">Source <Github/></a><span>Demo available on request <ArrowUpRight/></span></div></div></motion.article> })}</AnimatePresence></div></Section>
      <Section id="skills" kicker="04 — TOOLKIT" title="A practical, growing technical range."><div className="skills-grid">{skills.map(({ title, icon: Icon, items }) => <motion.article key={title} className="skill-card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}><Icon/><h3>{title}</h3><div>{items.map(i => <span key={i}>{i}</span>)}</div></motion.article>)}</div></Section>
      <Section id="achievements" kicker="05 — RECOGNITION" title="Built together. Recognized together."><div className="achievement-list">{achievements.map(([num, title, event, project]) => <motion.article key={num} className="achievement" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}><span>{num}</span><div><p>{title}</p><h3>{event}</h3>{project && <small>Project · {project}</small>}</div><ArrowUpRight/></motion.article>)}</div><div className="cert-note"><p className="eyebrow">CERTIFICATIONS</p><h3>Continuous learning, formally recognized.</h3><p>Python Essentials 1 — Cisco Networking Academy · ESL004 Advanced English (C1) · Summer University Program — AI & Citizenship · UH2C International Summer School 2026</p></div></Section>
      <Section id="contact" kicker="06 — CONTACT" title="Let’s build something that matters."><div className="contact-grid"><div><p className="lead">Whether it’s an opportunity, a challenge, or simply a conversation about technology—I’d love to hear from you.</p><a className="email-link" href="mailto:htalalrayan@gmail.com">htalalrayan@gmail.com <ArrowUpRight/></a><button className="copy-link" onClick={() => { navigator.clipboard.writeText('htalalrayan@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 1800) }}>{copied ? <><Check/> Copied</> : <><Copy/> Copy email</>}</button></div><form onSubmit={submit}><label>Name<input name="name" required placeholder="Your name"/></label><label>Email<input type="email" name="email" required placeholder="you@example.com"/></label><label>Message<textarea name="message" required placeholder="Tell me a little about what’s on your mind."/></label><button className="button primary" type="submit">{sent ? <>Message noted <Check/></> : <>Send message <Send/></>}</button></form></div></Section>
      <footer><span>© 2026 Mohamed Rayan Htalal</span><span>Designed & built with care using Next.js, TypeScript, Tailwind & Framer Motion.</span></footer>
    </div><a href="#home" className="to-top" aria-label="Back to top"><ChevronUp/></a>
  </main>
}
