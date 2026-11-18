import React from 'react'
import { EXPERIENCE } from '../data/resume'
import { Reveal, SectionHeader } from './ui'

const AboutSection: React.FC = () => (
  <section id="experience" className="border-b border-line py-20 md:py-28">
    <div className="shell">
      <SectionHeader index="02" label="Experience" title="From backend services to production AI" />

      <ol className="border-t border-line">
        {EXPERIENCE.map(job => (
          <li key={job.company} className="border-b border-line">
            <Reveal className="grid gap-5 py-9 md:grid-cols-12 md:gap-8 md:py-11">
              <div className="md:col-span-4">
                <p className="font-mono text-[13px] text-muted">{job.period}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-fg">{job.role}</h3>
                <p className="mt-1 text-[15px] text-soft">{job.company}</p>
                <p className="mt-0.5 text-sm text-muted">{job.location}</p>
                {job.current && (
                  <p className="mt-3 inline-flex items-center gap-2 font-mono text-xs text-signal">
                    <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" /> Current role
                  </p>
                )}
              </div>
              <ul className="space-y-3.5 md:col-span-8">
                {job.points.map(point => (
                  <li key={point} className="relative pl-5 text-[15px] leading-relaxed text-soft">
                    <span className="absolute left-0 top-[0.7em] h-px w-2.5 bg-faint" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
)

export default AboutSection
