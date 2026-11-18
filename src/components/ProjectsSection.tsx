import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { PROFILE, PROJECTS } from '../data/resume'
import { GithubIcon, Reveal, SectionHeader, Tag } from './ui'

const ProjectsSection: React.FC = () => (
  <section id="projects" className="border-b border-line py-20 md:py-28">
    <div className="shell">
      <SectionHeader index="03" label="Projects" title="Selected builds" />

      <div className="grid gap-px border border-line bg-line lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.05} className="flex flex-col bg-ink p-6 md:p-8">
            <p className="font-mono text-xs text-signal">P-0{i + 1}</p>
            <h3 className="mt-8 text-xl font-semibold tracking-tight text-fg">{project.name}</h3>
            <p className="mt-3 flex-1 text-[15px] leading-relaxed text-soft">{project.description}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </div>
          </Reveal>
        ))}
      </div>

      <a
        href={PROFILE.repositories}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex items-center gap-2 font-mono text-sm text-soft transition-colors hover:text-signal"
      >
        <GithubIcon /> All repositories on GitHub <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </div>
  </section>
)

export default ProjectsSection
