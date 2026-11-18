import React from 'react'
import { ArrowUpRight, Mail } from 'lucide-react'
import { PROFILE } from '../data/resume'
import { GithubIcon, LinkedinIcon, Reveal } from './ui'

const LINKS = [
  { label: 'LinkedIn', href: PROFILE.linkedin, icon: <LinkedinIcon /> },
  { label: 'GitHub', href: PROFILE.github, icon: <GithubIcon /> },
]

const ContactSection: React.FC = () => (
  <section id="contact" className="py-20 md:py-28">
    <Reveal className="shell">
      <p className="eyebrow mb-4">
        <span className="text-signal">05</span> / Contact
      </p>
      <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-fg md:text-6xl">
        Let's talk about your LLM systems.
      </h2>

      <a
        href={`mailto:${PROFILE.email}`}
        className="mt-10 flex max-w-full items-center gap-3 break-all font-mono text-base text-signal hover:underline md:text-2xl"
      >
        <Mail size={22} className="flex-none" aria-hidden="true" />
        {PROFILE.email}
      </a>

      <div className="mt-8 flex flex-wrap gap-3">
        {LINKS.map(link => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            {link.icon} {link.label} <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ))}
        {PROFILE.resumeUrl && (
          <a href={PROFILE.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Resume <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>
    </Reveal>
  </section>
)

export default ContactSection
